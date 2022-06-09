import express from "express";
import mangaRouter from './manga/router'
const router = express.Router();

router.use('/manga/', mangaRouter)

export default router