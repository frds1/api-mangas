import express from "express";
const mangaApp = require('../../app/mangas/app');

const router = express.Router();

router.get("/", async (_, res) => {
  res.json(await mangaApp.getMangas());
});

router.post("/", async (req, res) => {
  res.json(await mangaApp.createManga(req.body));
});
  
router.get("/:id", async (req, res) => {
  const id: number = +req.params.id;
  res.json(await mangaApp.getManga(id));
});
  
router.put("/:id", async (req, res) => {
  const id: number = +req.params.id;
  res.json(await mangaApp.updateManga(id, req.body));
});
 
router.delete("/:id", async (req, res) => {
  const id: number = +req.params.id;
  res.json(await mangaApp.deleteManga(id));
});

export default router;
  