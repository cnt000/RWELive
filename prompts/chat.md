TASK:
Implementa la chat realtime usando Cloudflare Durable Objects.  
La chat deve supportare:
- Messaggi testuali
- Emoji reactions
- Broadcast a tutti i client connessi
- Persistenza degli ultimi N messaggi in D1

SPECIFY:
- Organizza un Durable Object “ChatRoom”
- Gestione WebSockets
- Rate limiting per utente
- API per inviare e ricevere messaggi

INCLUDE:
- Test di carico
- Validazione lato client
- Reconnect e bufferizzazione messaggi

