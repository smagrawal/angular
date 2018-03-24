
export class User{
    id: number;
    email: string;
    
    //both password are in a single object
    password:{
        pwd:string,
        confirmPwd:string
    }

    gender:string;
    terms:boolean;

    constructor(values:Object={}){
        //constructor initialisation
       Object.assign(this,values);
    }
}
