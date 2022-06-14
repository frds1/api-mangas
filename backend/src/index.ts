import express from "express";
import cors from "cors";
import router from "./interfaces/router";
import morganBody from "morgan-body";
const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
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

const swaggerOptions = {
  swagger: "2.0",
  swaggerDefinition: {
    info: {
      title: "Library API Mangás",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000/api",
        description: "Development server",
      },
      {
        url: "https://api-mangas-1.herokuapp.com/api",
        description: "Production server",
      },
    ],
  },
  apis: ['./interface/**/*.ts'],
};

app.use("/api", router);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsDocs(swaggerOptions))
);

app.use((req, res, next) => {
  res.status(404).send("Rota não encontrada.");
});

http.createServer(app).listen(PORT, () => {
  try {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
  } catch (error) {
    console.log("Erro ao iniciar o servidor: " + error);
  }
});
