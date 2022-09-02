// // LOCAL STORAGE
/*

// Localde bilgileri sayfayı kapatıp açsanız bile arkada tutar fakat session tutmaz.
let val;

// set item  item atar

const firsName = localStorage.setItem("firstName","tolga");
const lastName = localStorage.setItem("lastName","bulut");
let hobies = ["sinema","araba","seyehat"];

// get item item getirir

val = localStorage.getItem("firstName");
val = localStorage.getItem("lastName");

// removeitem item siler

// val = localStorage.removeItem("firstName");
// val = localStorage.removeItem("lastName");

// clear bütün elemanları localstorage'den siler.

// localStorage.clear();


// set array to storage
// JSON.stringify eklenenin dizi şeklinde eklenmesi için eklenir.

localStorage.setItem("hobies",JSON.stringify(hobies));


// JSON.parse() ise içerideki diziyi dışarıya dizi olarak çağırabilmek için kullanılır.
// val = JSON.parse(localStorage.getItem("hobies"))


console.log(val);
console.log(localStorage);


//  // SESSION STORAGE

//  const city = sessionStorage.setItem("city","edirne");
//  const country = sessionStorage.setItem("country","Türkiye");

//  console.log(sessionStorage);


*/

const hobies = ["sinema","seyehat","yazilim"];



console.log(hobies)

val = localStorage.setItem("hobies",JSON.stringify(hobies));

console.log(val)
console.log(hobies)

