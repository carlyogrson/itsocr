import { initTRPC } from '@trpc/server';
import type { RequestEvent } from '@sveltejs/kit';

// Create context from SvelteKit request event
export const createContext = (event: RequestEvent) => {
	return {
		event
	};
};

export type Context = ReturnType<typeof createContext>;

// Initialize tRPC
const t = initTRPC.context<Context>().create();

// Export reusable router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;
