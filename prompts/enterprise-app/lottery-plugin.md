TASK:
Crea un plugin per la lotteria con:
- Registrazione utenti (bottone + QR code)
- Stato plugin attivabile solo da admin
- Random selezione vincitore server-side (crypto secure)
- Frontend con ruota animata

IMPLEMENTATION:
- Durable Object per la lotteria con stato { participants[], isOpen, winner }
- API per iscrizione
- Admin API per aprire/chiudere iscrizioni e avviare estrazione
- UI React con animazione ruota e risultati

INCLUDE:
- Gestione errori e edge case
- Blocchi per sicurezza e prevenzione cheat
