import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString, { prepare: false })
export const db = drizzle(sql);

const dbMigrate = async () => {
    await migrate(db, { migrationsFolder: "drizzle" });
    await sql.end();
}

dbMigrate().then(() => {
    console.log("-------------------------");
    console.log("-🎇Migración realizada🎇-")
    console.log("-------------------------");
}).catch(err => console.error(err))
