Perfetto.
Qui è dove il 90% delle persone sbaglia: partono chiedendo “genera l’app”.

Tu invece vuoi far partire Cursor / Claude Code in modo architetturale controllato.

Ti do il prompt esatto enterprise-first da usare come primo comando.

⸻

🎯 PRIMO PROMPT DA DARE (Bootstrap Architetturale)

Copia questo:

Read all files inside /AI and /ARCHITECTURE before answering.

We are starting implementation of the Live Companion Platform using:

- RedwoodSDK
- Cloudflare Workers
- Durable Objects
- D1
- KV

Before generating any code:

1. Define bounded contexts.
2. Define core domain entities.
3. Define user roles and RBAC model.
4. Define plugin system architecture.
5. Define realtime architecture using Durable Objects.
6. Define persistence model (D1 schema proposal).
7. Define YouTube integration boundary.
8. Validate everything against edge runtime constraints.

Do NOT generate implementation code yet.
Only architecture, diagrams (in text), and reasoning.

Assume this is production-grade software.

⸻

💡 Perché funziona
• Costringe il modello a ragionare
• Impedisce di generare subito codice sbagliato
• Riduce hallucinations
• Allinea tutto alle AI rules

⸻

🧠 STEP 2 (Dopo che ti ha dato l’architettura)

Secondo prompt:

Now scaffold the folder structure according to the architecture.

Follow clean architecture separation:

/src
/domain
/application
/infrastructure
/presentation

Create empty files with proper TypeScript types and interfaces.
No implementation logic yet.

⸻

🚀 STEP 3 — Setup Tecnico RedwoodSDK

Poi:

Generate the initial RedwoodSDK project structure compatible with Cloudflare Workers.

Include:

- wrangler configuration
- Durable Object registration
- D1 binding
- KV binding
- R2 binding placeholder

Do not include business logic yet.

⸻

🔥 STEP 4 — Primo Feature Slice (Verticale)

Poi scegli una feature piccola (es. Auth):

Implement Google and Slack OAuth integration.

Before coding:

- Define auth domain model
- Define session strategy
- Define RBAC enforcement middleware
- Validate security assumptions

Then implement following the architecture.

⸻

🏗️ Strategia Corretta di Sviluppo

Ordine consigliato: 1. Architettura 2. Struttura cartelle 3. Setup infrastruttura 4. Auth 5. Chat Durable Object 6. Plugin system core 7. Lottery plugin 8. Q/A plugin 9. Admin YouTube selector

Non partire dalla chat.
Non partire dai plugin.
Non partire dalla UI.

⸻

🎤 Se vuoi livello “conference demo”

Puoi iniziare con:

We are designing a globally distributed edge-native live event platform.

This system must support 100k concurrent users per event.

Design it as if presenting at a senior engineering conference.

Questo cambia completamente la qualità dell’output.

⸻

Se vuoi, posso ora:
• Scriverti il prompt ultra-ottimizzato per Claude Code (più tecnico)
• Oppure guidarti step-by-step mentre lo sviluppi
• Oppure farti una roadmap 4 settimane tipo startup

Dimmi che modalità vuoi:
🧱 Founder pragmatico
🏢 Enterprise architect
⚡ Hacker velocity mode
