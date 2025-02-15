import { Component, h, JSX, Prop, State, Watch } from '@stencil/core';

import { LinkProps } from '../../types/button-link';
import { Stringified } from '../../types/common';
import { HeadingLevel } from '../../types/heading-level';
import { Orientation } from '../../types/orientation';
import { LabelPropType, validateLabel } from '../../types/props/label';
import { watchBoolean, watchString, watchValidator } from '../../utils/prop.validators';
import { watchHeadingLevel } from '../heading/validation';
import { watchNavLinks } from '../nav/validation';
import { KoliBriLinkGroupAPI, KoliBriLinkGroupStates, ListStyleType } from './types';

const ListItem = (props: { links: LinkProps[]; orientation: Orientation; listStyleType: ListStyleType }): JSX.Element => {
	const list: JSX.Element[] = [];
	props.links.map((link, index: number) => {
		list.push(
			(
				<li
					key={index}
					class={{
						ident: index > 0 && props.orientation === 'vertical',
						'list-none': index === 0 && props.orientation === 'horizontal',
					}}
					style={{
						listStyleType: props.listStyleType,
					}}
				>
					<kol-link {...link}></kol-link>
				</li>
			) as JSX.Element
		);
	});
	return list;
};

@Component({
	tag: 'kol-link-group',
	styleUrls: {
		default: './style.css',
	},
	shadow: true,
})
export class KolLinkGroup implements KoliBriLinkGroupAPI {
	public render(): JSX.Element {
		return (
			<nav
				aria-label={this.state._label}
				class={{
					vertical: this.state._orientation === 'vertical',
					horizontal: this.state._orientation === 'horizontal',
				}}
			>
				{typeof this.state._heading === 'string' && this.state._heading?.length > 0 && (
					<kol-heading-wc _label={this.state._heading} _level={this.state._level}></kol-heading-wc>
				)}

				{this.isUl === false ? (
					<ol>
						<ListItem links={this.state._links} orientation={this.state._orientation} listStyleType={this.state._listStyleType} />
					</ol>
				) : (
					<ul>
						<ListItem links={this.state._links} orientation={this.state._orientation} listStyleType={this.state._listStyleType} />
					</ul>
				)}
			</nav>
		);
	}

	private isUl = true;

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 *
	 * @deprecated use _label instead
	 */
	@Prop() public _ariaLabel?: string;

	/**
	 * Gibt den List-Style-Typen für ungeordnete Listen aus. Wird bei horizontalen LinkGroups als Trenner verwendet
	 */
	@Prop() public _listStyleType?: ListStyleType;

	/**
	 * Gibt die optionale Überschrift zur Link-Gruppe an.
	 */
	@Prop() public _heading?: string;

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 */
	@Prop() public _label?: LabelPropType; // TODO: required in v2

	/**
	 * Gibt an, welchen H-Level von 1 bis 6 die Überschrift hat. Oder bei 0, ob es keine Überschrift ist und als fett gedruckter Text angezeigt werden soll.
	 */
	@Prop() public _level?: HeadingLevel;

	/**
	 * Gibt die Liste der darzustellenden Button, Links oder Texte an.
	 */
	@Prop() public _links!: Stringified<LinkProps[]>;

	/**
	 * Gibt an, ob eine Ordered- oder eine Unordered-List verwendet werden soll.
	 * @deprecated Wird mittels der Property _list-style-type automatisch gesteuert.
	 */
	@Prop() public _ordered?: boolean;

	/**
	 * Gibt die horizontale oder vertikale Ausrichtung der Komponente an.
	 */
	@Prop() public _orientation?: Orientation = 'vertical';

	@State() public state: KoliBriLinkGroupStates = {
		_label: '…', // ⚠ required
		_listStyleType: 'disc',
		_links: [],
		_orientation: 'vertical',
	};

	/**
	 * @deprecated
	 */
	@Watch('_ariaLabel')
	public validateAriaLabel(value?: string): void {
		this.validateLabel(value);
	}

	@Watch('_heading')
	public validateHeading(value?: string): void {
		watchString(this, '_heading', value);
	}

	@Watch('_label')
	public validateLabel(value?: LabelPropType): void {
		validateLabel(this, value);
	}

	@Watch('_level')
	public validateLevel(value?: HeadingLevel): void {
		watchHeadingLevel(this, value);
	}

	@Watch('_listStyleType')
	public validateListStyleType(value?: ListStyleType): void {
		watchValidator(
			this,
			'_listStyleType',
			(value) => {
				switch (value) {
					case 'disc':
					case 'circle':
					case 'square':
					case 'none':
						this.isUl = true;
						return true;
					case 'decimal':
					case 'decimal-leading-zero':
					case 'lower-alpha':
					case 'lower-latin':
					case 'lower-greek':
					case 'lower-roman':
					case 'upper-alpha':
					case 'upper-latin':
					case 'upper-roman':
						this.isUl = false;
						return true;
					default:
						return false;
				}
			},
			new Set(['https://www.w3schools.com/tags/tag_ol.asp']),
			value
		);
	}

	@Watch('_links')
	public validateLinks(value?: Stringified<LinkProps[]>): void {
		watchNavLinks('KolLinkGroup', this, value);
	}

	@Watch('_ordered')
	public validateOrdered(value?: boolean): void {
		watchBoolean(this, '_ordered', value);
	}

	@Watch('_orientation')
	public validateOrientation(value?: Orientation): void {
		watchValidator(
			this,
			'_orientation',
			(value): boolean => value === 'horizontal' || value === 'vertical',
			new Set(['Orientation {horizontal, vertical}']),
			value,
			{
				defaultValue: 'vertical',
			}
		);
	}

	public componentWillLoad(): void {
		this.validateHeading(this._heading);
		this.validateLabel(this._label || this._ariaLabel);
		this.validateLevel(this._level);
		this.validateListStyleType(this._listStyleType);
		this.validateLinks(this._links);
		this.validateOrientation(this._orientation);
	}
}

// console.log(
//   stringifyJson([
//     { _label: 'Fehler 1', _id: '#anschrift_anschrift_adresse_strasse', _icon: 'error' },
//     { _label: 'Fehler 2', _id: '#anschrift_anschrift_adresse_hausnummer', _icon: 'error' },
//   ])
// );
