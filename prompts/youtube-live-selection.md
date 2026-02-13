TASK:
Implementa una UI admin e backend per selezionare un live YouTube da un canale configurabile.

INCLUDE:
- Database config table per canale YouTube
- Server endpoint per:
    1. Recuperare lista live attivi via YouTube LiveBroadcast API o fallback con Search API
    2. Mostrare metadata: { videoId, title, thumbnail }
    3. Salvare la selezione
- Frontend dashboard React con lista live e selezione click-to-save
- Gestione errori API e fallback

CONSTRAINTS:
- API key o OAuth per YouTube Data API v3
- Caching edge per richieste YouTube
