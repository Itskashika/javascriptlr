const User={
    _email: 'h@hc.com',
    _password: "abc",
    get email(){
         return this._email.toUpperCase()
    },
    set email(value){
this.emailid=value
    }
}
const kashika=Object.create(User)
console.log(kashika.email);
//here underscore _ define the private property, cant be used by normal user.