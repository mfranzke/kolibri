# Link

Die **Link**-Komponente rendert einen auf Barrierefreiheit optimierten Link, der als Text, als Icon oder auch in Kombination ausgegeben werden kann.

Beachten Sie, dass die Komponente automatisch ein Padding links und rechts zum umgebenden Text erzeugt. Sie kann daher im Fließtext ohne
Eingabe von Leerzeichen eingefügt werden. Zusätzliche Leerzeichen vergrößern den Abstand zum umgebenden Text.

## Konstruktion

### Code

```html
<p>
	In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enthält.
	<kol-link _href="https://www.w3.org" _label="https://www.w3.org" _target="_blank">Hier steht ein Link</kol-link>Er wird standardmäßig als
	<i>
		<b>inline-Element</b>
	</i>
	ausgegeben.
</p>
```

### Beispiel

<p>
   In diesem Absatz wird ein Link gesetzt, der keine weiteren Attribute enthält.
  <kol-link _href="https://www.w3.org" _label="https://www.w3.org" _target="_blank">Hier steht ein Link</kol-link>Er wird standardmäßig als <i>
    <b>inline-Element</b>
    </i> ausgegeben.
</p>

## Verwendung

### Link innerhalb eines Fließtextes mit Icon und Text

  <p>
    <kol-link _icon="codicon codicon-home">Ich bin ein Link mit Icon links</kol-link><br/>
    <kol-link _icon="codicon codicon-home" _icon-align="right">
      Ich bin ein Link mit Icon rechts
    </kol-link>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea optio deleniti fuga quos molestias, voluptate nobis
    nemo, incidunt excepturi facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
    <kol-link _icon="codicon codicon-home">Ich bin ein Link mit Icon links</kol-link>. Lorem, ipsum dolor sit amet consectetur adipisicing
    elit. Ea optio deleniti fuga quos molestias, voluptate nobis nemo, incidunt excepturi<kol-link
      _icon="codicon codicon-home"
      _icon-align="right"
    >
      Ich bin ein Link mit Icon rechts
    </kol-link>
    facilis, amet ducimus minus quae corporis eligendi cum distinctio. Fugit, repellendus.
  </p>

<!--### Best practices

### Anwendungsfälle-->

## Barrierefreiheit

### Tastatursteuerung

| Taste   | Funktion                        |
| ------- | ------------------------------- |
| `Tab`   | Fokussiert das Link-Element.    |
| `Enter` | Ruft den hinterlegten Link auf. |

<!-- Auto Generated Below -->

## Properties

| Property             | Attribute              | Description                                                                                                                                                                                                                                                               | Type                                                                                | Default                                        |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------- |
| `_ariaControls`      | `_aria-controls`       | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt an, welche Elemente kontrolliert werden. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)                                                   | `string \| undefined`                                                               | `undefined`                                    |
| `_ariaCurrent`       | `_aria-current`        | <span style="color:red">**[DEPRECATED]**</span> use \_listen-aria-current instead<br/><br/>Gibt an, welchen aktuellen Auswahlstatus das interaktive Element der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) | `"date" \| "location" \| "page" \| "step" \| "time" \| boolean \| undefined`        | `undefined`                                    |
| `_ariaExpanded`      | `_aria-expanded`       | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt an, ob durch das interaktive Element in der Komponente etwas aufgeklappt wurde. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)            | `boolean \| undefined`                                                              | `undefined`                                    |
| `_ariaLabel`         | `_aria-label`          | <span style="color:red">**[DEPRECATED]**</span> use \_label instead<br/><br/>Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).                                                                  | `string \| undefined`                                                               | `undefined`                                    |
| `_ariaSelected`      | `_aria-selected`       | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt an, ob interaktive Element in der Komponente ausgewählt ist (z.B. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)               | `boolean \| undefined`                                                              | `undefined`                                    |
| `_disabled`          | `_disabled`            | <span style="color:red">**[DEPRECATED]**</span> Ein Link kann nicht deaktiviert werden, nutzen Sie den Button-Link stattdessen.<br/><br/>Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit.                                  | `boolean \| undefined`                                                              | `false`                                        |
| `_download`          | `_download`            | Teilt dem Browser mit, dass sich hinter dem Link eine Datei befindet. Setzt optional den Dateinamen.                                                                                                                                                                      | `boolean \| string \| undefined`                                                    | `false`                                        |
| `_hideLabel`         | `_hide-label`          | Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.                                                                                                                                                                                 | `boolean \| undefined`                                                              | `false`                                        |
| `_href` _(required)_ | `_href`                | Gibt die Ziel-Url des Links an.                                                                                                                                                                                                                                           | `string`                                                                            | `undefined`                                    |
| `_icon`              | `_icon`                | Setzt die Iconklasse (z.B.: `_icon="codicon codicon-home`).                                                                                                                                                                                                               | `KoliBriHorizontalIcon & KoliBriVerticalIcon \| string \| undefined`                | `undefined`                                    |
| `_iconAlign`         | `_icon-align`          | <span style="color:red">**[DEPRECATED]**</span> Wird durch das neue flexibleren Icon-Typ abgedeckt.<br/><br/>Deprecated: Gibt an, ob das Icon links oder rechts von der Beschriftung angezeigt werden soll.                                                               | `"bottom" \| "left" \| "right" \| "top" \| undefined`                               | `undefined`                                    |
| `_iconOnly`          | `_icon-only`           | <span style="color:red">**[DEPRECATED]**</span> use \_hide-label<br/><br/>Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.                                                                                                       | `boolean \| undefined`                                                              | `undefined`                                    |
| `_label`             | `_label`               | Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).                                                                                                                                               | `boolean \| string \| undefined`                                                    | `undefined`                                    |
| `_listenAriaCurrent` | `_listen-aria-current` | Listen on a aria-current event with this value. If the value matches the current value and the href is the same as the current url, the aria-current attribute will be set to current value.                                                                              | `"date" \| "location" \| "page" \| "step" \| "time" \| boolean \| undefined`        | `undefined`                                    |
| `_on`                | --                     | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt die EventCallback-Funktionen für den Link an.                                                                                                                                         | `undefined \| { onClick?: EventValueOrEventCallback<Event, string> \| undefined; }` | `undefined`                                    |
| `_role`              | `_role`                | Gibt die Rolle des primären Elements in der Komponente an.                                                                                                                                                                                                                | `"button" \| "link" \| "tab" \| undefined`                                          | `undefined`                                    |
| `_selector`          | `_selector`            | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt die ID eines DOM-Elements, zu dem gesprungen werden soll, aus.                                                                                                                        | `string \| undefined`                                                               | `undefined`                                    |
| `_stealth`           | `_stealth`             | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt an, ob der Link nur beim Fokus sichtbar ist.                                                                                                                                          | `boolean \| undefined`                                                              | `false`                                        |
| `_tabIndex`          | `_tab-index`           | Gibt an, welchen Tab-Index das primäre Element in der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)                                                                                                                      | `number \| undefined`                                                               | `undefined`                                    |
| `_target`            | `_target`              | Gibt an wo der Link geöffnet werden soll.                                                                                                                                                                                                                                 | `string \| undefined`                                                               | `undefined`                                    |
| `_targetDescription` | `_target-description`  | Gibt die Beschreibung an, wenn der Link in einem anderen Programm geöffnet wird.                                                                                                                                                                                          | `string \| undefined`                                                               | `'Der Link wird in einem neuen Tab geöffnet.'` |
| `_tooltipAlign`      | `_tooltip-align`       | Gibt an, ob der Tooltip bevorzugt entweder oben, rechts, unten oder links angezeigt werden soll.                                                                                                                                                                          | `"bottom" \| "left" \| "right" \| "top" \| undefined`                               | `'right'`                                      |
| `_useCase`           | `_use-case`            | <span style="color:red">**[DEPRECATED]**</span> will be removed in v2<br/><br/>Gibt den Verwendungsfall des Links an.                                                                                                                                                     | `"image" \| "nav" \| "text" \| undefined`                                           | `'text'`                                       |

## Dependencies

### Used by

- [kol-breadcrumb](../breadcrumb)
- [kol-input-adapter-leanup](../input-adapter-leanup)
- [kol-link-group](../link-group)
- [kol-quote](../quote)

### Depends on

- kol-link-wc

### Graph

```mermaid
graph TD;
  kol-link --> kol-link-wc
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-span-wc
  kol-breadcrumb --> kol-link
  kol-input-adapter-leanup --> kol-link
  kol-link-group --> kol-link
  kol-quote --> kol-link
  style kol-link fill:#f9f,stroke:#333,stroke-width:4px
```

---
