import { createExpressEndpoints, initServer } from "@ts-rest/express";
import bodyParser from "body-parser";
import express from "express"; 
import { parentContract } from "./contracts/index.contract";
import morgan from "morgan";
import postService from './services/post.service';
import { z } from "zod";
import { envSchema } from "./env";
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from "postgres";
import { Post } from "./schema/post";

type EnvSchemaType = z.infer<typeof envSchema>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvSchemaType {}
    }
}

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"))

const s = initServer();
const router = s.router(parentContract, {
    posts: postService,

});

app.get("/", function(req, res) {
    res.send("Hola Mundo");
})

createExpressEndpoints(parentContract, router, app);

const queryConnection = postgres(process.env.DATABASE_URL!);

const db = drizzle(queryConnection);

const main = async () => {
	console.log(await db.select().from(Post));
	process.exit(0);
};

main();


app.listen(3000, () => {
    console.log("🚀 Servidor Iniciado")
    console.log("🌐 http://localhost:3000")
})