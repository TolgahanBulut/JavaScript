// Uygulama : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
let marka = ["Bmw","Mercedes","Opel","Mazda"];
console.log(marka);


// Dizi kaç elemanlıdır ?
console.log(marka.length);

// Dizinin ilk ve son elemanı nedir ?
console.log(marka[0]);
console.log(marka[3]);


// "Renault" değerini dizinin sonuna ekleyin.

marka.push("Renault");

// "Toyota" değerini dizinin başına ekleyin.
marka.unshift("Toyota")

// "Renault" değerini siliniz.
marka.pop();


// "Toyota" değerini siliniz.
marka.shift();



// Dizi elemanlarını ters çevirin
marka.reverse();

// Dizi elemanlarını alfabetik olarak sıralayın.
marka.sort();

// [1,2,5,80] dizisini sıralayın.
var arry2 = [1,2,5,80];



// "Opel" değeri dizinin bir elemanımıdır ?

console.log(marka.indexOf("Opel"));

console.log(marka);

var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.
str = str.split(",")

console.log(str)


// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
let arry3 = marka.concat(str);

console.log(arry3);

// Oluşturulan diziden son 2 elemanı siliniz.

arry3.pop();
arry3.splice(4,2);

console.log(arry3);
/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

var studentA = ["Yiğit","Bilgi",2010];
var studentB = ["Sena","Turan",1999];
var studentC = ["Ahmet","Turan",1999];

console.log(studentA);
console.log(studentB);
console.log(studentC);


var student = [studentA,studentB,studentC];

console.log(student);


console.log(student[0][0]);
console.log(student[0][1]);
console.log(student[0][2]);

console.log(student[1][0]);
console.log(student[1][1]);
console.log(student[1][2]);

console.log(student[2][0]);
console.log(student[2][1]);
console.log(student[2][2]);