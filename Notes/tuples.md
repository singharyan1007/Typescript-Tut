### Tuples in Typescript
___

1.Tuple type is another type of `Array` type. 
2.Exactly how many elements and the type of elements at specific positions is already defined.

```typescript
type StringNumber=[string,number]
```
It is a tuple type of two elements, first element is string and second element is number.

```typescript   
function doSomething(num:[string,number]){
    const a = num[0];
    const b=num[1];
}
```

>**A required element cannot follow optional element**

For example, the following code will throw an error:
```typescript
type StringNumberOptional=[string,number?,number]
```
In case of tuple type, the optional element should be at the last position. The presence of optional element at the end affects the length of the tuple.

```typescript   
function doSomething(num:[string,number,number?]){
    const a = num[0];
    const b=num[1];
    const c=num[2];
}
```
In the above example, the length of the tuple is 2 if the optional element is not passed. If the optional element is passed, the length of the tuple is 3.
____


### Using tuple with rest operator


Tuples can also have rest elements, which have to be an array/tuple type.
```typescript
type StringNumberBooleans = [string, number, ...boolean[]];
```
StringNumberBooleans describes a tuple whose first two elements are string and number respectively, but which may have any number of booleans following.

```typescript
function readButtonInput(...args: [string, number, ...boolean[]]) {
  const [name, version, ...input] = args;
  // ...
}
```
It is basically equivalent to :
```typescript
function readButtonInput(name: string, version: number, ...input: boolean[]) {
  // ...
}
```
