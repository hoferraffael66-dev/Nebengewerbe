# Hofer 360° Service – Website

Statische Website (HTML/CSS/JS, kein Server nötig) im Design des Flyers.

## Inhalt
- `index.html` – Startseite: Leistungen, Referenzen, Über mich, Kontakt
- `impressum.html`, `datenschutz.html` – Pflichtseiten (Deutschland)
- `danke.html` – Bestätigungsseite für das Formular (falls JavaScript aus ist)
- `assets/img/` – Logo und Referenzfotos
- `robots.txt`, `sitemap.xml` – für Google

## Noch zu erledigen
1. **Adresse**: Die Seite läuft unter `https://hoferraffael66-dev.github.io/Nebengewerbe/`.
   Bei einer eigenen Domain später überall ersetzen (index.html, robots.txt, sitemap.xml).
2. **Kontaktformular aktivieren**: Einmal selbst eine Testanfrage über die Website senden.
   FormSubmit schickt dann eine Bestätigungs-Mail an hofer360service@gmail.com –
   den Link darin anklicken. Danach kommen alle Anfragen direkt ins Postfach.
3. **Datenschutz**: vor dem Start einmal prüfen lassen (z. B. Generator von e-recht24).

## Neue Referenzbilder hinzufügen
Foto (am besten hochkant, max. ca. 900×1200 px) nach `assets/img/` legen und in
`index.html` im Bereich `gallery` einen weiteren `<figure>`-Block nach Vorlage einfügen.

## Bei Google eintragen
1. GitHub Pages aktivieren: Repository → Settings → Pages → Branch `ccr-e2bffd9f-1dtjfa` / Ordner `/ (root)` (Repository muss dafür öffentlich sein).
2. **Google Search Console**: Domain hinzufügen, bestätigen, `sitemap.xml` einreichen.
3. **Google Unternehmensprofil** (business.google.com): Firma anlegen, Website-Adresse eintragen.
