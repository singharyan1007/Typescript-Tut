### Interface in typescript
___
Difference between interface and type
> Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
```typescript
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
        
```
while in type aliases
```typescript
type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

 // Error: Duplicate identifier 'Window'.
 ```

 And you know, apart from reopening the interface, inheritance can also be implemented through the interface, but not through the type alias.
 ```typescript
  interface Animal {
    name: string; 
  }
  interface Bear extends Animal {
    honey: boolean;
  }
  ```
  So, here we can see that the interface is more flexible than the type alias, but the type alias is more powerful than the interface, because the type alias can be used to define a union, intersection, tuple, etc.
  ```typescript
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;
  function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
      return n;
    } else {
      return n();
    }
  }
  ```

