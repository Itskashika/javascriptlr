class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
           console.log(`A new course was added by ${this.username}`);
    }
}
const piya=new Teacher("piya","piyam@gmail.com","myselfpiya");
piya.addCourse();
piya.logMe();
const kashika=new User("kashika","maheshwarikashika212@gmail.com","password");
kashika.logMe();
//kashika.addCourse();

console.log(piya instanceof(Teacher));
console.log(piya instanceof(User));

console.log(kashika instanceof(Teacher));
