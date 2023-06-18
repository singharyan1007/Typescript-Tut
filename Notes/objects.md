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
