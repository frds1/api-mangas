import express from "express";
import cors from "cors";
import router from "./interfaces/router";
import morganBody from "morgan-body";
require("dotenv").config();

const http = require("http");
const HOSTNAME = process.env.HOSTNAME || "http://localhost:";
const PORT = process.env.PORT || 4000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

morganBody(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).send("Rota não encontrada.");
});

app.use((error: any, req: any, res: any, next: any) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message || "Erro interno do servidor",
    },
  });
});

http.createServer(app).listen(PORT, () => {
  try {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
  } catch (error) {
    console.log("Erro ao iniciar o servidor: " + error);
  }
});
