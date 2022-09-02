// Event Listeners

/*

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");


// İlk olarak seçim yapılır.Sonra queryselector ile atama yapılır. bu atanan değere addEventListener ile yapılıcak işlem seçilir. Parantez içerisinde ilk olarak işlem yazılır.Örn:click,mouseover vs. Sonra virgül konur ve ne yapılacaksa function olarak yapılır.

// btn.addEventListener("click",function(){
//     console.log("btn clicked")
// })

// Dışarıdan fonksiyon yazıpta atanabilir.Avantajı farklı yerlerde kullanımı kolaylaştırır. Örn :

//  function btnClick(){
//      console.log("btn clicked");
// }


// btn.addEventListener("click",btnClick);
// btn2.addEventListener("click",btnClick);

// Bir butona 2 function atanabilir.Örn:

// function btnClick2(){
//     console.log("btn 2 clicked");
// }

// btn.addEventListener("click",btnClick2);
// btn.addEventListener("click",btnClick);




// Event gerçekleştiğinde a'daki href attributesinden dolayı sayfayı refleshler ve scroll bar yukarıya çıkar.Bunun önüne gitmek için functionun parantezine bir harf yazmak. Örn: e

// Ve fucntionun içine e.preventDefault() dersek bu olayın yani sayfanın reflesh olmasının önüne geçmiş oluruz.

// btn.addEventListener("click",function(e){
//         console.log("btn clicked");

//         let val;

//         val = e;

//         val = e.target;
//         val = e.target.id;
//         val = e.type;
//         val = e.target.classList;
        

//         console.log(val);

//         e.preventDefault();

//  })








// ************************************************















// Mouse Events-----------------------------------

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click 
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// double click
// btn.addEventListener('dblclick',eventHandler);

//mouse down  mouse bastığında
// btn.addEventListener('mousedown',eventHandler);
// //mouse up  mouseye bastıktan sonra bırakınca
// btn.addEventListener('mouseup',eventHandler);

// // mouseenter Mouse alana girdiğinde
// ul.addEventListener('mouseenter',eventHandler);
// // mouseleave Mouse alandan çıktığında
// ul.addEventListener('mouseleave',eventHandler);

// // mouseover  Mouse üstüne geldiğinde
// ul.addEventListener('mouseover',eventHandler);
// // mouseout  Mouse üstünden çıktığında
// ul.addEventListener('mouseout',eventHandler);

// mouse move   Mouse her hareket ettiğinde
const h5=document.querySelector('h5');
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;

}









// -----------------------------------------------













// Keyboard Events

const input = document.querySelector('#txtTaskName');
const form = document.querySelector('form');
const select = document.querySelector('#select');

// input.addEventListener('keydown',eventHandler);
// Klavyede herhangi bir tuşa basınca

// input.addEventListener('keyup',eventHandler);
// Klavyede herhangi bir tuştan eli kaldırınca

// input.addEventListener('keypress',eventHandler);
// Klavyede herhangi bir tuşa basıldığın anda

// input.addEventListener('focus',eventHandler);
// Mouse ile yazılacak yere tıklandığı anda

// input.addEventListener('blur',eventHandler);
// Mouse ile dışarı çıkıldığı zaman.


// input.addEventListener('cut',eventHandler);
// Alandaki bir değeri ctrl+x ile kesince gerçekleşir


// input.addEventListener('paste',eventHandler);
// Alandaki bir değeri ctrl+v ile yapıştırınca gerçekleşir

// input.addEventListener('select',eventHandler);
//Yazılan textin her hangi bi yerinden seçilince(sol tıka basılarak sürüklenince).

//form.addEventListener('submit',eventHandler);
//buttonu submit ile değiştirilir.



// select.addEventListener('change',eventHandler);
// Select kutusundan değer seçilip değiştirildiği zaman.

 function eventHandler(e){
        console.log('event type '+ e.type);

     // console.log('key code :'+e.keyCode);
     // key code basılan tuşun klavyedeki kodunu gösterir.

        console.log('value :'+e.target.value);
        // Kullanıcının girdiği değer gösterilir.

     // e.target.style.backgroundColor='yellow';
     // Focus olunduğu anda böyle kullanılır.

     e.preventDefault();
 }












 //------------------------------------------------
*/
















// Event Bubling
 
// İçten dışarıya doğru aşağıdaki gibi olan olaylara bubling deniyor.
// Aşağıda kodun iç tarafındaki input vs alınıp üzerine form daha üstü card-body üstü card gibi gidenlerde tıkladığın kısımın hangi kodun içerisine girdiğini yazdırıyor.

// Eğer sadece en küçük satırını yazsın istiyorsak hepsini içerisine function(e) ekleyip içerisine e.stopPropagation() eklememiz gerekiyor.


const input = document.querySelector("#txtTaskName");
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// input.addEventListener("click",function(e){
//     console.log("input");
//     e.stopPropagation();

// })

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();

// })

// cardBody.addEventListener("click",function(e){
//     console.log("card body");
//     e.stopPropagation();
// })

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();

// })

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// })





// Event Capturing

// Bunda ise en yüksekten küçüğe doğru gelir.Tek farkı addEventListerner("","",true) üçüncü parametresine true yazmak.

// input.addEventListener("click",function(e){
//     console.log("input");
//     e.stopPropagation();

// },true)

// form.addEventListener("click",function(e){
//     console.log("form");
//     e.stopPropagation();

// },true)

// cardBody.addEventListener("click",function(e){
//     console.log("card body");
//     e.stopPropagation();
// },true)

// card.addEventListener("click",function(e){
//     console.log("card");
//     e.stopPropagation();

// },true)

// container.addEventListener("click",function(e){
//     console.log("container");
//     e.stopPropagation();
// },true)



// const deleteItems = document.querySelectorAll(".fa-times");
// // Bütün fa-times classlarını seçmesi için querySelectorAll eklememiz gerekir. All yazmazsak çalışmaz.

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target);
//     })
    
// });





// ilk olarak ul'yi tanımla. Daha sonra addEventListener ile click(veya başka biri) fonsiyonu oluştur.İçerisine eğer classı icon olana tıklanırsa yazdır ekle.+ .parentElement ekleyerek parenti olan kısmı yazdır(Aşağıda iconun parenti a) + .parentElement ekleyerek parenti olan kısmı yazdır(Aşağıda a'nın parenti li).Silmek istersen .remove() ekle. 


const ul = document.querySelector("ul");

ul.addEventListener("click",function(e){
    if(e.target.className === "fas fa-times"){
        console.log(e.target.parentElement.parentElement.remove());
    }
})