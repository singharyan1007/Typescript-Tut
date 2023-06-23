// class User{
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name=name
//         this.age=age
//     }
// }

// const aryan=new User("Aryan",21);
// console.log(aryan)

class User{
    readonly city:string="Bengaluru"
    // public email:string
    // private name:string
    // protected age:number
    email:string
    name:string
    age:number

    private _courseCount:number=5
    coursecount:number

    constructor(
        email:string,
        name:string,
        age:number,
        coursecount:number
        
    ){
        this.email=email
        this.name=name
        this.age=age
        this.coursecount=coursecount
        console.log("Inside constructor")
    }
    //In getter ans setter, type is not required
    get courseCount():number{
        return this._courseCount
    }
    // set couseCount(count:number):number{
    //     this._courseCount=count
    // } this code shows an error cause no typescript does not allow setter to return anything
    set couseCount(count:number){
         if(count<=1){
             throw new Error("Invalid course count, should be more than 1")
         }
         this._courseCount=count;
}

get coursecountnum():number{
return this.coursecount;
}
set coursecountnum(count:number){
    if(count<=4){
    throw new Error("Invalid course count, should be more than 4")
}
this.coursecount=count;
}

// const aryan=new User("  ","Aryan",21);
// aryan.city="Delhi"
// aryan.name="Aryan"
// aryan.age=22



}
const Aryan=new User("k","jj",21,3);
console.log(Aryan.courseCount)
console.log(Aryan)

export {}
