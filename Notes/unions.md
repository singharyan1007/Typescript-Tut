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
But sometimes narrowing is not required, such as in this case:
```typescript
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
```