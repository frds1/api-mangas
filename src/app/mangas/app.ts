const mangasData = require('../../infrastructure/mangas/data');

exports.getMangas = async () => {
    try {
        return await mangasData.getMangas();
    } catch(error) {
        return "Erro ao buscar os mangas: "+error;
    }
}

exports.getManga = async (idManga:number) => {
    try {
        return await mangasData.getManga(idManga);
    } catch(error) {
        return "Erro ao buscar o manga: "+error;
    }
}

exports.createManga = async (manga:any) => {
    try {
        return mangasData.createManga(manga);
    } catch(error) {
        return "Erro ao criar o manga: "+error;
    }
}

exports.updateManga = async (idManga:number, manga:any) => {
    try {
        await exports.getManga(idManga);
        return mangasData.updateManga(idManga, manga);
    } catch(error) {
        return "Erro ao atualizar o manga: "+error;
    }
}

exports.deleteManga = async (idManga:number) => {
    await exports.getManga(idManga);
    return mangasData.deleteManga(idManga);
}
