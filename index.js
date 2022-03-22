a=20;
b=24;
c=a+b;
console.log( "addition is " +c);

c=a-b;
console.log("subtraction is " +c);

c=a*b;
console.log(" multiplicaton is "+c);

c=a/b;
console.log("Division is "+c);

c=a%b;
console.log("Modulo division is "+c);

const d = 3;
const e = -2;

f = d > 0 && e > 0;
console.log(" AND operator "+f);

f = d > 0 || e > 0;
console.log("OR operator "+f);

x=5;
y=5;
c= x==y;
console.log("double equal is "+c);

c= x===y;
console.log("triple equal is " +c);

g = 5;
h = 8 
c= g>h;
console.log("greater than is "+c);

c= g<h;
console.log("Less than is "+c);

c= g&h;
console.log("Bitwise and is "+c);

c = g|h;
console.log("Bitwise or is "+c);

c = ~h;
console.log("Bitwise not is "+c);

c = g^h;
console.log("Bitwise ex-or is "+c);

c = g>>h;
console.log("Bitwise shift right is "+c);

c= g<<h;
console.log("Bitwise left shift is "+c);