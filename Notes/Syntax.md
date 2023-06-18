### Basic syntax for type declaration
___


```bash
let variableName: type=value
```
---
### Number
```bash
let a: number = 10;
```
### Boolean
```bash 
let b: boolean = true;
```

Now About type inference in typescript, it is a feature of typescript which allows us to not explicitly mention the type of the variable. It automatically infers the type of the variable based on the value assigned to it. 

Sometimes there is no need to infer the type in front  of the variable, for example

```bash
let b = 10;
b.toFixed(2);
```
Here the type of b is inferred as number, and we can use all the methods of number on it. It might seem similar to `var` in JS, but it is not. 

### Any keyword 

It basically turns of type checking for a particular variable. Not a good practice. 

```bash
let hero:string;
function getHero(){
    return "Batman";
}
hero=getHero();
```
Here the type of hero is inferred as string, but if we change the return type of getHero() to number, it will still work in JS, but not in TS. 



