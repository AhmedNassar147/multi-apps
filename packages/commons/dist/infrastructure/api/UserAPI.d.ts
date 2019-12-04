export default class {
    protected $axios: any;
    constructor(axios: any);
    login(data: any): {
        msg: string;
        loginData: any;
    };
    signup(data: any): any;
    forgotPass(email: string): any;
    changeUserData(data: any): any;
    validatePayment(data: any): any;
}
