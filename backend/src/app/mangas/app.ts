const mangasData = require('../../infrastructure/mangas/data');

exports.getMangas = async () => {
    return mangasData.getMangas();
}

exports.getManga = async (idManga:number) => {
    return mangasData.getManga(idManga);
}

exports.createManga = async (manga:any) => {
    return mangasData.createManga(manga);
}

exports.updateManga = async (idManga:number, manga:any) => {
    return mangasData.updateManga(idManga, manga);
}

exports.deleteManga = async (idManga:number) => {
    return mangasData.deleteManga(idManga);
}
