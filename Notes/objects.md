### Object handling in Typescript
___

1.Functions with object parameters
```bash
function createUSer({name:string,isPAid:boolean}){}
```

2.Functions which return an object
```bash
function createCourse():{}{
    return {}
}
```

3.Bad behavior in typescript
```bash
createUser({name:"Aryan",isPaid:false,email:'ad@ad.dev'})
```
propmts an error, cause the email is not in the function definition.
```bash

var newUser={name:"Aryan",isPaid:false,email:"s@s.com"};
createUser(newUser);
```
>**? -> in typescript it means this field is optional and can be ignored. HAs to be applied a property.**
```typescript
type userDetail={
    readonly _id:number,
    name:string,
    email:string,
    isActive:boolean,
    credDetails?:number,

}
//credDetails is optional
```
>**readonly -> in typescript it means this field cannot be changed. HAs to be applied a property.**
```typescript   
function createUser(user:userDetail):userDetail{
    return user;
}   
```      

