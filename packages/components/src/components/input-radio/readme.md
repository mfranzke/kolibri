# InputRadio

Die Komponente **InputRadio** besteht aus einer Sammlung von Radio-Elementen und stellt so eine Auswahlmöglichkeit zwischen verschiedenen Werten dar. Es kann immer nur ein einzelner Wert zur gleichen Zeit ausgewählt werden. Ausgewählte Radio-Elemente werden i.d.R. mit einem gefüllten und optisch hervorgehobenen Kreis dargestellt.

<kol-alert _alert _heading="Hinweis" _level="1" _type="info">
  Das Input-Radio dient der Abbildung einer Auswahlmöglichkeit bei der mindestens und maximal eine Auswahl getroffen werden kann. Das bedeutet, dass ein Input-Radio nicht einzeln vorkommen kann. Aufgrund dessen haben wir die Komponente als Listen-Komponente umgesetzt.
</kol-alert><br/>

## Konstruktion

### Code

```html
<kol-input-radio
	_id="anrede"
	_name="anrede"
	_options='[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'
></kol-input-radio>
```

### Beispiel

<kol-input-radio _id="anrede" _name="anrede" _options='[{"label":"Herr","value":"Herr"},{"label":"Frau","value":"Frau"}, {"label":"Firma","value":"Firma"}]'></kol-input-radio>

## Verwendung

Die einzelnen Radio-Elemente innerhalb der Komponente ** InputRadio** werden über dass Attribut **_\_options_** als JSON-Objekt übergeben.

Das JSON-Objekt erwartet je Radio-Element folgende Werte:

**`label`** = Beschriftung des Radio-Elements

**`value`** = Wert des Radio-Elements

Beispiel für die Erstellung des JSON-Objekts zur Definition der Radio-Elemente:

```html
[ { label: 'Herr', value: 'Herr', }, { label: 'Frau', value: 'Frau', }, { label: 'Firma', value: 'Firma', }, ];
```

### onChange

Dem EventHandler werden zwei Parameter übergeben, das ursprüngliche Event und der Wert des ausgewählten RadioButtons.
<kol-alert _heading="Hinweis für Versionen <2" _type="info">event.target.value enthält die Nummer der Checkbox mit einem '-' davor.</kol-alert>

```jsx
<kol-input-radio
	_id="anrede"
	_name="anrede"
	_options={[
		{ label: 'Herr', value: 'Herr' },
		{ label: 'Frau', value: 'Frau' },
		{ label: 'Firma', value: 'Firma' },
	]}
	_on={{ onChange: (_event, value) => setValue(value) }}
></kol-input-radio>
```

### Best practices

- Achten sie darauf `id` und `name` korrekt zu setzen, damit die Daten beim Formular Absenden mitgesendet werden.
- Es wird immer mindestens ein Wert ausgewählt. Ähnlich dem Verhalten einer Select-Auswahl. (<kol-link _href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default" _label="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#selecting_a_radio_button_by_default" _target="_blank"></kol-link>)

## Barrierefreiheit

### Tastatursteuerung

| Taste          | Funktion                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------ |
| `Tab`          | Fokussiert das erste Radio-Element, aktiviert es aber nicht.                                     |
| `Leer`         | Aktiviert das erste Radio-Element, nachdem die RadioGroup über die Tab-Taste angesprungen wurde. |
| `Pfeil-Tasten` | Durchlaufen aller Radio-Elemente und aktiviert das gerade fokussierte Element.                   |

## Links und Referenzen

- <kol-link _href="https://www.w3.org/TR/wai-aria-practices/#radiobutton" _label="https://www.w3.org/TR/wai-aria-practices/#radiobutton" _target="_blank"></kol-link>
- <kol-link _href="https://www.w3schools.com/tags/att_input_type_radio.asp" _label="https://www.w3schools.com/tags/att_input_type_radio.asp" _target="_blank"></kol-link>
- <kol-link _href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio" _label="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio" _target="_blank"></kol-link>
- <kol-link _href="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _label="https://medium.com/@gavyn/til-autofocus-inputs-are-an-accessibility-problem-32ced60c3109" _target="_blank"></kol-link>

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute        | Description                                                                                                                                          | Type                                                                                     | Default      |
| --------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------ |
| `_accessKey`          | `_access-key`    | Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente auslösen oder fokussieren kann.                                    | `string \| undefined`                                                                    | `undefined`  |
| `_alert`              | `_alert`         | Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll.                                                                                        | `boolean \| undefined`                                                                   | `true`       |
| `_disabled`           | `_disabled`      | Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit.                                                      | `boolean \| undefined`                                                                   | `undefined`  |
| `_error`              | `_error`         | Gibt den Text für eine Fehlermeldung an.                                                                                                             | `string \| undefined`                                                                    | `undefined`  |
| `_hideLabel`          | `_hide-label`    | Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.                                                            | `boolean \| undefined`                                                                   | `undefined`  |
| `_hint`               | `_hint`          | Gibt den Hinweistext an.                                                                                                                             | `string \| undefined`                                                                    | `''`         |
| `_id`                 | `_id`            | Gibt die interne ID des primären Elements in der Komponente an.                                                                                      | `string \| undefined`                                                                    | `undefined`  |
| `_label` _(required)_ | `_label`         | Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).                          | `boolean \| string`                                                                      | `undefined`  |
| `_list`               | `_list`          | <span style="color:red">**[DEPRECATED]**</span> Use \_options.<br/><br/>Gibt die Liste der Optionen für das Eingabefeld an.                          | `Option<W3CInputValue>[] \| string \| undefined`                                         | `undefined`  |
| `_name`               | `_name`          | Gibt den technischen Namen des Eingabefeldes an.                                                                                                     | `string \| undefined`                                                                    | `undefined`  |
| `_on`                 | --               | Gibt die EventCallback-Funktionen für das Input-Event an.                                                                                            | `InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus \| undefined` | `undefined`  |
| `_options`            | `_options`       | Options the user can choose from, also supporting Optgroup.                                                                                          | `Option<W3CInputValue>[] \| string \| undefined`                                         | `undefined`  |
| `_orientation`        | `_orientation`   | Gibt die horizontale oder vertikale Ausrichtung der Komponente an.                                                                                   | `"horizontal" \| "vertical" \| undefined`                                                | `'vertical'` |
| `_required`           | `_required`      | Macht das Eingabeelement zu einem Pflichtfeld.                                                                                                       | `boolean \| undefined`                                                                   | `undefined`  |
| `_tabIndex`           | `_tab-index`     | Gibt an, welchen Tab-Index das primäre Element in der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | `number \| undefined`                                                                    | `undefined`  |
| `_tooltipAlign`       | `_tooltip-align` | Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll.                                                     | `"bottom" \| "left" \| "right" \| "top" \| undefined`                                    | `'top'`      |
| `_touched`            | `_touched`       | Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/berührt wurde.                                                                        | `boolean \| undefined`                                                                   | `false`      |
| `_value`              | `_value`         | Gibt den Wert der Radio an. (Known Bug: https://github.com/ionic-team/stencil/issues/3902)                                                           | `number \| string \| undefined`                                                          | `undefined`  |

## Slots

| Slot | Description                               |
| ---- | ----------------------------------------- |
|      | Die Legende/Überschrift der Radiobuttons. |

## Dependencies

### Used by

- [kol-input-radio-group](../input-radio-group)

### Depends on

- kol-input
- [kol-tooltip](../tooltip)
- [kol-alert](../alert)

### Graph

```mermaid
graph TD;
  kol-input-radio --> kol-input
  kol-input-radio --> kol-tooltip
  kol-input-radio --> kol-alert
  kol-input --> kol-icon
  kol-input --> kol-button-wc
  kol-input --> kol-alert
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-span-wc
  kol-alert --> kol-alert-wc
  kol-alert-wc --> kol-heading-wc
  kol-alert-wc --> kol-button-wc
  kol-alert-wc --> kol-icon
  kol-input-radio-group --> kol-input-radio
  style kol-input-radio fill:#f9f,stroke:#333,stroke-width:4px
```

---
