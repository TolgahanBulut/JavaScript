// Uygulama : Fonksiyonlar


var hesapA = {
    isim : "Tolga Bulut",
    hesapNo : "12345678",
    bakiye : 2000,
    ekhesap : 1000,
}

var hesapB = {
    isim : "Tunay Bulut",
    hesapNo : "12345679",
    bakiye : 3000,
    ekhesap : 2000,
}

function paracek(hesap,miktar){
    console.log(`Merhaba ${hesap.isim}`);
    if(hesap.bakiye>=miktar){
        hesap.bakiye = hesap.bakiye-miktar;
        console.log("Paranızı Alabilirsiniz")
        
    }else {
        var toplam = hesap.bakiye + hesap.ekhesap;
        if(toplam>=miktar){
            if(confirm("Ek hesap Kullanmak İstiyor musunuz")){
                console.log("Paranızı Alabilirsiniz")
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0;
                hesap.ekhesap = hesap.ekhesap - ekhesap
            }else {
                console.log(`${hesap.hesapNo} adlı hesabınızda ${miktar} bakiye bulunmaktadır.`)

            }
        }else{
            console.log("Bakiyeniz Yetersiz.")
        }
    }

}

paracek(hesapA,2000);
paracek(hesapA,1000);
// paracek(hesapB,2000);
