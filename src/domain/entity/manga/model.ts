export class Manga {
  title: string
  author_id: number
  demography: string
  publish_company: number

  constructor (title: string, author_id: number, demography: string, publish_company: number) {
    this.title = title;
    this.author_id = author_id;
    this.demography = demography;
    this.publish_company = publish_company;
  }
}
