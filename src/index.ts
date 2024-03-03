import { createExpressEndpoints, initServer } from "@ts-rest/express";
import bodyParser from "body-parser";
import express from "express"; 
import { parentContract } from "./contracts/index.contract";
import morgan from "morgan";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"))

const s = initServer();
const router = s.router(parentContract, {
    posts: {
        getPosts: async () => {
            console.log("Hola");
            return {
                status: 200,
                body: [{
                    id: 1,
                    title: "Hola",
                    body: "chau"
                }]
            }
        }
    }
});

app.get("/", function(req, res) {
    res.send("Hola Mundo");
})

createExpressEndpoints(parentContract, router, app);

app.listen(3000, () => {
    console.log("🚀 Servidor Iniciado")
    console.log("🌐 http://localhost:3000")
})