TASK:
Genera il codice completo per l’autenticazione in RedwoodSDK su Cloudflare Workers con Google e Slack OAuth.  
Entrambi i provider devono poter essere usati da admin e user.  
Salva gli utenti in D1 con schema { id, email, name, provider, role }.  
Gestisci sessioni sicure con cookie HttpOnly.

INCLUDE:
- Endpoint OAuth redirect
- Callback handler
- Validazione token
- Creazione/upsert utente su D1
- Assegnazione ruolo (configurabile oppure via email whitelist)
- Gestione errori e sicurezza

REQUIRE:
- Spiega come configurare Google Cloud Console e Slack app per ottenere CLIENT_ID e SECRET.
- Mostra test manuali e automatici per login endpoint.
