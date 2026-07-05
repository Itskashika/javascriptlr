class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //here with getter ans setter we have override the password by constructor
    get password(){
return this.newpassword.toUpperCase();
    }
    set password(value){
        this.newpassword=value
    }

    get email(){
        return this.emailid.toLowerCase()
    }
    set email(value){
        this.emailid=value
    }

}

const kashika=new User("Kashika212@gmail.com","1234k")
console.log(kashika.password)
console.log(kashika.email)