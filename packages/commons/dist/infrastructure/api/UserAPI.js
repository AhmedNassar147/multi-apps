"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    constructor(axios) {
        this.$axios = axios;
    }
    login(data) {
        let loginData = this.$axios.post("/login", data);
        return {
            msg: "your are in user/login and axios does work",
            loginData: loginData
        };
    }
    signup(data) {
        return this.$axios.post("/signup", data);
    }
    forgotPass(email) {
        return this.$axios.post("/forgotPass", email);
    }
    changeUserData(data) {
        return this.$axios.update("/changeData", data);
    }
    validatePayment(data) {
        return this.$axios.post("/payment", data);
    }
}
exports.default = default_1;
//# sourceMappingURL=UserAPI.js.map