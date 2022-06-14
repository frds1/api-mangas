export class Manga {
  id: number;
  title: string;
  author_id: number;
  demography: string;
  publish_company: number;

  constructor(
    id: number,
    title: string,
    author_id: number,
    demography: string,
    publish_company: number
  ) {
    this.id = id;
    this.title = title;
    this.author_id = author_id;
    this.demography = demography;
    this.publish_company = publish_company;
  }
}
