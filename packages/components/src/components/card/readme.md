# Card

Um einzelne Bereiche Ihrer Webseite optisch hervorzuheben, bietet sich die **Card**-Komponente an. Mit ihrer Hilfe können Sie Ihre Inhalte sehr einfach strukturieren.

Die **Card**-Komponente besteht aus einem **_Titel-Bereich_**, einem **_Inhalts-Bereich_** und einem **_Fuß-Bereich_**.

Der **Titel-Bereich** wird in einer größeren Schrift dargestellt. Der **Inhalts-Bereich** ist optisch durch eine horizontale Trennlinie unterhalb des Titel-Bereichs abgetrennt und wird in der Standardschrift ausgegeben.
Der **Fuß-Bereich** wird optional durch das Attribut **`_has-footer`** aktiviert und stellt dann Platz für weitere Inhalte, z.B. eine **Button**-Komponente bereit. Der Fuß-Bereich ist optisch durch eine horizontale Trennlinie vom Inhalts-Bereich abgetrennt.

## Konstruktion

### Code

```html
<kol-card _label="Testtitel" _has-footer _max-height="vh2">
	<div slot="header">Text im Header-Bereich</div>
	<div slot="content">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
		dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
		et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	</div>
	<div slot="footer">Weiterer Beispieltext im Fuß-Bereich</div>
</kol-card>
```

### Beispiel

<kol-card _label="Testtitel" _has-footer _max-height="vh2">
	<div slot="header">Text im Header-Bereich</div>
	<div slot="content">
		Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
		dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
		et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
	</div>
	<div slot="footer">Weiterer Beispieltext im Fuß-Bereich</div>
</kol-card>

## Verwendung

### Einfache Standard-Card

In der Standardansicht besteht eine **Card** aus einem Titel-Bereich, und einem leeren Inhalts-Bereich.
Die horizontale Trennlinie zwischen beiden Bereichen setzt KoliBri automatisch.

### Titel der Card-Komponente

Den Titel der Card bestimmen Sie durch Setzen des Attributs **`_label`**. Hier können Sie beliebigen Text, auch Sonderzeichen und Umlaute, eingeben.
Beachten Sie, dass **HTML-Code** nicht erlaubt ist. Sofern nicht gesetzt werden drei Punkte dargestellt.
Die Überschriftenebene des Titels wird durch das Attribut **`_level`** übergeben. Möglich sind die Level **1** bis **6**

### Inhalts-Container

Die Inhalte im Header/Content/Footer-Bereich der Card bestimmen Sie durch Einfügen eines **Inhalts-Containers** innerhalb des `<kol-card></kol-card>-Elements`. Der Container muss als Attribut **slot="header/coontent/footer"** enthalten. Hier können Sie beliebigen **HTML-Code** einfügen.

Bitte beachten Sie, dass Sie zwar ein beliebiges HTML-Tag als Inhalts-Container verwenden können, es aber empfohlen wird ein `<div></div>`-Tag zu verwenden.

```html
<kol-card _label="Beispiel" _level="1">
	<div slot="header">Text im Header-Bereich</div>
	<div slot="content">Text im Inhalts-Bereich</div>
	<div slot="footer">Text im Fuß-Bereich</div>
</kol-card>
```

### Best practices

- Verwenden Sie die **Card**-Komponente, um in sich geschlossene Themenbereiche optisch zu kapseln.
- Verwenden Sie die **Card**-Komponente, um Ihre Inhalte semantisch zu strukturieren.
- Vermeiden Sie, zu viele Cards auf einer Inhaltsseite zu verwenden.
- Vermeiden Sie, wichtige Inhalte innerhalb der Card-Komponente zu platzieren, wenn sich die zugehörigen Aktions-Elemente (Buttons, Links, etc.) nicht innerhalb der gleichen Card befinden.

<!-- Auto Generated Below -->

## Properties

| Property     | Attribute     | Description                                                                                                                                           | Type                                                            | Default     |
| ------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------- |
| `_hasCloser` | `_has-closer` | Defines whether the card has a close button.                                                                                                          | `boolean \| undefined`                                          | `undefined` |
| `_hasFooter` | `_has-footer` | Macht den Footerbereich der Card sichtbar.                                                                                                            | `boolean \| undefined`                                          | `false`     |
| `_heading`   | `_heading`    | <span style="color:red">**[DEPRECATED]**</span> Use \_label.<br/><br/>Gibt die Beschriftung der Komponente an.                                        | `string \| undefined`                                           | `undefined` |
| `_headline`  | `_headline`   | <span style="color:red">**[DEPRECATED]**</span> Verwende stattdessen das Property \_heading.<br/><br/>Gibt die Beschriftung der Komponente an.        | `string \| undefined`                                           | `undefined` |
| `_label`     | `_label`      |                                                                                                                                                       | `string \| undefined`                                           | `undefined` |
| `_level`     | `_level`      | Gibt an, welchen H-Level von 1 bis 6 die Überschrift hat. Oder bei 0, ob es keine Überschrift ist und als fett gedruckter Text angezeigt werden soll. | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| undefined`                  | `1`         |
| `_on`        | --            | Defines the event callback functions for the component.                                                                                               | `undefined \| { onClose?: EventCallback<Event> \| undefined; }` | `undefined` |

## Slots

| Slot        | Description                                                                                                                |
| ----------- | -------------------------------------------------------------------------------------------------------------------------- |
|             | Ermöglicht das Einfügen beliebigen HTML's in den Inhaltsbereich der Card.                                                  |
| `"content"` | Ermöglicht das Einfügen beliebigen HTML's in den Inhaltsbereich der Card.                                                  |
| `"footer"`  | Deprecated für Version 2: Ermöglicht das Einfügen beliebigen HTML's in den Fußbereich der Card.                            |
| `"header"`  | Deprecated für Version 2: Ermöglicht das Einfügen beliebigen HTML's in den Kopfbereich unterhalb der Überschrift der Card. |

## Dependencies

### Depends on

- [kol-heading-wc](../heading)
- kol-button-wc

### Graph

```mermaid
graph TD;
  kol-card --> kol-heading-wc
  kol-card --> kol-button-wc
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-span-wc
  style kol-card fill:#f9f,stroke:#333,stroke-width:4px
```

---
