/*
 Demo Loops : Sayı Tahmin Oyunu

    1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
    ** puanlama yapın.
    ** kullanıcı kaç kerede bileceğini belirtebilsin.

*/

var sayi = Math.floor(Math.random()*10)+1;
var hak,can
can = Number(prompt("Kaç kerede bilirsin ?"))
hak=can;

var tahmin;
var sayac=1;

for(sayi; hak>0; hak--,sayac++){
    tahmin = Number(prompt("Bir sayı giriniz"));
    if(sayi==tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz. `)
        console.log(`Kazandığınız puan = ${100 - (100/can)*(sayac-1)}`)
        break;
    }else if(sayi<tahmin && hak>0){
        console.log("Şu kadar hakkın kaldı = "+hak);
        console.log("Aşağı");
    }else if (sayi>tahmin && hak>0){
        console.log("Şu kadar hakkın kaldı = "+hak);
        console.log("Yukarı");
    };
    if(hak==1){
        console.log("Kaybettiniz");
        break;
    };
};