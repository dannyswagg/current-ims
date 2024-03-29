// lib/trpc/context.ts
import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

// we're not using the event parameter is this example,
// hence the eslint-disable rule
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createContext(event: RequestEvent) {
	console.log('Auth: ', await event.locals.auth.validateUser());

	return {
		// context information

		auth: event.locals.auth
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
