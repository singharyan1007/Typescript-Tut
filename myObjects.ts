function createUser({name:string,isPaid:boolean}){}
//function with object as parameter and no return type

//bad behavior
// createUser({name:"Aryan",isPaid:false,email:'ad@ad.dev'})

var newUser={name:"Aryan",isPaid:false,email:"s@s.com"};
createUser(newUser);
//This syntax does not return any error

function createCourse():{}{
    return {}
}
//Example
function createCoursee():{name:string,isPaid:boolean}{
    return {name:'ReactJS',isPaid:false}
}


 
type User={
    name:string,
    email:string,
    isActive:boolean
};
//function using type alias
function createUserStruct(user:User):User{
    return {name:"",email:"",isActive:true};
}

//Readonly in typescript
type userDetail={
    readonly _id:number,
    name:string,
    email:string,
    isActive:boolean,
    credDetails?:number,

}
//? -> in typescript it means this field is optional 
let username:userDetail={
    _id:12345,
    name:"Aryan",
    email:"a@a.dev",
    isActive:false,

}
console.log(username);
username.email="s@a.com";
// username._id=1345 not allowed cause of read-only property
 
type cardNumber={
    cardNumber:number,
}
type cardDate={
    cardDate:string,
}
type cardDetails=cardNumber & cardDate & {cvv:number};
//& is used to combine two types

export{}