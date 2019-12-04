export default class {
  protected $axios: any;
  constructor(axios: any) {
    this.$axios = axios;
  }

  login(data: any) {
    let loginData: any = this.$axios.post("/login", data);
    return {
      msg: "your are in user/login and axios does work",
      loginData: loginData
    };
  }
  signup(data: any) {
    return this.$axios.post("/signup", data);
  }
  forgotPass(email: string) {
    return this.$axios.post("/forgotPass", email);
  }
  changeUserData(data: any) {
    return this.$axios.update("/changeData", data);
  }
  validatePayment(data: any) {
    return this.$axios.post("/payment", data);
  }
}
