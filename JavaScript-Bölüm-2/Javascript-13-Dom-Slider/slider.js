/*


// Models objesi oluşturulup içerisine bilgileri ekleriz. daha sonra index değişkeni oluştururuz. querySelector ile özelliklerini çağırır ve o index'e yönlendiririz ve böylelikle index numarası değiştiğinde diğer bilgilerde o index'e göre gelir.

var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;

document.querySelector(".card-title").textContent = models[index].name;

// card-title'da yani h5te yani başlıkta değiştiricek bir attribute olmadığı için textContent diyoruz yani yazısını değiştiriyoruz.

document.querySelector(".card-img-top").setAttribute("src",models[index].image);
// src attributesini değiştiriyoruz.

document.querySelector(".card-link").setAttribute("href",models[index].link);
// href attributesini değiştiriyoruz.















//-------------------------Butonlarla geçiş--------------








var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var sliderCount = models.length;


slideShow(index);

document.querySelector(".fa-circle-arrow-left").addEventListener("click",function(){
    index--;
    slideShow(index);
    console.log(index);
    
});

document.querySelector(".fa-circle-arrow-right").addEventListener("click",function(){
    index++;
    slideShow(index);
    console.log(index);
    
});




function slideShow(i){
    index = i;

    if(i < 0){
        index = sliderCount - 1;
    }

    if(i > 4){
        index = 0;
    }


    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);

    document.querySelector(".card-link").setAttribute("href",models[index].link);


}

document.querySelector(".card-title").textContent = models[index].name;

document.querySelector(".card-img-top").setAttribute("src",models[index].image);

document.querySelector(".card-link").setAttribute("href",models[index].link);

*/















//-------------------------Random Geçiş--------------








var models = [
    {
        name : 'Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : 'Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var sliderCount = models.length;

var settings = [{
    duration : "2000",
    random : true
}];

var interval;

function init(settings){

    setInterval(function(){
        if(asd) {

        }
    })
}


slideShow(index);

document.querySelector(".fa-circle-arrow-left").addEventListener("click",function(){
    index--;
    slideShow(index);
    console.log(index);
    
});

document.querySelector(".fa-circle-arrow-right").addEventListener("click",function(){
    index++;
    slideShow(index);
    console.log(index);
    
});




function slideShow(i){
    index = i;

    if(i < 0){
        index = sliderCount - 1;
    }

    if(i > 4){
        index = 0;
    }


    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src",models[index].image);

    document.querySelector(".card-link").setAttribute("href",models[index].link);


}

document.querySelector(".card-title").textContent = models[index].name;

document.querySelector(".card-img-top").setAttribute("src",models[index].image);

document.querySelector(".card-link").setAttribute("href",models[index].link);