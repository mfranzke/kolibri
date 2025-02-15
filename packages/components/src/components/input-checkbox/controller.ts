import { Generic } from '@a11y-ui/core';

import { Stringified } from '../../types/common';
import { validateChecked } from '../../types/props/checked';
import { validateIndeterminate } from '../../types/props/indeterminate';
import { StencilUnknown } from '../../types/unknown';
import { devHint } from '../../utils/a11y.tipps';
import { setState, watchValidator } from '../../utils/prop.validators';
import { isString } from '../../utils/validator';
import { InputCheckboxRadioController } from '../input-radio/controller';
import { InputCheckboxIcon, InputCheckboxVariant, Props, Watches } from './types';

export class InputCheckboxController extends InputCheckboxRadioController implements Watches {
	protected readonly component: Generic.Element.Component & Props;

	public constructor(component: Generic.Element.Component & Props, name: string, host?: HTMLElement) {
		super(component, name, host);
		this.component = component;
	}

	public readonly setFormAssociatedCheckboxValue = (value: StencilUnknown) => {
		if (this.component._checked) {
			this.setFormAssociatedValue(value);
		} else {
			this.setFormAssociatedValue(null);
		}
	};

	public validateChecked(value?: boolean): void {
		validateChecked(this.component, value);
		this.setFormAssociatedCheckboxValue(this.component.state._value as StencilUnknown);
	}

	public validateIcon(value?: Stringified<InputCheckboxIcon>): void {
		watchValidator(
			this.component,
			'_icons',
			(value): boolean => {
				return typeof value === 'object' && value !== null && (isString(value.checked, 1) || isString(value.indeterminate, 1) || isString(value.unchecked, 1));
			},
			new Set(['InputCheckboxIcons']),
			value
		);
	}

	public validateIndeterminate(value?: boolean): void {
		validateIndeterminate(this.component, value);
	}

	/**
	 * @deprecated
	 * @see: components/abbr/component.tsx (@Watch)
	 */
	public validateType(value?: InputCheckboxVariant): void {
		devHint(`The "_type" prop is deprecated. Use "_variant" instead.`);
		this.validateVariant(value);
	}

	public validateValue(value?: Stringified<StencilUnknown>): void {
		setState(this.component, '_value', value);
		this.setFormAssociatedCheckboxValue(this.component.state._value as StencilUnknown);
	}

	public validateVariant(value?: InputCheckboxVariant): void {
		if (value === 'checkbox') {
			devHint(`[KolCheckbox] The "_variant" value 'checkbox' is deprecated. Use the new value 'default' instead.`);
			value = 'default';
		}
		watchValidator(
			this.component,
			'_variant',
			(value): boolean => typeof value === 'string' && (value === 'button' || value === 'default' || value === 'switch'),
			new Set(['String {button, default, switch}']),
			value
		);
	}

	public componentWillLoad(): void {
		super.componentWillLoad();
		this.validateChecked(this.component._checked);
		this.validateIcon(this.component._icon);
		this.validateIndeterminate(this.component._indeterminate);
		this.validateValue(this.component._value);
		this.validateVariant(this.component._variant || this.component._type);
	}
}
