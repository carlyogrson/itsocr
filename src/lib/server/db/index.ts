import { dev } from '$app/environment';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

// In development, default to local SQLite file if DATABASE_URL not set
const databaseUrl = env.DATABASE_URL || (dev ? 'file:local.db' : '');

if (!databaseUrl) throw new Error('DATABASE_URL is not set');
if (!dev && !env.DATABASE_AUTH_TOKEN) throw new Error('DATABASE_AUTH_TOKEN is not set');

const client = createClient({
	url: databaseUrl,
	authToken: env.DATABASE_AUTH_TOKEN
});

export const db = drizzle(client, { schema });
