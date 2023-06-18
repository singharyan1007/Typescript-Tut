In functions type annotation is compulsory for parameters, but not for return type. 
```bash 
function add(a:number,b:number)
{
    return a+b;
}
add(10,20);
```
Here the return type is inferred as number. 
___
### 2. Return type of a function
```bash
function getValue(myVal:number):boolean{
    if(myVal>5){
        return true
    };
    return false;
}
```
### 3. Error handling in functions
```bash
function consoleError(errmsg:string):void{
    console.log(errmsg);
}
```
This function does not return any value, so the return type is `void`.

Similarly, we can use `never` for the error handling, such as,
```bash
function handleError(errormsg:string):never{
    throw new Error(errormsg);
}
```

