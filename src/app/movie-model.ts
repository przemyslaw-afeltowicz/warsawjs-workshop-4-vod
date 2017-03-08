export class MovieModel {
  private url: string;
  private name: string;

  constructor(name: string = '', url: string = ''){
    this.name = name;
    this.url = url;
  }
}
