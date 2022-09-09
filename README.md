# Der Axel-Stoll-Discord-Bot
Ein Axel-Stoll-Bot für Discord. Der Bot ist ein Spaßprojekt. Natürlich distanziere ich mich inhaltlich von Axel Stolls Aussagen.

# Anmerkungen
- `axel.json` enthält Sprüche, von denen einer per Zufall mit dem command `/weisheit` in Discord ausgegeben werden.
- `.env` muss im root-Verzeichnis folgende Keys enthalten, wenn der Bot deployt werden soll: `TOKEN`, `CLIENT_ID`, `GUILD_ID` (für mehr dazu https://discord.js.org/ konsultieren.
- `deploy-commands.js` hier können Befehle (wie `/weisheit`) registriert werden. Die Datei selbst muss vor der `index.js` mit node ausgeführt werden, damit der Bot korrekt funktioniert.
- `index.js` enthält die Hauptlogik des Bots.
