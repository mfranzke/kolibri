# Heading

Die **Heading**-Komponente kann überall dort verwendet werden, wo eine Überschrift angezeigt werden soll. Durch die Verwendung der unterschiedlichen Größen, lassen sich Inhalte klar strukturieren und Seiten wirkungsvoll und abwechslungsreich präsentieren. Sie trennt Styling von Semantik und ermöglicht Flexibilität.

## Konstruktion

### Code

```html
<kol-heading _level="1" _label="Inhalt einer H1-Überschrift"></kol-heading>
<kol-heading _level="2" _label="Inhalt einer H2-Überschrift"></kol-heading>
<kol-heading _level="3" _label="Inhalt einer H3-Überschrift"></kol-heading>
<kol-heading _level="4" _label="Inhalt einer H4-Überschrift"></kol-heading>
<kol-heading _level="5" _label="Inhalt einer H5-Überschrift"></kol-heading>
<kol-heading _level="6" _label="Inhalt einer H6-Überschrift"></kol-heading>
```

### Beispiel

<kol-heading _level="1" _label="Inhalt einer H1-Überschrift"></kol-heading>
<kol-heading _level="2" _label="Inhalt einer H2-Überschrift"></kol-heading>
<kol-heading _level="3" _label="Inhalt einer H3-Überschrift"></kol-heading>
<kol-heading _level="4" _label="Inhalt einer H4-Überschrift"></kol-heading>
<kol-heading _level="5" _label="Inhalt einer H5-Überschrift"></kol-heading>
<kol-heading _level="6" _label="Inhalt einer H6-Überschrift"></kol-heading>

## Verwendung

Die Überschriftenebene wird durch das Attribut **`_level`** übergeben. Möglich sind die Level **1** bis **6**

### Best practices

- Achten Sie bei der Verwendung von Headings auf die empfohlene Semantik für die Suchmaschinenoptimierung.
- Setzen Sie Headings in verschiedenen Größen ein, um eine sinnvolle Struktur Ihrer Inhalte zu erzeugen.

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute             | Description                                                                                                                                           | Type                                           | Default     |
| --------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------- |
| `_label` _(required)_ | `_label`              | Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).                           | `boolean \| string`                            | `undefined` |
| `_level`              | `_level`              | Gibt an, welchen H-Level von 1 bis 6 die Überschrift hat. Oder bei 0, ob es keine Überschrift ist und als fett gedruckter Text angezeigt werden soll. | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| undefined` | `1`         |
| `_secondaryHeadline`  | `_secondary-headline` | Setzt den Text einer weiteren Überschrift, einen Level kleiner, unter der Ersten.                                                                     | `string \| undefined`                          | `undefined` |

## Slots

| Slot | Description             |
| ---- | ----------------------- |
|      | Inhalt der Überschrift. |

## Dependencies

### Used by

- [kol-accordion](../accordion)
- [kol-alert-wc](../alert)
- [kol-card](../card)
- [kol-heading](.)
- [kol-link-group](../link-group)

### Graph

```mermaid
graph TD;
  kol-accordion --> kol-heading-wc
  kol-alert-wc --> kol-heading-wc
  kol-card --> kol-heading-wc
  kol-heading --> kol-heading-wc
  kol-link-group --> kol-heading-wc
  style kol-heading-wc fill:#f9f,stroke:#333,stroke-width:4px
```

---
