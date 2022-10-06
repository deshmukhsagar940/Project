export class RestApi {
    public readonly API_URL = 'http://localhost:8085';
    //public readonly API_URL = 'http://35.182.236.2:8080/insurancerest';

    //LOGIN MODULE API
    public readonly LOGIN_URL = this.API_URL + '/login';
	
	 //Policy URL
    public readonly POLICY_URL = this.API_URL + '/policy';
    public readonly POLICY_Add_URL=this.POLICY_URL+'/save';
    public readonly POLICY_GET_URL=this.POLICY_URL+'/getAll';
    public readonly POLICY_DELETE_URL=this.POLICY_URL+'/delete';
    //Account URL
    public readonly ACCOUNT_URL = this.API_URL + '/account';
    public readonly ACCOUNT_Add_URL=this.ACCOUNT_URL+'/save';
    public readonly ACCOUNT_GET_URL=this.ACCOUNT_URL+'/getAllAccount';
    public readonly ACCOUNT_DELETE_URL=this.ACCOUNT_URL+'/delete';

    //USER URL
    public readonly USER_URL = this.API_URL + '/users';
    
    constructor() {

    }

}
