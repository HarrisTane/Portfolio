# Fopa Tane Franck Harris · Portfolio

Persönliches Portfolio mit Berufserfahrung in Identity & Access Management, Berechtigungsmanagement, IT-Governance und IT-Risikomanagement. Die Startseite ist auf Deutsch. Englisch und Französisch haben eigene Seiten.

## Lokal öffnen

`index.html` im Browser öffnen. Für eine Vorschau unter HTTP im Projektordner ausführen:

```sh
python3 -m http.server 8000
```

Dann [die lokale Vorschau](http://localhost:8000/) öffnen. Die Website benötigt weder einen Build noch eine Installation von JavaScript-Paketen.

## Auf GitHub Pages veröffentlichen

1. Den Inhalt des entpackten Ordners in das Stammverzeichnis eines GitHub-Repositories übernehmen.
2. Im Repository **Settings → Pages** öffnen. Unter **Build and deployment** die Option **Deploy from a branch**, den Standardbranch und **/ (root)** auswählen und speichern.
3. Die unter **Pages** angezeigte URL öffnen. Anschließend lässt sich die URL auf LinkedIn als Projektlink oder im Bereich „Im Fokus“ hinterlegen.

Titel, Beschreibung und Metadaten für geteilte Links stehen in jeder Sprachdatei. Sobald die Veröffentlichungs-URL feststeht, können dort absolute Canonical-, Open-Graph- und Sprachversions-URLs eingetragen werden.

## Inhalte pflegen

- `index.html`, `en/index.html`, `fr/index.html` enthalten die drei Sprachfassungen.
- `assets/style.css` definiert Layout und Farben. `assets/theme.js` speichert die Auswahl für den Hell- und Dunkelmodus, wenn der Browser lokalen Speicher erlaubt.
- `assets/filters.js` steuert die Technologie-Kategorien. Die vollständige Übersicht ist auch ohne JavaScript sichtbar.
- LinkedIn und GitHub verwenden die im Lebenslauf angegebenen Profil-URLs. Die Quelldokumente werden nicht mit veröffentlicht.
- Das Eintrittsdatum bei der SWK Bank ist in beiden Quellen März 2023. Das Enddatum bitte vor einer Ergänzung abgleichen.
