Implement YouTube live selection feature.

Requirements:
- Admin configures a YouTube Channel ID.
- Backend fetches active live broadcasts.
- If LiveBroadcast API fails, fallback to Search API with eventType=live.
- Cache API responses in KV for 60 seconds.
- Admin selects one live.
- Save selected videoId in D1 settings table.

Deliver:
1. YouTube service module
2. /api/admin/youtube/live-list
3. /api/admin/youtube/select
4. React Admin UI with list and selection
5. Error handling + fallback logic

Ensure:
- YouTube API key stored in ENV.
- All external calls wrapped in fetch.
