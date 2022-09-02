// Operatörler

let val;
const a=10;
const b=5;
const c=5;
let   d=3;

// 1- Aritmetik Operatörler

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = ++d;
val = --d;
val = d--;

// 2- Atama Operatörleri

val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %=a; // val = val % a;   % işareti mod işaretidir.


// 3- Karşılaştırma Operatörleri

val = a==b;
val = b==c;
val = b===c; // değer kontrolü & type
val = 5 === '5';
val = a!=b; // ! işareti değil demektir
val = a!==b;
val = a > b;
val = b < a;
val = a >= b;
val = 5 >= 5;
val = a <= b;

// 4- Mantıksal Operatörler

   // && (And)
   // true  && true  => true
   // true  && false => false
   // false && false => false

   val=  (a>b) && (a>c) 
   


   // || (Or)
 
   // true  && true  => true
   // true  && false => true
   // false && false => false

   val = (a>b) || (a<c)

   // ! (Not)

   val = !(a>b)

   // !true  => false
   // !false => true

console.log(val);
console.log(typeof val);