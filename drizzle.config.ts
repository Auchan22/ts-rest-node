import   { defineConfig} from "drizzle-kit";
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    schema: './src/schema/*',
    out: './drizzle',
    driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
    dbCredentials: {
      host: process.env.DATABASE_URL,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
  } )