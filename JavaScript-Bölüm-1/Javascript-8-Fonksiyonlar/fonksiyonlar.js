// FUNCTIONS

// function yasHesapla(dogumYili){
//     return 2022 - dogumYili
// }

// let agetolga = yasHesapla(1996);
// let agetunay = yasHesapla(1992);
// let ageserpil = yasHesapla(1970);
// let ageufuk = yasHesapla(1967);

// console.log(agetolga);
// console.log(agetunay);
// console.log(ageserpil);
// console.log(ageufuk);

// function EmekliligeKacYilKaldi(dogumYili,isim){
//     let yas = yasHesapla(dogumYili);
//     let emeklilik = 65 - yas;

//     if(emeklilik>0){
//         console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
//     }else {
//         console.log("Emeklisiniz zaten.")
//     };
// }

// EmekliligeKacYilKaldi(1996,"tolga")





// ---------------------------------------------------




// FUNCTION DECLARATIONS

// Function ismi içeride tanımlanır.

// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions

// Değişken tamamlanır fonksiyon yapılır.

// const sum = function(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,30));
// console.log(sum(10)); // NaN sonucu verir.
// console.log(sum(10,30,40)); // 2'den fazlası görmezden gelinir.

// const sum = function(a,b){
//     if(typeof a === "undefined"){a=0;}
//     if(typeof b === "undefined"){b=0;}
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,30));
// console.log(sum(10));
// console.log(sum(10,30,40)); // 2'den fazlası görmezden gelinir.

// ES6 Default Parameters

// Yukarıdaki gibi if kullanmaya gerek kalmaz 0'a eşitleyince.

const sum = function(a=0,b=0){
    var c = a+b;
    return c;
}


// function sumAll(){
//     var total = 0;
//     for(let i =0;i<arguments.length;i++){
//         total+=arguments[i];
//     }
//     return total;
// };


// console.log(sum(10,30));
// console.log(sum(10));
// console.log(sum(10,30,40,50)); // 2'den fazlası görmezden gelinir.
// console.log(sumAll(10,20,30,40,10));






// ------------------------------------------------





// Window Object



// let val;
// var a = 10;
// function abc(){
//    return 0;
// };

// val = window;

// alert
// alert('Merhaba');

// prompt
// var val = prompt('bir sayı giriniz ');  

// confirm
// val = confirm('emin misiniz ?');

// if(val){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// scroll
// val = window.scrollX;
// val = window.scrollY;

// location

// val = window.location;
// val = window.location.href;
// val = window.location.hostname;
// val = window.location.host;
// val = window.location.protocol;
// val = window.location.search;

// window.location.href='http://sadikturan.com';
// window.location.reload();

// console.log(val);








// ------------------------------------------------




// Scopes

// ** Global Scopes
var name = 'Tolga';
var age = 26;

function logName(){
    var name = 'Tunay';
    var age = '30';
    console.log('function scope',name,age);
}


if(true){
    var age = 30;
    console.log('block scope',name,age);
}

console.log(age);

logName();
console.log(name);


// ** Local Scopes

// Fonksiyonlar kendi scope 'larını oluşturur.
// **Block'lar yeni scope oluşturmaz.
// ES6 ile gelen let ve const block scope oluşturur.

console.log('*********************');

if(true){
    var model = 'Hyundai';
    let year = 2017;
    const color = 'white';
    console.log('block scope',model,year,color);
}
console.log(model);
//console.log(color);

var i = 1;

for(let i=0; i<10;i++){
    console.log('i',i);
}

console.log(i);





