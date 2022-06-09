const database = require('../../config/database/database');

exports.getMangas = async () => {
    try {
        return database.query('select * from public.manga');
    } catch (error) {
        return console.log("Erro ao buscar os mangás: "+error);
    }
};

exports.getManga = async (idManga:number) => {
    try {
        return database.query('select * from public.manga where id = $1', [idManga]);
    } catch (error) {
        return console.log("Erro ao buscar o mangá de id "+idManga+": "+error);
    }
}

exports.createManga = async (manga:any) => {
    try {
        return database.query('insert into public.manga (titulo, autor_id, editora_id, demografia) values ($1, $2, $3, $4)', [manga.title, manga.author, manga.publish_company, manga.demography]);
    } catch (error) {
        return console.log("Erro ao criar o mangá: "+error);
    }
}

exports.updateManga = async (idManga:number, manga:any) => {
    try {
        return database.query('update public.manga set titulo = $1, autor_id = $2, editora_id = $3, demografia = $4 where id = $5', [manga.title, manga.author, manga.publish_company, manga.demography, idManga]);
    } catch (error) {
        return console.log("Erro ao atualizar o mangá: "+error);
    }
}

exports.deleteManga = async (idManga:number) => {
    try {
        return database.query('update public.manga set data_remocao = NOW() where id = $1', [idManga]);
    } catch (error) {
        return console.log("Erro ao deletar o mangá: "+error);
    }
}