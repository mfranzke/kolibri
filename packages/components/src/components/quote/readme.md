# Quote

> <kol-badge _label="untested"></kol-badge> Diese neue Komponente wird als ungetestet markiert, da der vollständige Barrierefreiheitstest noch aussteht. Der vollständige Test kann bei neuen Komponenten und Funktionalitäten auch erst nach einem abgeschlossenen Release erfolgen.

Die **Quote**-Komponente verfügt über zwei Varianten, eine kurze Fließtext-(`inline`) und eine eingerückte(`block`) Variante. Beide Varianten enthalten einen Link auf die Quelle des Zitates.

## Verwendung

Mittels **`_label`** kann eine Überschrift gesetzt werden, während **`_quote`** das eigentliche Zitat enthält. Der Ursprung wird über **`_href`** gesetzt.
Die `inline`-Variante ist Standard, sofern die Eingerückte gewünscht ist, kann **`_variant`** auf `block` gesetzt werden.

## References

- <kol-link _href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/quote" _label="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/quote" _target="_blank"></kol-link>
- <kol-link _href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" _label="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" _target="_blank"></kol-link>
- <kol-link _href="https://www.mediaevent.de/html/quote.html" _label="https://www.mediaevent.de/html/quote.html" _target="_blank"></kol-link>
- <kol-link _href="https://www.mediaevent.de/html/cite.html" _label="https://www.mediaevent.de/html/cite.html" _target="_blank"></kol-link>
- <kol-link _href="https://accessibleweb.com/question-answer/what-is-a-block-quote-and-when-should-i-use-it/" _label="https://accessibleweb.com/question-answer/what-is-a-block-quote-and-when-should-i-use-it/" _target="_blank"></kol-link>

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute  | Description                                                                                                                                                                                       | Type                               | Default     |
| --------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ----------- |
| `_caption`            | `_caption` | <span style="color:red">**[DEPRECATED]**</span> Use \_label.<br/><br/>Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.). | `string \| undefined`              | `undefined` |
| `_href` _(required)_  | `_href`    | Gibt den Link zur Quelle des Zitates an.                                                                                                                                                          | `string`                           | `undefined` |
| `_label`              | `_label`   | Defines the label of the citation link.                                                                                                                                                           | `string \| undefined`              | `undefined` |
| `_quote` _(required)_ | `_quote`   | Setzt den Text, also das Zitat selbst.                                                                                                                                                            | `string`                           | `undefined` |
| `_variant`            | `_variant` | Gibt an, welche Variante der Darstellung genutzt werden soll.                                                                                                                                     | `"block" \| "inline" \| undefined` | `'inline'`  |

## Dependencies

### Depends on

- [kol-link](../link)

### Graph

```mermaid
graph TD;
  kol-quote --> kol-link
  kol-link --> kol-link-wc
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-span-wc
  style kol-quote fill:#f9f,stroke:#333,stroke-width:4px
```

---
