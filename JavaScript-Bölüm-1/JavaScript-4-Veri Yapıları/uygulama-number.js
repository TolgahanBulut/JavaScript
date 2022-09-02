var num = 15.123456789;

let val;

// toplamda 3 basamaklı sayı kullan

val = num.toPrecision(3);

// ondalık kısmı 3 basamakta sınırla

val = num.toFixed(3);
// en yakın sayıya yuvarla
val = parseInt(num);

// aşağı yuvarla
val = Math.ceil(num)

// yukarı yuvarla
val = Math.floor(num)

// 1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

val = Math.min(1,2,10,56,20);
val = Math.max(1,2,10,56,20);

// sayı aralığını kullanıcının belirleyeceği rastgele bir sayı üretin.

var min = 50;
var max = 100;

console.log(Math.floor(min+Math.random()*(max-min)))


/* Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım.
   ** Brüt maaş  : 3700 TL
   ** Brüt mesai : 10.3 TL
   Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ?
   Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir ?
*/



var brut = 3700;
var mesai = 10.3;

var agustos = mesai*42;

var total = brut+agustos;

var kesinti = total/100*25;

var net = total-kesinti





console.log(net.toFixed(2));
console.log(typeof val);