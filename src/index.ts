import express from "express";

const app = express();

app.get("/", function(req, res) {
    res.send("Hola Mundo");
})

app.listen(3000, () => {
    console.log("🚀 Servidor Iniciado")
    console.log("🌐 http://localhost:3000")
})