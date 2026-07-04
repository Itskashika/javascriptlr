//when situation come that we dont want to give access of particular method to every object it instance by
//here we use static to do so

//static': it is a keyword which restrict to access, as like we want to restrict not to give unique id everytime for everyone.
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
    static createId(){
        return `1234`
    }
}
const piya=new User("piya")
//console.log(piya.createId());
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
        
    }
}
const kashika=new Teacher("kashika","maheshwarikashika212@gmail.com");

console.log(kashika.logMe());
//console.log(kashika.createId());
