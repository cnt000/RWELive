Con Claude Code funziona meglio così:
	1.	Incolla SYSTEM PROMPT
	2.	Fai eseguire bootstrap
	3.	Procedi modulo per modulo
	4.	Dopo ogni modulo chiedi:

    Refactor this module to improve clarity, type safety and separation of concerns.

Alla fine:

    Analyze the entire repository and propose architectural improvements.  

Ultimo super prompt da usare a metà progetto:

You are reviewing a production-grade edge-first application.

Analyze:
- Scalability limits
- Durable Object bottlenecks
- Cold start behavior
- Cost model on Cloudflare
- Future multi-room support
- Plugin extensibility risks

Propose improvements without rewriting everything.
