import { Generic } from '@a11y-ui/core';

import { Events } from '../../enums/events';
import { EventCallback, EventValueOrEventCallback } from '../../types/callbacks';
import { Stringified } from '../../types/common';
import { KoliBriIconProp } from '../../types/icon';
import { Align, PropAlign } from '../../types/props/align';
import { PropAriaLabel } from '../../types/props/aria-label';
import { PropHideLabel } from '../../types/props/hide-label';
import { PropLabel } from '../../types/props/label';

export type KoliBriTabsCallbacks = {
	onCreate?:
		| EventCallback<Event>
		| {
				label: string;
				callback: EventCallback<Event>;
		  };
} & {
	[Events.onSelect]?: EventValueOrEventCallback<CustomEvent | KeyboardEvent | MouseEvent | PointerEvent, number>;
};

type RequiredTabButtonProps = PropLabel;
type OptionalTabButtonProps = {
	disabled: boolean;
	icon: Stringified<KoliBriIconProp>;
	/**
	 * @deprecated use _hide-label
	 */
	iconOnly: boolean;
	tooltipAlign: Align;
} & PropHideLabel;
export type TabButtonProps = Generic.Element.Members<RequiredTabButtonProps, OptionalTabButtonProps>;

type RequiredProps = {
	tabs: Stringified<TabButtonProps[]>;
};
type OptionalProps = {
	on: KoliBriTabsCallbacks;
	/**
	 * @deprecated Use align.
	 */
	tabsAlign: Align;
	selected: number;
} & PropAriaLabel &
	PropLabel &
	PropAlign;

type RequiredStates = {
	selected: number;
	tabs: TabButtonProps[];
} & PropLabel &
	PropAlign;
type OptionalStates = {
	on: KoliBriTabsCallbacks;
};

export type KoliBriTabsStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type KoliBriTabsAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
