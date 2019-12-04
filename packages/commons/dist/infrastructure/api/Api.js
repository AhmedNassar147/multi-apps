"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const UserAPI_1 = __importDefault(require("./UserAPI"));
const BACKEND_BASE_URL = "base api";
const catgirApi_1 = __importDefault(require("./catgirApi"));
class default_1 {
    constructor() {
        this.$axios = axios_1.default.create({
            url: BACKEND_BASE_URL
        });
    }
    user() {
        return new UserAPI_1.default(this.$axios);
    }
    category() {
        return new catgirApi_1.default(this.$axios);
    }
}
exports.default = default_1;
//# sourceMappingURL=Api.js.map