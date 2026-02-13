Perfetto.
Qui trovi un recap completo del progetto strutturato in Markdown, pronto da mettere in repo come PROJECT_OVERVIEW.md.

⸻

🎥 Live Companion App – Architettura con RedwoodSDK

📌 Obiettivo

Realizzare una web app live companion che:
	•	Mostra una live YouTube
	•	Include chat realtime con emoji
	•	Permette login tramite Google o Slack
	•	Supporta plugin attivabili dall’admin
	•	🎰 Lotteria con ruota animata
	•	❓ Q/A live
	•	Gestisce 3 ruoli:
	•	admin
	•	user (autenticato)
	•	guest (anonimo, read-only)

Stack: RedwoodSDK + Cloudflare (edge-first)

⸻

🏗 Architettura High-Level

User (Browser)
      ↓
Cloudflare Edge
      ↓
RedwoodSDK Worker
      ├── Auth (Google + Slack OAuth)
      ├── Chat Durable Object
      ├── Lottery Durable Object
      ├── QA Durable Object
      ├── D1 (DB relazionale)
      ├── KV (session/cache)
      └── R2 (eventuali asset)


⸻

🧱 Stack Tecnologico

Runtime
	•	RedwoodSDK (React full-stack)
	•	Cloudflare Workers (Edge compute)

Storage
	•	D1 → database relazionale (SQLite distribuito)
	•	KV → sessioni e cache veloce
	•	Durable Objects → stato realtime consistente
	•	R2 (opzionale) → asset plugin

Realtime
	•	WebSockets via Durable Objects

⸻

🔐 Autenticazione

Provider supportati
	•	Google OAuth
	•	Slack OAuth

Entrambi disponibili per:
	•	Admin
	•	Utenti normali

Flow
	1.	Redirect a provider OAuth
	2.	Callback su Worker
	3.	Verifica token
	4.	Creazione sessione (cookie HttpOnly)
	5.	Persistenza utente su D1

⸻

👤 Modello Utente

users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE,
  name TEXT,
  provider TEXT, -- 'google' | 'slack'
  role TEXT,     -- 'admin' | 'user'
  created_at DATETIME
)

Assegnazione ruolo
	•	Primo utente → può essere elevato admin manualmente
	•	Oppure whitelist email admin in config

⸻

🎥 YouTube Live

Frontend:

<iframe
  src="https://www.youtube.com/embed/{VIDEO_ID}"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>

Nessuna logica server necessaria.

⸻

💬 Chat Realtime

Architettura
	•	1 Durable Object per stream
	•	Gestisce:
	•	Connessioni WebSocket
	•	Broadcast messaggi
	•	Emoji reactions
	•	Rate limiting
	•	Anti-spam

Persistenza
	•	Ultimi N messaggi salvati in D1
	•	Cache recente in memoria nel DO

Modello messaggio

{
  id: string
  userId: string
  userName: string
  text: string
  emoji?: string[]
  createdAt: number
}


⸻

🧩 Sistema Plugin

Non runtime injection.
Sistema controllato via registry DB.

Tabella plugin

plugins (
  id TEXT PRIMARY KEY,
  type TEXT,         -- 'lottery' | 'qa'
  is_active BOOLEAN,
  config JSON,
  created_at DATETIME
)

Caricamento frontend

const pluginMap = {
  lottery: () => import('./plugins/Lottery'),
  qa: () => import('./plugins/QA')
}


⸻

🎰 Plugin: Lotteria

Funzioni
	•	Iscrizione utenti:
	•	Bottone
	•	QR code (link con token)
	•	Estrazione server-side
	•	Animazione ruota lato client

Stato Durable Object

{
  isOpen: boolean
  participants: User[]
  winner?: User
}

Flow
	1.	Admin apre iscrizioni
	2.	Utenti si registrano
	3.	Admin chiude iscrizioni
	4.	Estrazione random (crypto secure)
	5.	Broadcast risultato

La selezione avviene solo server-side.

⸻

❓ Plugin: Q/A

Funzioni
	•	Invio domanda (utente autenticato)
	•	Moderazione admin
	•	Evidenziazione domanda live

Stato Durable Object

{
  pending: Question[]
  approved: Question[]
  answered: Question[]
}


⸻

👥 Ruoli e Permessi

Azione	Guest	User	Admin
Vedere live	✅	✅	✅
Leggere chat	✅	✅	✅
Scrivere chat	❌	✅	✅
Partecipare lotteria	❌	✅	✅
Inviare domanda	❌	✅	✅
Attivare plugin	❌	❌	✅
Estrarre vincitore	❌	❌	✅


⸻

🗂 Struttura Progetto (Indicativa)

/app
  /components
    Chat.tsx
    VideoPlayer.tsx
    PluginContainer.tsx

  /plugins
    /Lottery
      Lottery.tsx
    /QA
      QA.tsx

/server
  /auth
    google.ts
    slack.ts

  /durable-objects
    ChatRoom.ts
    LotteryRoom.ts
    QARoom.ts

  /db
    schema.sql

/routes
  /api
    /auth
    /chat
    /plugins


⸻

⚡ Perché RedwoodSDK Qui Ha Senso

1️⃣ Edge-first
	•	Latenza bassa globale
	•	Nessun server centrale

2️⃣ Realtime senza Redis

Durable Objects sostituiscono:
	•	Redis pub/sub
	•	Cluster WebSocket
	•	Sticky sessions

3️⃣ Scaling Automatico
	•	Nessun container
	•	Nessun load balancer
	•	Nessun Kubernetes

4️⃣ Costi prevedibili

Paghi execution, non server idle.

⸻

🚀 Scalabilità
	•	100 utenti → nativo
	•	10k utenti → 1 DO per stream
	•	100k utenti → sharding per stream ID

⸻

🔒 Sicurezza
	•	Sessioni HttpOnly
	•	Validazione server-side per:
	•	Estrazione lotteria
	•	Moderazione Q/A
	•	Rate limiting nel DO
	•	Anti-spam (cooldown per utente)

⸻

📈 Possibili Estensioni Future
	•	Analytics evento
	•	Replay statistiche
	•	Reaction heatmap
	•	Gamification (punti per interazioni)
	•	Multi-room support
	•	Supporto Twitch oltre YouTube

⸻

🎯 Conclusione

Questa architettura:
	•	È semplice
	•	È edge-native
	•	Riduce DevOps al minimo
	•	È perfetta per eventi live community-driven
	•	Scala globalmente senza infrastruttura tradizionale

⸻

Se vuoi, nel prossimo step possiamo:
	•	Scrivere il primo MVP plan (2 settimane reali di lavoro)
	•	Definire le milestone tecniche
	•	Oppure fare un deep dive su Durable Objects design pattern 👀
