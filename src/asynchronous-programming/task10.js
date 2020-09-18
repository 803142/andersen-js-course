// eslint-disable-next-line import/prefer-default-export
export class Musican {
  constructor(url) {
    this.albumsUrl = url;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    const json = await response.json();
    return json;
  }
}
