import axios from "axios";
import UserAPI from "./UserAPI";
// import { BACKEND_BASE_URL } from 'react-native-dotenv';

const BACKEND_BASE_URL = "base api";

import CategoryAPI from "./catgirApi";
export default class {
  protected $axios: any;
  constructor() {
    this.$axios = axios.create({
      url: BACKEND_BASE_URL
    });
  }
  user() {
    return new UserAPI(this.$axios);
  }
  category() {
    return new CategoryAPI(this.$axios);
  }
}
