# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

Line 4 is assigning a new value to x inside a function but the function has not been called. Therefore, x remains at same value it has on line 1 in global scope.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

logging function f1 will return the value of x defined in global scope which is 10. However, console logging y will return a reference error that y is not defined because we are logging it outside its scope which is the function f1.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

x is in global scope so console logging x will return 9. function f2 is reassigning an objects value inside a variable y. y is logged after function f2 is called taking y as a parameter. x is reassigned inside y now so x will be 10.
