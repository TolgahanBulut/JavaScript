// Date Object

/*

let d = new Date();
let birthday = new Date(1996,3,5);


// Set Methods  Bilgileri değiştirmeye yarar

d.setFullYear(2024) // Yılı 2024 Yapar.
d.setMonth(5); // Ayı 5.Ay yapar.
d.setDate(20); // Ayın kaçıncı günü olduğunu hesaplar

// setDay yapamayız çünkü ayın date ile ayın kaçıncı günü olduğunu belirlediğimizde otomatik olarak kendisi haftanın kaçıncı günü olduğunu hesaplar.

d.setHours(10); // Saat bilgisi değişir.
d.setMinutes(30); // Dakika bilgisini değiştirir.
d.setSeconds(44); // Saniye bilgisini değiştirir.








// Get Methods


console.log(d.getDate()); // Ayın Kaçı olduğu
console.log(d.getDay()); // Haftanın kaçıncı günü olduğu 0-Pazar 1- Pazartesi ...

console.log(d.getFullYear()); // Yıl Bilgisi gelir.
console.log(d.getHours()); // Saat Bilgisi gelir.
console.log(d.getMonth()); // Yılın kaçıncı ayı olduğunu 0-Ocak 1- Şubat ....
console.log(d.getSeconds()); // Saniye bilgisi verir
console.log(d.getMinutes()); // Dakika bilgisini verir.



console.log (d.getFullYear()-birthday.getFullYear())
console.log(d.getMonth()-birthday.getMonth());
console.log(d.getDate()-birthday.getDate());

console.log(d);
console.log(typeof d);




// -----------------------------------------------------------------------





// NUMBERS 

let val;

// val = Number("10");
// val = parseInt("10"); // TAM SAYI
// val = parseFloat("10.5"); // KESIRLI SAYI
// val = parseInt("a10a"); // NaN yazar
// val = isNaN("10");  // boolean cevap verir yani true false
// val = isNaN("a10"); //     "     "     "     "   "     "


// var num = 10.12456789;
// val = num.toPrecision(8); // 8 sayı gösterir
// val = num.toFixed(2);    // .(nokta)'dan sonra 2 sayı gösterir

val = Math.PI;  // pi sayısını gösterir
val = Math.round(2.4); // 2.4 sayısını 2ye yuvarlar
val = Math.round(2.7); // 2.7yi 3e yuvarlar
val = Math.ceil(2.4);  // ceil her zaman yukarı tamamlatır.
val = Math.floor(2.8); // floor her zaman aşağı yuvarlar.
val = Math.sqrt(64); // karekökünü alır.
val = Math.pow(2,4); // 2,4 2üzeri4 demek örn. 3,6  3 üzeri 6 gibi.
val = Math.abs(-100); // Mutlak değer alır.
val = Math.min(1,2,3,4,5,8,9); // En küçük sayıyı verir.
val = Math.max(1,2,3,42,5,8,9); // En büyük sayıyı verir.
val = Math.random(); // 0 - 1 arasında rastgele sayı verir.
val = Math.random()*10; // 0 - 10 arası rastgele sayı verir. Math.Floor içine alırsak tam sayı verir.100le çarparsak 0 ile 100 arası sayı verir.+1 dersek 0 vermez. örn = val = Math.ceil(Math.random()*10+1) gibi.


console.log(val);
console.log(typeof val);


//

-----------------------------------------------------------------------------




// Strings

const firstName = 'Tolga';
const lastName = "Bulut";
let hobbies = 'seyehat spor yazılım';
const age=26;

let val;

// string concatenation  // iki değerin arasına boşluk koymak içi " "(tırnak içinde boşluk) konması gerekir.

val = firstName +" "+ lastName;
val = 'Tolga';
val +=' Bulut';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' Edirne\'de yaşıyorum.';
// ( tek tırnak içinde yazmak istersek slash ve tek tırnak koyuyoruz)

//string concat
val = firstName.concat(' ',lastName);

// string uppercase - lowercase
val = val.toUpperCase(); // Büyük harflerle yazar.
val = val.toLowerCase(); // Küçük harflerle yazar.

// string replace
val = '  '+val.replace('tolga','tunay')+'     '; // tolga'yı tunay ile değiştirir.

// trim
val = val.trim(); // Baştaki ve sondaki boşlukları siler.

// substring 
// val = val.substring(3,8); // 3 ile 8 arasındaki karakterleri yazar.

// slice
// val = val.slice(6); // 6'dan bitişe kadar yazar

//val = val.indexOf('x'); // Aranmasını istediğimiz karakterin yerini sayı olarak yazar. Olmayan karaktere -1 der.

//val = val[1]; // Kelimenin kaçıncı harfi alınmak isteniyorsa paranteze o yazılır.

//string length
//val = val.length; // Boşluklarda dahil olmak üzere kaç harf olduğunu yazar.

val =hobbies.split(' ') // Stringten boşluk karakterleri ile ayırarak dizi oluşturur.

console.log(val);
console.log(typeof val);


---------------------------------------------------------------------------


*/

// Template  Literals

const fullName = 'Tolga Bulut';
const city = 'Edirne';
const yearOfBirth = 1996;

let val;


val = 'my name is '+fullName+
      ' I\'m '+(2018-yearOfBirth)+' years old '+
      ' and I live in '+city;

val = `my name is ${fullName} I'm ${(2018-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;


// ${2018-yearOfBirth>=18} SORUSU SORULUYOR. TRUE YA DA FALSE CEVABI GELİR. TRUE İSİ İLK YAZI(over 18) FALSE İSE 2. YAZI(under 18) YAZAR OTOMATİK.
// Bu kullanıma ternary operator denir.


console.log(val);

