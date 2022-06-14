import { Manga } from "@/domain/entity/manga/model";

export interface IMangaRepository {
  getAllMangas(): Promise<Manga[]>;
  getManga(idManga: number): Promise<Manga>;
  createManga(manga: Manga): Promise<void>;
  updateManga(idManga: number, manga: Manga): Promise<void>;
  deleteManga(idManga: number): Promise<void>;
}
