### Union Types
___
1.Union types are a way to declare that a variable can be one of several types. For example, if we wanted to declare a variable that could be either a string or a number, we could do so with a union type:

```typescript {cmd="node"}
let union: string | number;
union = "hello";
union = 5;
```

2.Typescript will allow operation on a union type if that operation is valid for all types in the union. For example, we can use the length property on a string or a number:

```typescript {cmd="node"}
function printId(id:number|string){
    console.log(id.toUpperCase());
}
printId(101);
```
This will result in error because number does not have toUpperCase() method.
>Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.

3.Solution for this problem is to `narrow` the code. `Narrowing` can be done only if Typescript is sure of the `typeof` of the input

```typescript
function printId(id:number|string){
    if(typeof id==="string"){
        return id.toUpperCase();
    }else{
        return `your id is {id}`
    }
}  
```
```typescript
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
```
4.But sometimes narrowing is not required, such as in this case:
```typescript
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```

5.**Another custom example related to roles**

```typescript {cmd="node"}
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
```
6.To have mixed type array
```typescript {cmd="node"}
const data:number[]=[1,2,3];
const data2:string[]=["1","2"];
const data3:(number|string)[]=[1,2,"aryan"];
//( | ) will allow us to have a mixed type safe array in typescript
```

