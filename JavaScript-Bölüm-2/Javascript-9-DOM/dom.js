// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute("src");

// console.log(val);

/*




//-------------------------------------------------






// ***** Single Elements


// let val;

// val = document.getElementById("header");
// val = document.getElementById("header").id;
// val = document.getElementById("header").className;


// val = document.getElementById("header");
// // val = val.id;
// // val = val.className;

// val.style.fontSize="45px";
// val.style.color="red";
// val.style.fontWeight="bold";
// // val.style.display="none"

// document.getElementById("header").innerText="<b>my Todo App </b>";
// document.getElementById("header").innerHTML="<b>my Todo App</b>"; 

// //InnerText içerisinde normal etiket olarak alglanır.İşlevinin yerine getirilmesi isteniyorsa innerHTML ile kullanılmalı.

// console.log(val);



// querySelector()  içerisine id ise # class ise . ile ulaşılıyor.diğerleri için isi örneğin("div"),("li"),("p") olarak ulaşılıyor.Fakat ilk bulduğunu değiştirir diğerlerini değiştirmez.
//("li:last-child") yapılırsa listenin son elemanına etki eder.

// document.querySelector()

console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('div'));

document.querySelector('li').style.color='red';
document.querySelector('li:last-child').style.color='blue';
document.querySelector('li:nth-child(2)').style.color='yellow';
document.querySelector('li:nth-child(3)').textContent='task item';
document.querySelector('li:nth-child(4)').textContent='task item';

// document.querySelector('li').className='list-group-item list-group-item-primary';

document.querySelector('li').classList.add('active'); 

// className dersen var olan class'ları siler classList.add dersen yeni bir class ekler.








//------------------------------------------------








// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements



// class name
// document.getElementsByClassName()


let val;

//val = document.getElementsByClassName('list-group-item');
// val = document.getElementsByClassName('list-group-item')[0];

// val = document.getElementsByClassName('list-group-item')[2];

// val = val[2];

// val[1].style.color='blue';
// val[1].style.fontSize='25px';
// val[2].textContent='new item';

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }

// FOR DÖNGÜSÜ İLE VAL'in tüm değerlerine ulaşır ve değiştirilen herşeyi hepsine uygular.





// document.getElementsByTagName()


// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list').getElementsByTagName('a');



// document.querySelectorAll()


// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent= `${index} - hello`;
// });

// forEach her elemanı teker teker yazdırmaya yarar.

val = document.querySelectorAll('li:nth-child(even)');

val.forEach(function(item){
   item.style.background='#ccc';
});

console.log(val);

*/

// ÖNEMLİ NOT -------------------------------

/*
   Eğer biz .getElements(ByTagName),(ById) vs. kullanırsak HtmlCollection gelir.
   Fakat .querySelector kullanırsak NodeList gelir.
   forEach NodeListte kullanılır.
















//---------------------------------------------------







let val;

let list = document.querySelector(".list-group");

val = list;

val = list.childNodes; // Burada bize NodeList gelir. Gelen NodeListteki text kodların arasındaki boşluk.
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // Text
val = list.childNodes[1].nodeType; // Element

// Nodetype numara ne anlama geldiği öğrenmek için nodetype araması yap.


// val = list.children; // Burada bize HtmlCollection gelir.

val = list.children;
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent="new item";
val = list.children[3].children;


val = list.firstChild; // ilk nodelist elemanı karşımıza gelir.
val = list.firstElementChild; // İlk htmlcollection elemanı karşımıza gelir.


val = list.lastChild;
val = list.lastElementChild;// Yukarıdakiyle aynı.

val = list.childElementCount; // Kaç elemente sahip olduğunu gösterir.

val = list.parentNode; // Üst değeri demek burada card mesela.
val = list.parentElement; // Direkt element olma koşulunu sağlar.

val = list.parentElement.parentElement;// Üst elemanın üst elemanına gider. Burada container oluyor.

val = list.children[0].nextElementSibling; // Element kardeşi yani aynı hizadaki element gelir.
val = list.children[0].nextSibling; // Burada ise NodeListten bir sonraki eleman gelir.

val = list.children[1].previousElementSibling; // Element kardeşi yani aynı hizadaki bir öncekielement gelir.
val = list.children[1].previousSibling; // Burada ise NodeListten bir önceki eleman gelir.

for (let i=0; i<list.children.length;i++){
   console.log(list.children[i]); // Elementleri yazdırır.
}

for (let i=0; i<list.childNodes.length;i++){
   console.log(list.childNodes[i]); // Elementler ve textleri yazdırır.
}

for (let i=0; i<list.childNodes.length;i++){
   if (list.childNodes[i].nodeType===1){  
         console.log(list.childNodes[i]);  //  Element yazar ekrana.
                                          // Eğer 3 olsa text yazardı.
   }
}


console.log(val);











// -----------------------------------------------











// ---------------------CREATıng ELEMENTS

// Create elemnt ile ilk etliket oluşturuyoruz daha sonra classlarını ya da title falan attiribute ekliyoruz.

// text node için textnode ekleniyor.A etiketi oluşturuluyor classı oluşturuluyor ve appendchild ile li'ye a yı ekliyoruz.En son ise liyi lu'ya appendchild ile ekliyoruz.


// // Create element

// const li = document.createElement("li");

// // add class

// li.className="list-group-item list-group-item-secondary";

// // add attribute

// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// // Textnode

// const text = document.createTextNode("new item");
// li.appendChild(text);

// // a elementi oluşturma

// const a = document.createElement("a");

// a.setAttribute("href","#");

// a.className="delete-item float-right";

// a.innerHTML='<i class="fas fa-times"></i>';

// // append a to li

// li.appendChild(a);

// //append li to ul

// document.querySelector("#task-list").appendChild(li)

// console.log(li);




const li = document.createElement("li");

li.className="list-group-item list-group-item-warning";

li.setAttribute("title","benimki");
li.setAttribute("data-id","5");

const text = document.createTextNode("my item");

li.appendChild(text);

const a = document.createElement("a");

a.className="delete-item float-right";
a.setAttribute("href","#");
a.innerHTML='<i class="fas fa-times"></i>';

li.appendChild(a);

document.querySelector("#task-list").appendChild(li);


*/




//-------------------------------------------------



// ELEMENT SİLME VE GÜNCELLEME--------------------






const taskList = document.querySelector("#task-list");



//  removing element 


// taskList.remove() ; //Listenin kendisi silinir.

// taskList.childNodes[1].remove(); // Tasklistin 1.İndexteki eleman silinir.

// taskList.children[0].remove(); // Direkt childerenları silinir.

// taskList.removeChild(taskList.children[0]); // Yukarıdaki işlemin aynısı olur.


//**removing attribute

// taskList.children[0].removeAttribute("class"); // 0.childerenin class attributesi silinir.

/* for(let i=0;i<taskList.children.length;i++){
 taskList.children[i].removeAttribute("class");}

 Bütün tasklist elemanlarının class attributesi silinir.

*/





// Replacing Elements

// const cardHeader = document.querySelector(".card-header");

// // querySelector() kullandığımız için ilk card-header classına gider.Eğer querySelectorAll() deseydik tüm card-header classlarına giderdi.

// // create element

// const h2 = document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("My task"));

// // Bu yeniyi ekleyebilmek için parent elemente gitmek gerekiyor.

// const parent = document.querySelector(".card")
// // ilk carda gitmemiz gerektiği için direkt querySelector() yazdık.

// parent.replaceChild(h2,cardHeader); // Child değiştirmeye yarar.Örneğin burada cardheader olan div yerine h2yi ekledik.

// console.log(cardHeader);








// ** Classes

let val;

link = taskList.children[0].children[0];

/*val = link.className; // Class name gösterir.
val = link.classList;  Dizi içerisinde Class listesi oluşturur.Ve bu da bize
val = link.classList[0];
val = link.classList[1];
gibi değerler getirmeyi sağlar. */

link.classList.add("new");//classListe eleman ekler.
link.classList.remove("new");//classListten eleman siler.

// Attributes

val = link.getAttribute("data-id");// Data-id attributesini yazdırır.
val = link.getAttribute("href");//Href attributesini yazdırır.
val = link.getAttribute("href","http://toglabulut.com");// Attributenin hrefinin değeri değişir.
val = link.hasAttrinute("data-val");//Attribute var ise true yok ise false yazar.(Parantez içine yazılmış olan)












console.log(taskList);


