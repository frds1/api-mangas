export class Manga {
    id: number
    titulo: string
    descricao: string
    autor_id: number
    genero_id: number
    editora_id: number

    constructor (id: number, titulo: string, descricao: string, autor_id: number, genero_id: number, editora_id: number) {
        this.id = id
        this.titulo = titulo
        this.descricao = descricao
        this.autor_id = autor_id
        this.genero_id = genero_id
        this.editora_id = editora_id
      }
}
