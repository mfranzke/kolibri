import { Generic } from '@a11y-ui/core';

import { ButtonProps } from '../../types/button-link';
import { KoliBriHorizontalIcon } from '../../types/icon';
import { InputNumberType, OptionalInputProps } from '../../types/input/control/number';
import { Iso8601 } from '../../types/input/iso8601';
import { InputTypeOnDefault, InputTypeOnOff } from '../../types/input/types';
import { PropLabelWithExpertSlot } from '../../types/props/label';
import { PropSuggestions, SuggestionsPropType } from '../../types/props/suggestions';
import { W3CInputValue } from '../../types/w3c';
import { InputRequiredProps } from '../input/types';

type RequiredProps = InputRequiredProps;
type OptionalProps = {
	placeholder: string;
	type: InputNumberType;
	/**
	 * @deprecated Use _suggestions instead.
	 */
	list: SuggestionsPropType;
} & OptionalInputProps<number | Iso8601> &
	PropSuggestions;

type RequiredStates = {
	autoComplete: InputTypeOnOff;
	hasValue: boolean;
	id: string;
	suggestions: W3CInputValue[];
	type: InputNumberType;
} & PropLabelWithExpertSlot;

type OptionalStates = {
	accessKey: string;
	alert: boolean;
	disabled: boolean;
	error: string;
	hideLabel: boolean;
	hint: string;
	icon: KoliBriHorizontalIcon;
	max: string;
	min: string;
	name: string;
	on: InputTypeOnDefault;
	placeholder: string;
	readOnly: boolean;
	required: boolean;
	smartButton: ButtonProps;
	syncValueBySelector: string;
	step: number;
	tabIndex: number;
	touched: boolean;
	value: string;
};

export type Props = Generic.Element.Members<RequiredProps, OptionalProps>;

export type States = Generic.Element.Members<RequiredStates, OptionalStates>;

export type Watches = Generic.Element.Watchers<RequiredProps, OptionalProps>;

export type ComponentApi = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
