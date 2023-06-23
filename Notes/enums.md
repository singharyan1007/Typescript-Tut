### Enums in typescript
___

Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

 A better approach to enums is to use const as a prefix to declaring the enum. This will ensure that the enum is not transpiled to JavaScript and will be used as is.
```typescript
const enum mySeat{
    AISLE,
    MIDDLE,
    WINDOW,
    FOURTH
}
```
>By default value is initilised as 0 to first element and then incremented by 1 for each element. But we can also assign values to each element.
