import { Component, h, Host, JSX, Prop, State, Watch } from '@stencil/core';

import { translate } from '../../i18n';
import { HeadingLevel } from '../../types/heading-level';
import { validateHasCloser } from '../../types/props/has-closer';
import { LabelPropType, validateLabel } from '../../types/props/label';
import { Log } from '../../utils/dev.utils';
import { setState, watchBoolean, watchValidator } from '../../utils/prop.validators';
import { watchHeadingLevel } from '../heading/validation';
import { AlertType, AlertVariant, API, KoliBriAlertEventCallbacks, States } from './types';

const Icon = (props: { ariaLabel: string; icon: string; label?: string }) => {
	return <kol-icon class="heading-icon" _ariaLabel={typeof props.label === 'string' && props.label.length > 0 ? '' : props.ariaLabel} _icon={props.icon} />;
};

const AlertIcon = (props: { label?: string; type?: AlertType }) => {
	switch (props.type) {
		case 'error':
			return <Icon ariaLabel={translate('kol-error')} icon="codicon codicon-error" label={props.label} />;
		case 'info':
			return <Icon ariaLabel={translate('kol-info')} icon="codicon codicon-info" label={props.label} />;
		case 'warning':
			return <Icon ariaLabel={translate('kol-warning')} icon="codicon codicon-warning" label={props.label} />;
		case 'success':
			return <Icon ariaLabel={translate('kol-success')} icon="codicon codicon-pass" label={props.label} />;
		default:
			return <Icon ariaLabel={translate('kol-message')} icon="codicon codicon-comment" label={props.label} />;
	}
};

/**
 * @slot - Der Inhalt der Meldung.
 */
@Component({
	tag: 'kol-alert-wc',
	shadow: false,
})
export class KolAlertWc implements API {
	private readonly close = () => {
		if (this._on?.onClose !== undefined) {
			this._on.onClose(new Event('Close'));
		}
	};

	private readonly on = {
		onClick: this.close,
	};

	public render(): JSX.Element {
		if (this.state._alert) {
			/**
			 * - https://developer.mozilla.org/de/docs/Web/API/Navigator/vibrate
			 * - https://googlechrome.github.io/samples/vibration/
			 */
			try {
				Log.debug(['Navigator should vibrate ...', navigator.vibrate([100, 75, 100, 75, 100])]);
			} catch (e) {
				Log.debug('Navigator does not support vibration.');
			}

			setTimeout(() => {
				this.validateAlert(false);
			}, 10000);
		}

		return (
			<Host
				class={{
					[this.state._type as string]: true,
					[this.state._variant as string]: true,
				}}
				role={this.state._alert ? 'alert' : undefined}
			>
				<div class="heading">
					<AlertIcon label={this.state._label} type={this.state._type} />
					<div>
						{typeof this.state._label === 'string' && this.state._label?.length > 0 && (
							<kol-heading-wc _label={this.state._label} _level={this.state._level}></kol-heading-wc>
						)}
						{this._variant === 'msg' && (
							<div class="content">
								<slot />
							</div>
						)}
					</div>
					{this.state._hasCloser && (
						<kol-button-wc
							class="close"
							_hideLabel
							_icon={{
								left: {
									icon: 'codicon codicon-close',
								},
							}}
							_label={translate('kol-close')}
							_on={this.on}
							_tooltipAlign="left"
						></kol-button-wc>
					)}
				</div>
				{this._variant === 'card' && (
					<div class="content">
						<slot />
					</div>
				)}
			</Host>
		);
	}

	/**
	 * Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll.
	 */
	@Prop() public _alert?: boolean = false;

	/**
	 * Gibt an, ob die Komponente einen Schließen-Schalter hat.
	 */
	@Prop() public _hasCloser?: boolean = false;

	/**
	 * Defines the description of the component.
	 */
	@Prop() public _label?: LabelPropType;

	/**
	 * Gibt an, welchen H-Level von 1 bis 6 die Überschrift hat. Oder bei 0, ob es keine Überschrift ist und als fett gedruckter Text angezeigt werden soll.
	 */
	@Prop() public _level?: HeadingLevel = 1;

	/**
	 * Gibt die EventCallback-Function für das Schließen des Alerts an.
	 */
	@Prop() public _on?: KoliBriAlertEventCallbacks;

	/**
	 * Setzt den Typ der Komponente oder des interaktiven Elements in der Komponente an.
	 */
	@Prop() public _type?: AlertType = 'default';

	/**
	 * Gibt an, welche Variante der Darstellung genutzt werden soll.
	 */
	@Prop() public _variant?: AlertVariant = 'msg';

	@State() public state: States = {
		_level: 1,
	};

	@Watch('_alert')
	public validateAlert(value?: boolean): void {
		watchBoolean(this, '_alert', value);
	}

	@Watch('_hasCloser')
	public validateHasCloser(value?: boolean): void {
		validateHasCloser(this, value);
	}

	@Watch('_label')
	public validateLabel(value?: LabelPropType): void {
		validateLabel(this, value);
	}

	@Watch('_level')
	public validateLevel(value?: HeadingLevel): void {
		watchHeadingLevel(this, value);
	}

	private validateOnValue = (value: unknown): boolean =>
		typeof value === 'object' && value !== null && typeof (value as KoliBriAlertEventCallbacks).onClose === 'function';

	@Watch('_on')
	public validateOn(value?: KoliBriAlertEventCallbacks): void {
		if (this.validateOnValue(value)) {
			setState<KoliBriAlertEventCallbacks>(
				this,
				'_on',
				{
					onClose: (value as KoliBriAlertEventCallbacks).onClose,
				}
				// {
				// 	afterPatch: (value: unknown) => {
				// 		this._hasCloser = this.validateOnValue(value);
				// 	},
				// }
			);
			// } else {
			// 	setState<KoliBriAlertEventCallbacks>(this, '_on', null, {
			// 		afterPatch: (value: unknown) => {
			// 			this._hasCloser = this.validateOnValue(value);
			// 		},
			// 	});
		}
	}

	@Watch('_type')
	public validateType(value?: AlertType): void {
		watchValidator(
			this,
			'_type',
			(value) => typeof value === 'string' && (value === 'default' || value === 'error' || value === 'info' || value === 'success' || value === 'warning'),
			new Set('String {success, info, warning, error}'),
			value
		);
	}

	@Watch('_variant')
	public validateVariant(value?: AlertVariant): void {
		watchValidator(this, '_variant', (value) => value === 'card' || value === 'msg', new Set('AlertVariant {card, msg}'), value);
	}

	public componentWillLoad(): void {
		this.validateAlert(this._alert);
		this.validateHasCloser(this._hasCloser);
		this.validateLabel(this._label);
		this.validateLevel(this._level);
		this.validateOn(this._on);
		this.validateType(this._type);
		this.validateVariant(this._variant);
	}
}
