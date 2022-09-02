// 1 - Tolga ve Tunay'ın boy ve kg bilgilerini alın.

let tolgas;
let tunays;

const tolgak = 93;
const tolgab  = 1.81;
const tunayk = 80;
const tunayb  = 1.76;



// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.

// ** Formül = Kişinin Kilosu / Boy Uzunluğunun Karesi

tolgas=tolgak/(tolgab*tolgab);

tunays=tunayk/(tunayb*tunayb);

console.log(tolgas.toFixed(2));
console.log(tunays.toFixed(2));

// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.




// 4 - Aşağıdaki tabloya göre tolgahan ve tunay hangi gruba giriyor.


let tolgaZayif = (tolgas>=0) && (tolgas<=18.4);
let tolgaNormal = (tolgas>=18.5) && (tolgas<=24.9);
let tolgaFazla = (tolgas>=25) && (tolgas<=29.9);
let tolgaObez = (tolgas>=30) && (tolgas<=34.9);

let tunayZayif = (tolgas>=0) && (tolgas<=18.4);
let tunayNormal = (tolgas>=18.5) && (tolgas<=24.9);
let tunayFazla = (tolgas>=25) && (tolgas<=29.9);
let tunayObez = (tolgas>=30) && (tolgas<=34.9);

console.log("Tolga Zayıf = "+tolgaZayif);
console.log("Tolga Normal Kilolu = "+tolgaNormal);
console.log("Tolga Fazla Kilolu = "+tolgaFazla);
console.log("Tolga Obez = "+tolgaObez);

console.log("Tunay Zayıf = "+tunayZayif);
console.log("Tunay Normal Kilolu = "+tunayNormal);
console.log("Tunay Fazla Kilolu = "+tunayFazla);
console.log("Tunay Obez = "+tunayObez);


// 0 - 18,4 : Zayıf

// 18,5 - 24,9 : Normal

// 25,0 - 29,9 : Fazla Kilolu

// 30,0 - 34,9 : Şişman
