# ALTAVARAH GPT Actions Middleware (Express.js)

## How to Deploy (Render)
1. Push these files to a GitHub repo.
2. On Render → New Web Service → connect repo.
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Add Environment Variable:
   - `ALTAVARAH_API_KEY` = your secret (paste same value into GPT Builder)

## Endpoints
- POST /crm/leads
- POST /calendar/meetings
- POST /payments/checkout
- POST /support/tickets
- POST /email/push
- POST /social/post
- POST /analytics/kpi
