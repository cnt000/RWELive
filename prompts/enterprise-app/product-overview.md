SITUATION:
Sto creando una web app full-stack edge-first per eventi live, usando RedwoodSDK su Cloudflare Workers. L’app mostra un video YouTube live, ha chat realtime, autenticazione e un sistema di plugin configurabili.

TECHNOLOGY:
- RedwoodSDK (React + Edge)
- Cloudflare Workers + Durable Objects + D1 + KV
- OAuth con Google e Slack per autenticazione
- WebSockets via Durable Objects

PURPOSE:
Generare l’architettura e il codice per:
1. Login tramite Google e Slack (stessi provider per admin e utenti normali)
2. Realtime Chat con emoji
3. Plugin system con:
   - Lotteria con ruota e iscrizione
   - Q/A live
4. Admin panel per:
   - Selezionare il live YouTube da una lista di live disponibili di un canale configurabile
   - Attivare/disattivare plugin
5. Ruoli: admin, user autenticato, guest (read-only)

CONSTRAINTS:
- Tutte le API devono funzionare come Cloudflare Worker routes e essere edge-optimized.
- Stato realtime tramite Durable Objects.
- Persistenza dati in D1 (SQLite distribuito).
- Sessioni sicure con cookie HttpOnly.
- Fare fallback con Search API di YouTube se LiveBroadcast API non restituisce live.
