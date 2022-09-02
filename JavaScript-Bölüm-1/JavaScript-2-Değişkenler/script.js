/*

// Ders : 2 - Değişkenler

var age;
console.log(age) // undefined

age = 20;
console.log(age) // 20

var fullname = 'Tolgahan Bulut';
console.log(fullname) // Tolgahan Bulut

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas; => hatalı
    var yas1; => geçerli
    var _yas; => geçerli
    
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi değişken ismi olamaz.

 ** Büyük küçük harf duyarlılığı vardır.

    var firstName = 'Tolga';
    var FirstName = 'Tolgahan';
    
    Farklı değişken isimleridir.

 ** Değişken isimlerinde türkçe karakter kullanmamalıyız. 



// var let const 

// var ve let aynı kullanılır fakat const ile atarsan bi daha değişmez örn = 

var email="tolga@gmail.com"
console.log(email)  // tolga@gmail.com gözükür

email="bulut@gmail.com"
console.log (email)  // bulut@gmail.com gözükür

// FAKAT 

const email="tolga@gmail.com"
console.log(email)  // tolga@gmail.com gözükür

email="bulut@gmail.com"
console.log (email)  // Hata verir




----------------------------------------------------------------------






// Ders : 3 ---- DEĞİŞKEN TÜRLERİ ------

// Primitive Types

   // String

   let firstname = "tolga"

   // Number

   let age = 25

   let money = 100.5

   // Boolean  

   let isActive = true

   // Null -> Object olarak gözükür fakat primitivedir.

   let job = null

   // Undifined -> let "=" koymadan bitirince undifined olur

   let car



// Reference Types - Object

   // Array

   let names = ['Tolga','Tunay','Bulut'];

   // Object

   let address = {
      city:"Edirne",
      country:"Türkiye"
   }

   // Function

   var calculateAge = function() {
      return 0;
   }


   console.log(typeof calculateAge)




   ------------------------------------------------------------------
   */


   // Ders : 4 - TÜR DÖNÜŞÜMLERİ 


   let val;

   // Number to string 
   val = String(10);

   // Bool to string
   val = String(true);

   // Date to string

   val = String(new Date());

   // Array to string // Array dizi demek.

   val = String([1,2,3,4]);

   // toString()

   val = (10).toString();
   val = (false).toString();

   // String to number

   val = Number('10');  // toFixed'ta 10 olarak gözükür fakat toFixed(2) olursa 10.00 toFixed(3) olursa 10.000 olarak gözükür.
   val = Number(true); // toFixed'ta 1 olarak gözükür.
   val = Number(false); // toFixed'ta 0 olarak gözükür.
   val = Number(null); // toFixed'ta 0 olarak gözükür.
   val = Number('a'); // toFixed'ta NaN(Not An Number) olarak gözükür. // Yani sayısal bir değere karşılık gelmiyor demek
   val = Number([1,2,3,4]) // toFixed'ta NaN olarak gözükür.

   // parseInt  // İnt tam sayı kısmını gösterir.
   // parseFloat // Küsüratıda gösterir.

   val = parseInt("10"); // toFixed'ta 10 olarak gözükür.
   val = parseInt("10.5"); // toFixed'ta 10 olarak gözükür.
   val = parseFloat('10.5'); // toFixed(2)'ta 10.50 olarak gözükür. toFixed()'ta 11 olarak gözükür.


   console.log(val);
   console.log(typeof val);
   // console.log(val.length); Bu sadece Stringte çalışır
   console.log(val.toFixed(2)) // Bu number için kullanılır



