import { createAuthClient } from 'better-auth/svelte';
import { browser } from '$app/environment';

export const authClient = createAuthClient({
	baseURL: browser ? import.meta.env.VITE_BETTER_AUTH_URL || window.location.origin : ''
});

export const { signIn, signUp, signOut, useSession } = authClient;
