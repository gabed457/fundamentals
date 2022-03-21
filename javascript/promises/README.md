# Promise Fundamentals

## Promise Basics

### Creating a Promise

One way you can create a promise is through the built in Promise Object

```js
var sayHello = new Promise(function (resolve, reject) {
    // In 5 seconds, resolve the Promise.
    // Pass along "Hi, universe!" to any callback methods
    setTimeout(function () {
        resolve('Hi, universe!');
    }, 5000);
});
```

## Why we need promises

Let's use a basic example that calculates take home pay.

```js
class calcPay {
    constructor(p) {
        this.s = p;
    }

    getYearlyTakeHome() {
        this.s = this.s * .75;
    }

    getMonthlyTakeHome() {
        this.s = this.s / 12;

    }

    getWeeklyTakeHome() {
        this.s = this.s / 4;
    }
}

function main() {
    var pay = new calcPay(250000);
    console.log(pay.s);
    pay.getYearlyTakeHome();
    pay.getMonthlyTakeHome();
    pay.getWeeklyTakeHome();
    console.log(pay.s);
    //OUTPUT: 3906.25
}
```

Let's change the function a bit and make the `getYearlyTakeHome()` function slower than the rest.

```js
class calcPay {
    constructor(p) {
        this.s = p;
    }

    getYearlyTakeHome() {
        setTimeout(() => {
            this.s = this.s * .75;
        }, 500);

    }

    getMonthlyTakeHome() {
        this.s = this.s / 12;

    }

    getWeeklyTakeHome() {
        this.s = this.s / 4;
    }
}

function main() {
    var pay = new calcPay(250000);
    pay.getYearlyTakeHome();
    pay.getMonthlyTakeHome();
    pay.getWeeklyTakeHome();
    console.log(pay.s);
    //OUTPUT: 5208.333333333333
}
```

As you can see the other functions end up running before the getWeeklyTakeHome function which gives us the wrong answer.

Some developers will use callbacks to fix this issue like below.

```js
class calcPay {
    constructor(p) {
        this.s = p;
    }

    getYearlyTakeHome(callback) {
        setTimeout(() => {
            this.s = this.s * .75;
            callback();
        }, 500);

    }

    getMonthlyTakeHome(callback) {
        this.s = this.s / 12;
        callback();

    }

    getWeeklyTakeHome(callback) {
        this.s = this.s / 4;
        callback();
    }
}

function main() {
    var pay = new calcPay(250000);
    pay.getYearlyTakeHome(function () {
        pay.getMonthlyTakeHome(function () {
            pay.getWeeklyTakeHome(function () {
                console.log(pay.s);
                //OUTPUT: 3906.25
            });
        });
    });
}
```

As you can see although we got the right answer this style of programming becomes really hairy and hard to maintain and
isn't very readable.

Another solution to this issue is to use a Promise.

```js
class calcPay {
    constructor(p) {
        this.s = p;
    }

    getYearlyTakeHome() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.s = this.s * .75;
                resolve(this);
            }, 500);
        })
    }

    getMonthlyTakeHome() {
        this.s = this.s / 12;

    }

    getWeeklyTakeHome() {
        this.s = this.s / 4;
    }
}

function main() {
    var pay = new calcPay(250000);
    pay.getYearlyTakeHome()
        .then(pay.getMonthlyTakeHome())
        .then(pay.getWeeklyTakeHome())
        .then(() => console.log(pay.s));
    //OUTPUT: 3906.25
}
```

The above solution is using a promise chain to maintain the sequence of operations.

You can also use async & await to create the same result as above, but with cleaner code.

```js
class calcPay {
    constructor(p) {
        this.s = p;
    }

    getYearlyTakeHome() {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.s = this.s * .75;
                resolve(this);
            }, 500);
        })
    }

    getMonthlyTakeHome() {
        this.s = this.s / 12;

    }

    getWeeklyTakeHome() {
        this.s = this.s / 4;
    }
}

async function main() {
    var pay = new calcPay(250000);
    await pay.getYearlyTakeHome();
    await pay.getMonthlyTakeHome();
    await pay.getWeeklyTakeHome();
    console.log(pay.s);
    //OUTPUT: 3906.25
}
```

### Useful Terms

* Fulfiled - The action relating to the promise succeeded
* Rejected - The action relating to the promise failed
* Pending - Hasn't fulfilled or rejected yet
* Settled - Has fulfilled or rejected

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
const promiseA = new Promise((resolutionFunc, rejectionFunc) => {
    resolutionFunc(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("This logs second:", val));
console.log("This logs first");
```

## Promise Methods

### Promise.all()

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all">Reference</a>

`Promise.all` waits for all the promises to resolve or for the first one to reject, then returns a Promise that resolves
to an array of input Promises. The key here is that all the promises start at the same time. Below you can see that by using `Promise.all` we are able to save 2 seconds of computational power using the `Promise.all` method.

```js
async function waitSecond() {
    return new Promise((res, rej) => {
        setTimeout(res, 1000);
    });
}

function runSeries() {
    console.time('series');
    waitSecond().then(() => {
        waitSecond().then(() => {
            waitSecond().then(() => {
                console.timeEnd('series');
                //OUTPUT: 3.030s
            });
        });
    });
}

function runParallel() {
    console.time('parallel');
    Promise.all([
        waitSecond(),
        waitSecond(),
        waitSecond(),
    ]).then(() => {
        console.timeEnd('parallel');
        //OUTPUT: 1.005s
    });
}
runSeries();
runParallel();
```

### Promise.allSettled()

This is valuable, and most used when each of the promises are independent of each other, in comparison with `Promise.all` where each promise is dependent on each other.
Functionally though it works very similarly

```js
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
then((results) => console.log(results));
```
Output:
```js
[
  { status: 'fulfilled', value: 3 },
  { status: 'rejected', reason: 'foo' }
]

```