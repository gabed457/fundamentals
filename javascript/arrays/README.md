# Array Fundamentals

This README assumes you understand what an array is and how it works on a basic level. We'll be going over primarily
Array Methods here.

- [Array Fundamentals](#array-fundamentals)
    + [Array.sort](#arraysort)
    + [Array.filter](#arrayfilter)
    + [Array.forEach](#arrayforeach)
    + [Array.map](#arraymap)
    + [Array.some](#arraysome)
    + [Array.every](#arrayevery)
    + [Array.includes](#arrayincludes)
    + [Array.indexOf](#arrayindexof)
    + [Array.find](#arrayfind)
    + [Array.findIndex](#arrayfindindex)
    + [Array.reduce](#arrayreduce)

### Array.sort

This method is probably the easiest misunderstood as most of the time your compare function has been used before and can
be found on stackoverflow. All this method does is sort the array according to how the compare function tells it to be
sorted.

The default it sorts is ascending order for strings.

```js
const strArr = ['banana', 'apple', 'apple', 'doctor', 'zed', 'elephant'];
strArr.sort();
//OUTPUT: [ 'apple', 'apple', 'banana', 'doctor', 'elephant', 'zed' ]
```

If we do the same thing with numbers it won't give us the expected output.

```js
const numArr = [1, 3, 200, 5, 0];
numArr.sort();
//OUTPUT: [ 0, 1, 200, 3, 5 ]
```

This is because it's sorting it like a string off of the first character not as a number as a whole.

So to understand how to fix this let's create our first compare function.

```js
const numArr = [1, 3, 200, 5, 0];
numArr.sort((a, b) => {
    if (a - b < 0) {
        return -1;
    } else if (a - b > 0) {
        return 1;
    } else if (a - b === 0) {
        return 0;
    }
})
//OUTPUT: [ 0, 1, 3, 5, 200 ]
```

As you can see it takes two parameters a & b. A & b are different values in the array that are going to be compared.

The compare function has 3 potetial return value types.

1. Returning a negative number means a needs to go before b in the array.
2. Returning 0 means that they are equal and should go next to each other in the array.
3. Returning a positive number means that a needs to go after b in the array.

Knowing how the compare function works makes understanding shorthand that you find online a lot easier to understand.

```js
const numArr = [1, 3, 200, 5, 0];
numArr.sort((a, b) => a - b);
//OUTPUT: [ 0, 1, 3, 5, 200 ]
```

The above function works because if a > b then a-b will always be a positive number which means a goes after b. The same
goes on the flip side if a less than b then a-b will always be a negative number.

Shorthand for descending order is simple here, all we have to do is flip b and a and it'll change the order to
descending.

```js
const numArr = [1, 3, 200, 5, 0];
numArr.sort((a, b) => b - a);
```
Output:
```js
[ 200, 5, 3, 1, 0 ]
```

Now let's look at strings, if you want to do anything more complex than the default sort from above, then we'll have to
create a compare function.

One thing to keep in mind is you can compare strings using the `>`, `<` & `=` operators.

Here's some examples:

1. a is equal to a
2. A < a
3. a < z

Below is an example with that understanding on sorting an array of strings in ascending order.

```js
const strArr = ['banana', 'apple', 'Apple', 'doctor', 'zed', 'elephant'];
strArr.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        //a === b return 0
        return 0;
    }
});
```
Output:
```js
[ 'Apple', 'apple', 'banana', 'doctor', 'elephant', 'zed' ]
```

Here's how you could do it if you didn't want the casing to matter when you sort

```js
const strArr = ['banana', 'apple', 'Apple', 'doctor', 'zed', 'elephant'];
strArr.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    } else if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    } else {
        //a === b return 0
        return 0;
    }
});
```
Output:
```js
[ 'apple', 'Apple', 'banana', 'doctor', 'elephant', 'zed' ]
```

To change the above order to descending all we have to do is change the rules on when we return a 1 or -1.

```js
const strArr = ['banana', 'apple', 'Apple', 'doctor', 'zed', 'elephant'];
strArr.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return 1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
        return -1;
    } else {
        //a === b return 0
        return 0;
    }
});
```
Output:
```js
[ 'zed', 'elephant', 'doctor', 'banana', 'apple', 'Apple' ]
```

Let's do a complex one where we have numbers and strings and want all the strings sorted first in descending order, and
the numbers sorted after the strings in ascending order.

```js
const mixedArr = ['banana', 500, 'apple', 2, 'Apple', 'doctor', 25, 'zed', 'elephant', 0];
mixedArr.sort((a, b) => {
    if (typeof a === 'string' && typeof b === 'number') {
        return -1;
    } else if (typeof a === 'number' && typeof b === 'string') {
        return 1;
    } else if (typeof a === 'string' && typeof b === 'string') {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
});
```
Output: 
```js
['zed', 'elephant', 'doctor', 'banana', 'apple', 'Apple', 0, 2, 25, 500]
```

So as you can see there is a lot you can do with the built in sort method as long as you understand properly how the
compare function is used. One thing to keep in mind is that the you can store a compare function elsewhere that is used
a lot and pull that function in directly to the sort method.

`customFunctions.js`

```js
function strDescNumAsc(a, b) {
    if (typeof a === 'string' && typeof b === 'number') {
        return -1;
    } else if (typeof a === 'number' && typeof b === 'string') {
        return 1;
    } else if (typeof a === 'string' && typeof b === 'string') {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
}

module.exports = {
    strDescNumAsc
}

```

`index.js`

```js
const cf = require('./customFunctions');
const mixedArr = ['banana', 500, 'apple', 2, 'Apple', 'doctor', 25, 'zed', 'elephant', 0];
mixedArr.sort(cf.strDescNumAsc);
```

Output:

```js
['zed', 'elephant', 'doctor', 'banana', 'apple', 'Apple', 0, 2, 25, 500]
```

Let's use an example that pops up quite frequently where you have an array of objects that need to be sorted. The
requirement is that the employees are first sorted by salary, but if the salary is the same, then sort by their name
case-insensitive.

```js
const customCompareFunc = require('./customFunctions');
const mixedArr = ['banana', 500, 'apple', 2, 'Apple','doctor', 25, 'zed','elephant', 0];
mixedArr.sort(customCompareFunc.strDescNumAsc);

const employees = [
    {name:'george',salary:30000},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
employees.sort((a,b) => {
    if(a.salary === b.salary) {
        if(a.name.toLowerCase() > b.name.toLowerCase()){
            return 1;
        }
        else if(a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        else {
            return 0;
        }
    }
    else {
        return b.salary-a.salary;
    }
});
```

Output:

```js
[
    { name: 'Sam', salary: 1000000 },
    { name: 'sally', salary: 363846 },
    { name: 'gabe', salary: 165000 },
    { name: 'george', salary: 30000 },
    { name: 'George', salary: 30000 },
    { name: 'jacob', salary: 30000 },
    { name: 'John', salary: 25000 }
]
```

### Array.filter

This method used a lot especially when getting data from a database or API. 
This method allows you to remove items in the array according to the standard that you create.


Let's do an example that removes all the negative numbers.
```js
const numArr = [-1,0,1,-25,23];
numArr.filter(el => el >= 0);
```
Output: 
```js
[ -1, 0, 1, -25, 23 ]
```
You might have expected it to remove the negative elements, however it doesn't because the filter method returns a new array, it doesn't affect the array you passed in.

So by creating a new array and setting it equal to the function we are able to log the correct output.
```js
const numArr = [-1,0,1,-25,23];
let nonNegativeArr = numArr.filter(el => el >= 0);
```
Output:
```js
[ 0, 1, 23 ]
```

There are 3 parameters that you can access in the filter method.
1. Element - The current element the filter method is working on.
2. Index - The index of the Element in the parent array.
3. Array - The parent array the filter method is using.


Let's do an example with our employees array of objects that we used earlier.
We want to remove anyone that makes less than $100K.

```js
const employees = [
    {name:'george',salary:30000},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let topEarners = employees.filter(el => el.salary >= 100000);
```
Output:
```js
[
  { name: 'sally', salary: 363846 },
  { name: 'Sam', salary: 1000000 },
  { name: 'gabe', salary: 165000 }
]
```
Let's do one more where this time we filter out all those that don't have at least 1 assistant.
```js
const employees = [
    {name:'george',salary:30000, assistants: ['John']},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000, assistants: ['sally','George']},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let employeesWithMultipleAssistants = employees.filter(el => el.assistants?.length > 1);
```
Output:
```js
[ { name: 'Sam', salary: 1000000, assistants: [ 'sally', 'George' ] } ]
```
The reason the above code doesn't blow an error is because of the question mark after el.assistants in the filter.
This is called optional chaining and you can read more about it <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Here</a>

### Array.forEach

This method is basically a for loop on the array. It doesn't return anything it just makes it possible to shorthand the for loop itself.

In the example below we will log every element in the array:
```js
const numArr = [1, 3, 200, 5, 0];
numArr.forEach(el => console.log(el * 2));
```
Output:
```js
2
6
400
10
0
```
That's all it does, no more no less.

### Array.map

This method returns a new array that was created by applying your logic to the parent array.

Here's an easy example:

```js
let numArr = [1, 3, 200, 5, 0];
let doubledNumArr = numArr.map(el => el * 2);
```
Output:
```js
[ 2, 6, 400, 10, 0 ]
```

### Array.some

This method returns a boolean and checks to if at least one element in the array tests positive according to your conditions.

```js
let numArr = [1, 3, 200, 5, 0, -1];
let numContainsNegativeNumbers = numArr.some(el => el < 0);
```
Output:
```js
true
```

### Array.every

This method returns a boolean and checks to if at all elements in the array tests positive according to your conditions.

```js
let numArr = [1, 3, 200, 5];
let numArrContainsOnlyPositiveNumbers = numArr.every(el => el > 0);
```
Output: 
```js
true
```

### Array.includes

This method checks to see if the element you are looking for is in the array.

```js
let numArr = [1, 3, 200, 5];
let numArrContains3 = numArr.includes(3);
```
Output:
```js
true
```

### Array.indexOf

This method gets the index of the element you are looking for in the area, if the element doesn't exist it returns -1.

```js
let numArr = [1, 3, 200, 5];
numArr.indexOf(3);
```
Output:
```js
1
```

### Array.find

This method returns the first element in the array that matches your conditions.

```js
const employees = [
    {name:'george',salary:30000, assistants: ['John']},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000, assistants: ['sally','George']},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let employeeWithAssistants = employees.find(el => el?.assistants);
```
Output:
```js
{ name: 'george', salary: 30000, assistants: [ 'John' ] }
```

### Array.findIndex

This method is similar to indexOf, but instead takes a callback as a parameter & returns the index of the element that matches the conditions that you set in the callback function.

```js
const employees = [
    {name:'george',salary:30000, assistants: ['John']},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000, assistants: ['sally','George']},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let employeeWith2AssistantsIndex = employees.findIndex(el => el.assistants?.length === 2);
```
Output:
```js
4
```

### Array.reduce

This method returns the output that you made after going through every single element. 

This method has 4 parameters
1. accumulator - Value that was returned in the last iteration of the callback function.
2. currentValue - The current element the reduce method is working on.
3. currentIndex - The index of the current value.
4. array - The parent array the reduce method was passed.

Let's use the employees element from above and let's say we wanted to see what the salaries were for everyone combined.
```js
const employees = [
    {name:'george',salary:30000, assistants: ['John']},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000, assistants: ['sally','George']},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let totalSalaries = employees.reduce((accumulator, currentElement) => {
    if(typeof accumulator === 'object') {
        accumulator = accumulator.salary;
    }
    return accumulator + currentElement.salary;
});
```
Output:
```js
1643846
```

Let's do one more example, but only add all the people that have a salary that's less than $40K

```js
const employees = [
    {name:'george',salary:30000, assistants: ['John']},
    {name:'George',salary:30000},
    {name:'John',salary:25000},
    {name:'sally',salary:363846},
    {name:'Sam',salary:1000000, assistants: ['sally','George']},
    {name:'gabe',salary:165000},
    {name:'jacob',salary:30000}
];
let totalSalariesBelow40 = employees.reduce((accumulator, currentElement) => {
    if(typeof accumulator === 'object') {
        accumulator = accumulator.salary;
    }
    return currentElement.salary < 40000 ? accumulator + currentElement.salary : accumulator;
});
```
Output:
```js
115000
```


