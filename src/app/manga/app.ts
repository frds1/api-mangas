const mangasData = require("../../infrastructure/mangas/data");
import { IMangaRepository } from "../../domain/repository/MangaRepository";
import { Manga } from "@/domain/entity/manga/model";

export class Mangas {
  constructor(readonly mangaRepository: IMangaRepository) {}

  public async getAllMangas(): Promise<any> {
    try {
      return await this.mangaRepository.getAllMangas();
    } catch (error) {
      return "Erro ao buscar os mangas: " + error;
    }
  }

  public async getManga(idManga: number): Promise<any> {
    try {
      return await this.mangaRepository.getManga(idManga);
    } catch (error) {
      return "Erro ao buscar o manga: " + error;
    }
  }

  public async createManga(manga: Manga): Promise<any> {
    try {
      return await this.mangaRepository.createManga(manga);
    } catch (error) {
      return "Erro ao criar o manga: " + error;
    }
  }

  public async updateManga(idManga: number, manga: Manga): Promise<any> {
    try {
      return await this.mangaRepository.updateManga(idManga, manga);
    } catch (error) {
      return "Erro ao atualizar o manga: " + error;
    }
  }

  public async deleteManga(idManga: number): Promise<any> {
    try {
      return await this.mangaRepository.deleteManga(idManga);
    } catch (error) {
      return "Erro ao deletar o manga: " + error;
    }
  }
}
