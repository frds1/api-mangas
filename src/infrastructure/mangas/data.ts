const database = require('../../config/database/database');
import { Manga } from '../../domain/entity/manga/model';

exports.getMangas = async () :Promise<any> => {
try {
    database.query("select * from public.manga").then((result: any) => {
        return {
            mangas: result.map((manga: Manga) => {
                return {
                    title: manga.title,
                    author: manga.author_id,
                    demography: manga.demography,
                    publish_company: manga.publish_company,
                }
            })
        }
    })
} catch(error) {
        return "Erro ao buscar os mangas: "+error;
    }
};

exports.getManga = async (idManga:number) :Promise<any> => {
    try {
        database.query("select * from public.manga where id = $1", [idManga]).then((result: any) => {
            return {
                mangas: result.map((manga: Manga) => {
                    return {
                        title: manga.title,
                        author: manga.author_id,
                        demography: manga.demography,
                        publish_company: manga.publish_company,
                    }
                })
            }
        })
    } catch(error) {
        return "Erro ao buscar o manga: "+error;
    }
}

exports.createManga = async (manga:any) => {
    try {
        return database.query('insert into public.manga (titulo, autor_id, editora_id, demografia) values ($1, $2, $3, $4)', [manga.title, manga.author, manga.publish_company, manga.demography]);
    } catch (error) {
        return "Erro ao criar o manga: "+error;
    }
}

exports.updateManga = async (idManga:number, manga:any) => {
    try {
        return database.query('update public.manga set titulo = $1, autor_id = $2, editora_id = $3, demografia = $4 where id = $5', [manga.title, manga.author, manga.publish_company, manga.demography, idManga]);
    } catch (error) {
        return "Erro ao atualizar o manga: "+error;
    }
}

exports.deleteManga = async (idManga:number) => {
    try {
        return database.query('update public.manga set data_remocao = NOW() where id = $1', [idManga]);
    } catch (error) {
        return "Erro ao remover o manga: "+error;
    }
}
