const database = require("../../config/database/database");
import { IMangaRepository } from "../../domain/repository/MangaRepository";
import { Manga } from "../../domain/entity/manga/model";

export class MangaRepository implements IMangaRepository {
  constructor() {}

  public async getAllMangas(): Promise<Manga[]> {
    const mangasData = await database.query(
      "SELECT TM.id, TM.titulo AS title, TM.autor_id AS author_id, TM.editora_id AS publish_company, TM.demografia AS demography FROM public.manga TM",
      []
    );
    const mangas: Manga[] = [];
    for (const mangaData of mangasData) {
      mangas.push(
        new Manga(
          mangaData.id,
          mangaData.title,
          mangaData.author_id,
          mangaData.publish_company,
          mangaData.demography
        )
      );
    }
    return mangas;
  }

  public async getManga(idManga: number): Promise<Manga> {
    const mangaData = await database.query(
      "SELECT TM.id, TM.titulo AS title, TM.autor_id AS author_id, TM.editora_id AS publish_company, TM.demografia AS demography FROM public.manga TM WHERE id = $1",
      [idManga]
    );
    return new Manga(
      mangaData[0].id,
      mangaData[0].title,
      mangaData[0].author_id,
      mangaData[0].publish_company,
      mangaData[0].demography
    );
  }

  public async createManga(manga: Manga): Promise<void> {
    return await database.query(
      "INSERT INTO public.manga (title, author_id, publish_company, demography) VALUES ($1, $2, $3, $4)",
      [manga.id]
    );
  }

  public async updateManga(idManga: number, manga: Manga): Promise<void> {
    return await database.query(
      "UPDATE public.manga SET title = $1, author_id = $2, publish_company = $3, demography = $4 WHERE id = $5",
      [
        manga.title,
        manga.author_id,
        manga.publish_company,
        manga.demography,
        idManga,
      ]
    );
  }

  public async deleteManga(idManga: number): Promise<void> {
    return await database.query(
      "DELETE FROM public.manga WHERE id = $1 RETURNING id",
      [idManga]
    );
  }
}
