# Promise Fundamentals
## Promise Keywords
### Async
Aysnc makes a function a promise and gives us access to all the underlying promise methods.
```js
async function asyncExample() {
    return 'You now have access to Promise methods';
}
asyncExample()
    .then(res => {
        console.log(res);
        return 'I have changed the result';
    })
    .then(res => {
        console.log(res);
        throw new Error('This catch method will run now')
    })
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));
```
The code below and the code above do the same thing, but using the async keyword makes your code a lot cleaner.
```js
function asyncExample() {
    return new Promise((resolve) => {
        resolve('You now have access to Promise methods');
    });
}

asyncExample()
    .then(res => {
        console.log(res);
        return 'I have changed the result';
    })
    .then(res => {
        console.log(res);
        throw new Error('This catch method will run now')
    })
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));
```
### Await
The await keyword is used to wait for a promise to resolve in a block.
```js
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function awaitExample() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log('this line is blocked from running until the promise above has resolved');
    console.log(result);
    // expected output: "resolved"
}
```
While a promise is resolving the code below it will continue to run

```js
const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then( (val) => console.log("This logs second:",val) );
console.log("This logs first");
```

## Promise Methods
### Promise.all()
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Reference</a>

`Promise.all` waits for all the promises to resolve or for the first one to reject, then returns a Promise that resolves to an array of input Promises.
```js
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```
