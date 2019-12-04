"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const { createContext } = react_1.default;
const initialState = {
    lang: []
};
exports.Store = createContext(initialState);
console.log("here");
function StoreProvider(props) {
    return <exports.Store.Provider value={initialState}>{props.children}</exports.Store.Provider>;
}
exports.StoreProvider = StoreProvider;
//# sourceMappingURL=store.js.map