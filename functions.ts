function signUpUSer(name:string,email:string,isPaid:boolean){
    console.log(name,email,isPaid);

};

//But if you want to pass only two values to the function, then we can set one as default
//using the arrow function
let loginUSer = (name:string,email:string,isPaid:boolean = true) => {};

signUpUSer('John','a@a.dev',true);
loginUSer('John','something');

//Return type of a function
function getValue(myVal:number):boolean{
    if(myVal>5){
        return true
    };
    return false;
}
const getHello=(s:string):string=>{
    return "Hello"
}

const heros=["Superman","Batman","Spiderman"];
heros.map((hero=>{
    return `hero is ${hero}`
}))
//same thing could be written typesafely as
heros.map((hero):string=>{
    return `hero is ${hero}`
})
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
function handleError(errormsg:string):never{
    throw new Error(errormsg);
}

export{}