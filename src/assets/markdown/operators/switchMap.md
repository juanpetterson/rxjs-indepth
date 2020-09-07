Example 1: Switch to another stream

```typescript
import { from } from "rxjs";
import { switchMap } from "rxjs/operators";

// emit (1,2,3,4,5)
const sourceNumbers = from([1, 2, 3, 4, 5]);
const sourceStrings = from(["one", "two", "three", "four", "five"]);
// switch to sourceStrings instead log the numbers stream
const example = source.pipe(switchMap((val) => sourceStrings));
// output: one,two,three,four,five
const subscribe = example.subscribe((val) => console.log(val));
```

Example 2: Make a request when need a value from an stream

```typescript
import { from } from "rxjs";
import { switchMap } from "rxjs/operators";

// emit 1
const getClientId$ = of(1);
const getDataByClient$ = (clientId) =>
  this.dataService.getDataByClient(clientId);
// get the clientId and only if we got an value, switch the getDataByClient using the clientId
// as parameter to get the data
const example = getClientId$.pipe(
  switchMap((clientId) => getDataByClient(clientId))
);
//output: data from getDataByClient
const subscribe = example.subscribe((data) => console.log(data));
```
