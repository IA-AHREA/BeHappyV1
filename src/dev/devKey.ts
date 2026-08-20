/**
 * Symbolic dev-mode password, shared with the server's DEV_KEY check (see server/index.js —
 * override there via the DEV_KEY env var). Not real security, same as the book's own password:
 * it's visible in the client bundle, it just keeps casual visitors from poking the upload API.
 */
export const DEV_KEY = 'vknt';
