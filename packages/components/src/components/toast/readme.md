# Toast

Mit der **Toast**-Komponente geben Sie ein optisches Feedback an die Nutzer:innen. Sie wird nur für einen kurzen Zeitraum am Kopf des Browserfenster angezeigt und verschwindet danach automatisch.

Ein **Toast** wird nach dem Laden der Webseite am oberen Rand des Browserfenster für zehn Sekunden angezeigt. Mit Ausblenden des **Toasts** wird dieser automatisch aus dem DOM entfernt. Wird er erneut benötigt, muss er z.B. über eine JavaScript-Funktion nachgeladen werden.

## Konstruktion

### Code

```html
<kol-alert _label="Erfolg" _type="success">Hier wird der Erfolg näher beschrieben.</kol-alert>
<kol-alert _type="success" _show="false">Hier wird der Erfolg näher beschrieben.</kol-alert>
```

### Beispiel

<div class="d-grid gap-2">
  <kol-alert _label="Erfolg" _type="success">Hier wird der Erfolg näher beschrieben.</kol-alert>
  <kol-alert _type="success" _show="false">Hier wird der Erfolg näher beschrieben.</kol-alert>
</div>

## Verwendung

### Überschrift

Verwenden Sie das Attribut **`_label`**, um die Überschrift des Toasts zu bestimmen.

### Größe der Überschrift

Verwenden Sie das Attribut **`_level`**, um die Überschriftenebene zu setzen.

### Anzeigen des Toasts

Verwenden Sie das Attribut **`_show`**, um den Toast manuell anzuzeigen.

### Anzeigedauer des Toast

Verwenden Sie das Attribut **`_showDuration`**, um die Anzeigedauer des Toasts festzulegen.

### Anzeigetyp des Toast

Verwenden Sie das Attribut **`_type`**, um den Typ des Toasts festzulegen. Mögliche Werte sind:

- `default`
- `error`
- `info`
- `success`
- `warning`

<!--### Best practices

### Anwendungsfälle-->

## Barrierefreiheit

<!-- Auto Generated Below -->

## Properties

| Property        | Attribute        | Description                                                                                                                                           | Type                                                                    | Default     |
| --------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| `_alert`        | `_alert`         | Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll.                                                                                         | `boolean \| undefined`                                                  | `true`      |
| `_hasCloser`    | `_has-closer`    | Gibt an, ob die Komponente einen Schließen-Schalter hat.                                                                                              | `boolean \| undefined`                                                  | `false`     |
| `_heading`      | `_heading`       | <span style="color:red">**[DEPRECATED]**</span> Use \_label.<br/><br/>Gibt die Beschriftung der Komponente an.                                        | `string \| undefined`                                                   | `''`        |
| `_label`        | `_label`         | Defines the text to show in the Toast.                                                                                                                | `string \| undefined`                                                   | `undefined` |
| `_level`        | `_level`         | Gibt an, welchen H-Level von 1 bis 6 die Überschrift hat. Oder bei 0, ob es keine Überschrift ist und als fett gedruckter Text angezeigt werden soll. | `0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| undefined`                          | `1`         |
| `_on`           | --               | Gibt die EventCallback-Function für das Schließen des Toasts an.                                                                                      | `undefined \| { onClose?: EventCallback<Event> \| undefined; }`         | `undefined` |
| `_show`         | `_show`          | Gibt an, ob die Komponente entweder ein- oder ausgeblendet ist.                                                                                       | `boolean \| undefined`                                                  | `true`      |
| `_showDuration` | `_show-duration` | Gibt an, wie viele Millisekunden der Toast eingeblendet werden soll.                                                                                  | `number \| undefined`                                                   | `10000`     |
| `_type`         | `_type`          | Setzt den Typ der Komponente oder des interaktiven Elements in der Komponente an.                                                                     | `"default" \| "error" \| "info" \| "success" \| "warning" \| undefined` | `'default'` |

## Slots

| Slot | Description             |
| ---- | ----------------------- |
|      | Der Inhalt der Meldung. |

## Dependencies

### Depends on

- [kol-alert](../alert)

### Graph

```mermaid
graph TD;
  kol-toast --> kol-alert
  kol-alert --> kol-alert-wc
  kol-alert-wc --> kol-heading-wc
  kol-alert-wc --> kol-button-wc
  kol-alert-wc --> kol-icon
  kol-button-wc --> kol-span-wc
  kol-button-wc --> kol-tooltip
  kol-span-wc --> kol-icon
  kol-tooltip --> kol-span-wc
  style kol-toast fill:#f9f,stroke:#333,stroke-width:4px
```

---
