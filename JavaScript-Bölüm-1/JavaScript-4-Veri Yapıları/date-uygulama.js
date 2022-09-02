// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
let dt = new Date();

console.log(dt);
console.log(dt.getFullYear())
console.log(dt.getMonth())
console.log(dt.getDate())


// ** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dtA = new Date("4/5/1996 15:15:28")
var dtB = new Date(1996,3,5,15,15,28,39)

console.log(dtA);
console.log(dtB);


// ** 1/1/1990 tarihinden bir gün öncesini gösteriniz.

var dtC = new Date("1/1/1990");

var birgun = (dtC.getDate());

dtC.setDate(birgun-1)
console.log(dtC)

// İki tarih arasındaki geçen zamanı bulunuz.

// Bu işlemde ilk milisaniyesi bulunur ordan 1000e bölerek saniye bulunur. 60'a bölerek dakika bulunur. 60'a bölerek saat bulunur.24'e bölerek gün bulunur.

var start = new Date("1/1/1990");
var end = new Date("1/1/1991");

var milisecond = end - start 
var saniye = milisecond/1000;
var dakika = saniye/60;
var saat = dakika/60;
var gun = saat/24

console.log(start)
console.log(milisecond)
console.log(saniye)
console.log(dakika)
console.log(saat)
console.log(gun)


// Her yıl mayıs ayının 2.haftası kutlanan anneler günü 2023 yılında ne zaman kutlanacaktır ?

var annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2022);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

while(annelerGunu.getDay() !=0){
    annelerGunu.setDate(annelerGunu.getDate()+1)
}
annelerGunu.setDate(annelerGunu.getDate()+7)

console.log(annelerGunu);






// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date("4/5/1996"); 
var aradakifark = Date.now() - birthday.getTime(); // Bugünden doğum tarihi arasındaki farkı ms cinsinden buluruz.
var tarihfark = new Date(aradakifark); // Aradaki farkı ms cinsinden bulduğumuz için onu tarihe çeviririz.

console.log(birthday.getTime()) // YUKARIDAKİ girilen doğum tarihini 1970'ten 96'ya kadar süreçteki geçen msyi gösterir.
console.log(tarihfark.getFullYear() - 1970) // Bulunan tarih aslından 1970'e eklendiği için 1970'i çıkarır yaşı buluruz.



