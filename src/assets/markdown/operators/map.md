Example 1: Add 10 to each number

```typescript
import { of } from "rxjs";
import { tap, map } from "rxjs/operators";

const array = of(1, 2, 3, 4, 5);
// transparently log values from source with 'tap'
const example = array.pipe(
  tap((val) => console.log(`BEFORE MAP: ${val}`)),
  map((val) => val + 10),
  tap((val) => console.log(`AFTER MAP: ${val}`))
);

//'tap' does not transform values
//output: 11...12...13...14...15
const subscribe = example.subscribe((val) => console.log(val));
```

Example 2: Map to single property

```typescript
import { from } from "rxjs";
import { map } from "rxjs/operators";

//emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = from([
  { name: "Joe", age: 30 },
  { name: "Frank", age: 20 },
  { name: "Ryan", age: 50 },
]);
//grab each persons name, could also use pluck for this scenario
const example = source.pipe(map((person) => person.name));
//output: "Joe","Frank","Ryan"
const subscribe = example.subscribe((val) => console.log(val));
```

Example 3: Map to single property with destructuring

```typescript
import { from } from "rxjs";
import { map } from "rxjs/operators";

//emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
const source = from([
  { name: "Joe", age: 30 },
  { name: "Frank", age: 20 },
  { name: "Ryan", age: 50 },
]);
//grab each persons name, could also use pluck for this scenario
const example = source.pipe(map(({ name }) => name));
//output: "Joe","Frank","Ryan"
const subscribe = example.subscribe((val) => console.log(val));
```
