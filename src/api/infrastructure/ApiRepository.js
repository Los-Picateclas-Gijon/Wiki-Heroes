export default class ApiRepository {
  contructor(url) {
    this.url = url;
  }

  async getAllData() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data.data;
  }
}
