export default class {
  protected $axios: any;
  constructor(axios: any) {
    this.$axios = axios;
  }
  index() {
    return this.$axios.$get("/categories");
  }
  store(data: any) {
    return this.$axios.post("/categories", data);
  }
  update(id: number, data: any) {
    return this.$axios.put(`/categories/${id}`, data);
  }
  delete(id: number) {
    return this.$axios.delete(`/categories/${id}`);
  }
}
