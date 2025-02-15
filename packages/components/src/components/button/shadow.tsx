import { Generic } from '@a11y-ui/core';
import { Component, Element, h, Host, JSX, Prop } from '@stencil/core';

import {
	AlternativButtonLinkRole,
	KoliBriButtonCallbacks,
	KoliBriButtonType,
	KoliBriButtonVariant,
	OptionalButtonProps,
	RequiredButtonProps,
} from '../../types/button-link';
import { Stringified } from '../../types/common';
import { KoliBriIconProp } from '../../types/icon';
import { Align } from '../../types/props/align';
import { AriaCurrent } from '../../types/props/aria-current';
import { LabelWithExpertSlotPropType } from '../../types/props/label';
import { StencilUnknown } from '../../types/unknown';
import { propagateFocus } from '../../utils/reuse';

@Component({
	tag: 'kol-button',
	styleUrls: {
		default: './style.css',
	},
	shadow: true,
})
export class KolButton implements Generic.Element.Members<RequiredButtonProps, OptionalButtonProps> {
	@Element() private readonly host?: HTMLKolButtonElement;
	private ref?: HTMLKolButtonWcElement;

	private readonly catchRef = (ref?: HTMLKolButtonWcElement) => {
		this.ref = ref;
		propagateFocus(this.host, this.ref);
	};

	public render(): JSX.Element {
		return (
			<Host>
				<kol-button-wc
					ref={this.catchRef}
					class={{
						button: true,
						[this._variant as string]: this._variant !== 'custom',
						[this._customClass as string]: this._variant === 'custom' && typeof this._customClass === 'string' && this._customClass.length > 0,
					}}
					_accessKey={this._accessKey}
					_ariaControls={this._ariaControls}
					_ariaCurrent={this._ariaCurrent}
					_ariaExpanded={this._ariaExpanded}
					_ariaLabel={this._ariaLabel}
					_ariaSelected={this._ariaSelected}
					_customClass={this._customClass}
					_disabled={this._disabled}
					_hideLabel={this._hideLabel || this._iconOnly}
					_icon={this._icon}
					_iconAlign={this._iconAlign}
					_id={this._id}
					_label={this._label}
					_name={this._name}
					_on={this._on}
					_role={this._role}
					_syncValueBySelector={this._syncValueBySelector}
					_tabIndex={this._tabIndex}
					_tooltipAlign={this._tooltipAlign}
					_type={this._type}
					_value={this._value}
					_variant={this._variant}
				>
					<slot name="expert" slot="expert"></slot>
				</kol-button-wc>
			</Host>
		);
	}

	/**
	 * Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente auslösen oder fokussieren kann.
	 */
	@Prop() public _accessKey?: string;

	/**
	 * Gibt an, welche Elemente kontrolliert werden. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
	 */
	@Prop() public _ariaControls?: string;

	/**
	 * Gibt an, welchen aktuellen Auswahlstatus das interaktive Element der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current)
	 *
	 * @deprecated aria-current is not necessary for buttons. will be removed in version 2.
	 */
	@Prop() public _ariaCurrent?: AriaCurrent;

	/**
	 * Gibt an, ob durch das interaktive Element in der Komponente etwas aufgeklappt wurde. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
	 */
	@Prop() public _ariaExpanded?: boolean;

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 *
	 * @deprecated use _label instead
	 */
	@Prop() public _ariaLabel?: string;

	/**
	 * Gibt an, ob interaktive Element in der Komponente ausgewählt ist (z.B. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
	 */
	@Prop() public _ariaSelected?: boolean;

	/**
	 * Gibt an, welche Custom-Class übergeben werden soll, wenn _variant="custom" gesetzt ist.
	 */
	@Prop() public _customClass?: string;

	/**
	 * Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit.
	 */
	@Prop() public _disabled?: boolean = false;

	/**
	 * Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.
	 */
	@Prop() public _hideLabel?: boolean = false;

	/**
	 * Setzt die Iconklasse (z.B.: `_icon="codicon codicon-home`).
	 */
	@Prop() public _icon?: Stringified<KoliBriIconProp>;

	/**
	 * Deprecated: Gibt an, ob das Icon links oder rechts von der Beschriftung angezeigt werden soll.
	 *
	 * @deprecated
	 */
	@Prop() public _iconAlign?: Align;

	/**
	 * Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.
	 * @deprecated use _hide-label
	 */
	@Prop() public _iconOnly?: boolean;

	/**
	 * Gibt die interne ID des primären Elements in der Komponente an.
	 */
	@Prop() public _id?: string;

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 */
	@Prop() public _label!: LabelWithExpertSlotPropType;

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 */
	@Prop() public _name?: string;

	/**
	 * Gibt die EventCallback-Funktionen für die Button-Events an.
	 */
	@Prop() public _on?: KoliBriButtonCallbacks<StencilUnknown>;

	/**
	 * Gibt die Rolle des primären Elements in der Komponente an.
	 */
	@Prop() public _role?: AlternativButtonLinkRole;

	/**
	 * Selector for synchronizing the value with another input element.
	 * @internal
	 */
	@Prop() public _syncValueBySelector?: string;

	/**
	 * Gibt an, welchen Tab-Index das primäre Element in der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
	 */
	@Prop() public _tabIndex?: number;

	/**
	 * Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll.
	 */
	@Prop() public _tooltipAlign?: Align = 'top';

	/**
	 * Setzt den Typ der Komponente oder des interaktiven Elements in der Komponente an.
	 */
	@Prop() public _type?: KoliBriButtonType = 'button';

	/**
	 * Gibt einen Wert an, den der Schalter bei einem Klick zurückgibt.
	 */
	@Prop() public _value?: Stringified<StencilUnknown>;

	/**
	 * Gibt an, welche Variante der Darstellung genutzt werden soll.
	 */
	@Prop() public _variant?: KoliBriButtonVariant = 'normal';
}
