var oyunlar = [
    {
        isim : "Counter-Strike Global Offansive",

        img : "img-deneme/csgo.jpg",

        linkisim : "Counter-Strike",

        link : "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
    }
    ,
    {
        isim : "Dota 2",

        linkisim : "Dota 2",

        img : "img-deneme/dota.jpg",

        link : "https://store.steampowered.com/app/570/Dota_2/"
    }
    ,
    {
        isim : "Grand Thief Auto 5",

        linkisim : "Grand Thief Auto 5",

        img : "img-deneme/gta.jpg",

        link : "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"
    }
    ,
    {
        isim : "Red Dead Redemption 2",

        linkisim : "Red Dead Redemption 2",

        img : "img-deneme/rdr2.jpg",

        link : "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
    }
    
];

var index = 2;

document.querySelector(".card-title").textContent = oyunlar[index].isim ;

document.querySelector(".card-link").setAttribute("href",oyunlar[index].link);

document.querySelector(".card-link").textContent = oyunlar[index].linkisim;

document.querySelector(".card-img-top").setAttribute("src",oyunlar[index].img);