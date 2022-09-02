// ** Müşteri adı

let isim ="Tolga";

// ** Müşteri soyadı

let surname ="Bulut";

// ** Müşteri tc kimlik

var tckimlik = 12345678900;

// ** Müşteri sipariş toplamı

let ordertotal =205.6



// ** Müşteri cinsiyet

var gender = "erkek"

// ** Müşteri adres bilgisi

var adres = {
    city:"Edirne",
    country:"Türkiye"
}
// ** Müşteri hobiler

let hobi = ['gezmek','spor','seyehat']

console.log(isim)
console.log(surname)
console.log(tckimlik)
console.log(ordertotal)
console.log(gender)
console.log(adres)
console.log(hobi)



// ** Aşağıdaki şiparişlerin toplamını hesaplayınız.

var order1='100';
var order2='150';

let total1 = Number(order1)+Number(order2);

console.log(Number(order1)+Number(order2));
console.log(total1);


// ** Aşağıdaki şiparişlerin toplamını hesaplayınız.

var order3="100.2";
let order4="150.5";

console.log(Number(order3)+Number(order4))

// ** Aşağıdaki şiparişlerin toplamını tam sayı olarak hesaplayınız.

var order5=parseInt("100.2");
var order6=parseInt("150.5");

console.log(order5+order6)

// ** Aşağıda verilen doğum yılına göre yaş hesaplayın.

const yearOfBirth = 1996;

// yearOfBirth = 1997;

console.log(new Date().getFullYear()-yearOfBirth);


// ** Aşağıda string ifadenin karakter sayısını bulunuz.

var course = "Modern Javascript Kursu";

console.log(course.length);
