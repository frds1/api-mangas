import express from "express";

const PORT = process.env.PORT || 4000; 
const HOSTNAME = process.env.HOSTNAME || "http://localhost";
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

module.exports = app; 
