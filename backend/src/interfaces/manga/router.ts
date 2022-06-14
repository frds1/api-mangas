import express from "express";
import { Mangas } from "../../app/manga/app";
import { MangaRepository } from "../../infrastructure/mangas/data";
const router = express.Router();
const mangaRepository = new Mangas(new MangaRepository());

/**
 * @swagger
 * /manga/:
 *  get:
 *   description: Retorna todos os mangás
 *  responses:
 *   '200':
 *    description: Success
 */
router.get("/", async (_, res, next) => {
  try {
    res.json(await mangaRepository.getAllMangas());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await mangaRepository.createManga(req.body));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id: number = +req.params.id;
    res.json(await mangaRepository.getManga(id));
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const id: number = +req.params.id;
    res.json(await mangaRepository.updateManga(id, req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const id: number = +req.params.id;
    res.json(await mangaRepository.deleteManga(id));
  } catch (err) {
    next(err);
  }
});

export default router;
