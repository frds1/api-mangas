import express from "express";
import mangaRouter from './manga/router'
const router = express.Router();

router.use('/manga', mangaRouter)
router.use((error: any, req: any, res: any, next: any) => {
    res.status(error.status || 500);
    return res.json({
      error: {
        message: error.message || "Erro interno do servidor",
      },
    });
  });

export default router