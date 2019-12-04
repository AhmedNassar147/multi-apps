"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(axios) {
        this.$axios = axios;
    }
    index() {
        return this.$axios.$get("/categories");
    }
    store(data) {
        return this.$axios.post("/categories", data);
    }
    update(id, data) {
        return this.$axios.put(`/categories/${id}`, data);
    }
    delete(id) {
        return this.$axios.delete(`/categories/${id}`);
    }
}
exports.default = default_1;
//# sourceMappingURL=catgirApi.js.map