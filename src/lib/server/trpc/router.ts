import { z } from 'zod';
import { router, publicProcedure } from './index.js';

export const appRouter = router({
	// Example procedure - you can remove this and add your own
	greeting: publicProcedure.input(z.object({ name: z.string().optional() })).query(({ input }) => {
		return {
			message: `Hello, ${input.name ?? 'World'}!`
		};
	})
});

// Export type router type signature for client
export type AppRouter = typeof appRouter;
