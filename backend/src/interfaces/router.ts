import express from "express";
import mangaRouter from './manga/router'
import type { ErrorRequestHandler } from "express";
const router = express.Router();

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err.message === 'Manga não encontrado') {
        res.status(404).send(err.message);
    }
    res.status(500).send('Erro interno do servidor');
};

router.use('/manga/', mangaRouter)
router.use(errorHandler);

export default router