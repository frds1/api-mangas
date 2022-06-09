import { Manga } from '@/domain/entity/manga/model';

export interface MangaRepository {
    getAllMangas(): Promise<Manga[]>;
}