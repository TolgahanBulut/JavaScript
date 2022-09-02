var aracBilgisi = [
    {
        id : "bmw116d_1234",
        model : "116d",
        yil : 2015,
        renk : "beyaz",
        serviskayitlari :[
        {
            id : "bmw116d_1234_1",
            tarih : "30.01.2016",
            km : 13000,
            toplam_ucret : 900,
            servisdetay : [
                {id : "bmw116d_1234_1_1",islem : "yağ değişimi",islem_ucret : 300},
                {id : "bmw116d_1234_1_2",islem : "filtre değişimi",islem_ucret : 300},
                {id : "bmw116d_1234_1_3",islem : "fren hidroliği",islem_ucret : 300}
                ]
        },
        {
            id : "bmw116d_1234_2",
            tarih : "10.01.2017",
            km : 28000,
            toplam_ucret : 1800,
            servisdetay : [
                {id : "bmw116d_1234_2_1",islem : "yağ değişimi",islem_ucret : 350},
                {id : "bmw116d_1234_2_2",islem : "filtre değişimi",islem_ucret : 350},
                {id : "bmw116d_1234_2_3",islem : "fren hidroliği",islem_ucret : 300},
                {id : "bmw116d_1234_2_4",islem : "balata değişimi",islem_ucret : 800}
                ]
        }
        ]
    
    },
    {
        id : "bmw118i_1234",
        model : "118i",
        yil : 2015,
        renk : "Mavi",
        serviskayitlari :[
        {
            id : "bmw118i_1234_1",
            tarih : "30.01.2016",
            km : 13000,
            toplam_ucret : 900,
            servisdetay : [
                {id : "bmw118i_1234_1_1",islem : "yağ değişimi",islem_ucret : 300},
                {id : "bmw118i_1234_1_2",islem : "filtre değişimi",islem_ucret : 300},
                {id : "bmw118i_1234_1_3",islem : "fren hidroliği",islem_ucret : 300}
                ]
        },
        {
            id : "bmw118i_1234_2",
            tarih : "10.01.2017",
            km : 28000,
            toplam_ucret : 1800,
            servisdetay : [
                {id : "bmw118i_1234_2_1",islem : "yağ değişimi",islem_ucret : 350},
                {id : "bmw118i_1234_2_2",islem : "filtre değişimi",islem_ucret : 350},
                {id : "bmw118i_1234_2_3",islem : "fren hidroliği",islem_ucret : 300},
                {id : "bmw118i_1234_2_4",islem : "balata değişimi",islem_ucret : 800}
                ]
        }
        ]
    
    },
    {
        id : "i20_1234",
        model : "i20",
        yil : 2017,
        renk : "beyaz",
        serviskayitlari :[
        {
            id : "i20_1234_1",
            tarih : "30.01.2018",
            km : 13000,
            toplam_ucret : 900,
            servisdetay : [
                {id : "i20_1234_1_1",islem : "yağ değişimi",islem_ucret : 300},
                {id : "i20_1234_1_2",islem : "filtre değişimi",islem_ucret : 300},
                {id : "i20_1234_1_3",islem : "fren hidroliği",islem_ucret : 300}
                ]
        },
        {
            id : "i20_1234_2",
            tarih : "10.01.2019",
            km : 28000,
            toplam_ucret : 1800,
            servisdetay : [
                {id : "i20_1234_2_1",islem : "yağ değişimi",islem_ucret : 350},
                {id : "i20_1234_2_2",islem : "filtre değişimi",islem_ucret : 350},
                {id : "i20_1234_2_3",islem : "fren hidroliği",islem_ucret : 300},
                {id : "i20_1234_2_4",islem : "balata değişimi",islem_ucret : 800}
                ]
        }
        ]
    
    }
]



console.log(aracBilgisi[0]);
console.log(aracBilgisi[1]);
console.log(aracBilgisi[2]);

console.log(aracBilgisi[0].model);
console.log(aracBilgisi[0].yil);
console.log(aracBilgisi[0].serviskayitlari[1]);
console.log(aracBilgisi[0].serviskayitlari[1].km);
console.log(aracBilgisi[0].serviskayitlari[1].servisdetay);
console.log(aracBilgisi[0].serviskayitlari[1].servisdetay[1]);
console.log(aracBilgisi[0].serviskayitlari[1].servisdetay[1].islem);

