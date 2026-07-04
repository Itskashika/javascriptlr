class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abcd`
    }
    usernamecapt(){
        return`${this.username.toUpperCase()}`
    }
}
const kashika=new User("kashika","maheshwarikashika212@gmail.com","password");
console.log(kashika.encryptPassword());
console.log(kashika.usernamecapt());

//behind the scene
function User1(username,email,password){
     this.username = username;
    this.email = email;
    this.password = password

}
User1.prototype.encryptPassword=function(){
     return `${this.password}abcd`
}
User1.prototype.usernamecapt=function(){
    return`${this.username.toUpperCase()}`
}
const piya=new User1("piya","piyam@gmail.com","myselfpiya");
console.log(piya.encryptPassword());
console.log(piya.usernamecapt());