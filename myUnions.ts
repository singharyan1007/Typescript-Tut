function myunion(a:number|string):string|number{
    if(a=="Hello"){
        return "Return type is String"
    }else{
        return 1;
    }
}

myunion("Hello");
myunion(1);

type User={
    name:string,
    id:number,
    admin:boolean
};
type admin={
    username:string,
    id:number,
    admin:true,
}
let aryan:User|admin={name:"Aryan",id:1017,admin:false};
aryan={username:"as",id:1017,admin:true};

function user(usr:User|admin):User|admin{
    if('username' in usr){
        return {username:usr.username,id:usr.id,admin:usr.admin};
    }
    return {name:"Aryan",id:1007,admin:false};
}

let usr=user(aryan);
console.log(usr);

const data:number[]=[1,2,3];
const data2:string[]=["1","2"];
const data3:(number|string)[]=[1,2,"aryan"];

let seat:"aisle"|"middle"|"window";
// seat="crew" will give a type error

export {}