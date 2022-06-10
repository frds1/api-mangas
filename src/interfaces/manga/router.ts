import express from "express";
const mangaApp = require('../../app/mangas/app');
const router = express.Router();

router.get("/", async (_, res, next) => {
  try {
    res.json(await mangaApp.getMangas());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.json(await mangaApp.createManga(req.body));
  } catch (err) {
    next(err);
  }
});
  
router.get("/:id", async (req, res, next) => {
  try {
  const id: number = +req.params.id;
  res.json(await mangaApp.getManga(id));
} catch (err) {
  next(err);
}
});
  
router.put("/:id", async (req, res, next) => {
  try  {
    const id: number = +req.params.id;
    res.json(await mangaApp.updateManga(id, req.body));
  } catch (err) {
    next(err);
  }
});
 
router.delete("/:id", async (req, res, next) => {
try {
  const id: number = +req.params.id;
  res.json(await mangaApp.deleteManga(id));
} catch (err) {
  next(err);
}
});

export default router;
