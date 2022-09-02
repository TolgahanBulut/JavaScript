/*
// Javascript ile eleman ekleme

// İlk olarak form , input , ve task-list'i çağırcaksın.

// eventListener functionu oluştururuz.

// Ardından eventListeners'i tanımlardan sonra çağırıcaksın çünkü uygulama çalıştığı anda yüklenmesi için.

// eventListenir functionu içerisine form.addEventListener("submit",addNewTask) ekleriz. yani form için eventlistener yaparız ve submit olduğunda addNewTask functionunu çağırır.

// addNewItem functionun içerisinde eklenecek elemanı oluştururuz. Class'ını veririz varsa başka attributelerini veririz. ve gerekli yere appendChild ile ekleriz.

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addNewItem);

}

function addNewItem(){

    if(input.value === ""){
        alert ("İtem gir");
    }

    // create li
    const li =document.createElement("li");

    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(input.value));


    // create a

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML= '<i class="fas fa-times"></i>';


    // add a to li

    li.appendChild(a);

    // add li tu ul 

    taskList.appendChild(li);




    e.preventDefault();

}









// ------------------------------------------------- To Do Listeden Elemena Çıkarma ---------------------------






// Javascript ile eleman Çıkarma



const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners(){

    // eleman ekleme

    form.addEventListener("submit",addNewItem);

    // eleman çıkarma

    taskList.addEventListener("click",deleteItem);

    // deleteAll items

    btnDeleteAll.addEventListener("click",deleteAllItem);

}

// add new item

function addNewItem(){

    if(input.value === ""){
        alert ("İtem gir");
    }

    // create li
    const li =document.createElement("li");

    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(input.value));


    // create a

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML= '<i class="fas fa-times"></i>';


    // add a to li

    li.appendChild(a);

    // add li tu ul 

    taskList.appendChild(li);

    e.preventDefault();

}


// Delete an item

// ilk önce eventListeners'te fonksiyon oluşturulur.Örn : taskList.addEventListener("click",deleteItem) yani mouse ile click yapınca deleteItem functionunu çağırıyoruz.

// deleteItem fonksiyonunu function deleteItem() olarak oluşturuyoruz ve içerisine e veya daha başka bir parametre atıyoruz. Fonksiyon içerisinde eğer e.target'ı(yukarıda dediğimiz click işlemi gibi yani mouse tıkladığımız kısım) bizim istediğimiz yere eşit ise örn: li elemanı silinecek ise icona tıkladığımız için iconun bir üstü a elemanına geçmek için parentElement diyoruz. a 'dan li'ye geçmek için bir kez daha yapıyoruz.Ardından .remove(); ekliyoruz ve oluyor.Emin misiniz sorunusu sormak için ise if(confirm("")) sorusunun içerisine yazıyoruz. 

function deleteItem(e){

    if(confirm("Are you sure ?")){

        if (e.target.className === "fas fa-times") {
            e.target.parentElement.parentElement.remove();
        }
        
    }

    e.preventDefault();

}

// Delete all items

// ilk önce eventListeners'te fonksiyon oluşturulur.Örn : btnDeleteAll.addEventListener("click",deleteAllItem) yani mouse ile click yapınca deleteAllItem functionunu çağırıyoruz.

// deleteAllItem fonksiyonunu function deleteItem() olarak oluşturuyoruz ve içerisine e veya daha başka bir parametre atıyoruz. Fonksiyon içerisinde silmek istediğimiz bölümü alıyoruz örn. taskList. ve bu tasklistin her bir elemanına ulaşmak için forEach kullanmamız gerekiyor bunun için childNodes ile çağırıyoruz. forEach içerisine function(item) olarak parametre atıyoruz. Eğer item'ın nodeType'ı 1'e eşit ise(yani elemente çünkü nodelist olarak geldiğinde her bir elementten sonra text(nodeType = 3) kısmıda olduğu için elementler silinsin istiyoruz.) item.remove(); ile sil yazıyoruz. Emin misiniz sorunusu sormak için ise if(confirm("")) sorusunun içerisine yazıyoruz.

// İkinci seçenek ise etki etmek istediğimiz yeri çağırıp innerHTML = ""; ile içerisi boşa çeviriyoruz.

function deleteAllItem(e){

    if(confirm("Are you sure ?")){

        taskList.childNodes.forEach(function(item)
        {
            if (item.nodeType === 1){
                item.remove();
            }
        })
    }

    // taskList.innerHTML = "";

    

    e.preventDefault();
}


























// ----------------------------------------------Diziden sayfaya aktarma -------------------------------------


const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
const items = ['item 1', 'item 2', 'item 3', 'item 4'];

// load items

loadItems();

// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}

function loadItems() {
    items.forEach(function (item) {
        createItem(item);
    })
}

function createItem(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }

    // create item
    createItem(input.value);

    // clear input
    input.value = '';

    e.preventDefault();

}

// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {

    if (confirm('are you sure ?')) {
        // taskList.innerHTML='';
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        });
    }
    e.preventDefault();
}





*/









// -------------------------------------LocalStorage-------------------------------------------------------



// UI vars 

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items; // buraya eklensin diye açıyoruz.

// load items
loadItems();

// call event listeners
eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    // delete an item
    taskList.addEventListener('click', deleteItem);

    // delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems);
}



// items'ı localstorageden alıyoruz.

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        createItem(item);
    });
}

// get items from Local Storage

// eğer get items'tan bize değer gelmezse yani null ise items'ı diziye çevirelim. Eğer içeride eleman varsa JSON.parse ile dönüştürelim ve LS'den get item ile items'ı alalım. ve en son olarak return items ile döndürücez.
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}



// set item to Local Storage

// item oluşturmak için setItemToLS fonksiyonu açıyoruz ve dışarıdan bir text almasını istiyoruz. İlk başta getItemsFromLs() ile listeyi alıyoruz ve push ile itemı yukarıdaki listeye ekliyoruz. JSON.stringify diyoruz çünkü biz dizinin içerisine string olarak eklesin istiyoruz köşeli parantezin içine gelmesi için.

function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));
}

// delete item from LS

// Silmek istediğimiz text'i alıyoruz. Ve silinmek istenen item LS'den alınıcak. Ardından alınan elemanları döngü oluşturarak fonksiyon ile alalım. forEach(function(item,index)) içerideki item itemstan gelen elemanı temsil ediyor index ise hangi indexteki eleman olduğunu tespit ediyor. eğer gönderdiğimiz item ile uyuşan varsa splice metodu ile eleman silinir.


function deleteItemFromLS(text){
    items = getItemsFromLS();
    items.forEach(function(item,index){
        if(item === text){
            items.splice(index,1);   
        }
    });
    // Eleman silindiği için elemanı LS'den siler.
    localStorage.setItem('items',JSON.stringify(items));
}


function createItem(text) {
    // create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    // add a to li
    li.appendChild(a);

    // add li to ul
    taskList.appendChild(li);

}

// add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    }

    // create item
    createItem(input.value);

    // save to LS
    // Elemanı LocalStorageye ekler. Sayfa reflesh edilse bile orada olur eleman.
    setItemToLS(input.value);

    // clear input
    input.value = '';

    e.preventDefault();

}

// delete an item
function deleteItem(e) {
    if (e.target.className === 'fas fa-times') {
        if (confirm('are you sure ?')) {
            e.target.parentElement.parentElement.remove();

            // delete item from LS
            //deleteItemFromLS fonksiyonunu yukarıda yaptık.
            // Silmek istediğimiz elemanın textini göndermemiz gerekiyor.Target burada icon oluyor parenti a bir üst parenti ise li oluyor ve li elemanın içerisindeki textContent'i seçeriz.
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }
    e.preventDefault();
}

// delete all items
function deleteAllItems(e) {

    if (confirm('are you sure ?')) {
        // taskList.innerHTML='';

        // while döngüsünün tasklistinin 1.elemanı olduğu sürece bu döngü dönecek yan null olana kalan eleman kalmayana kadar dönücek. ve tasklist.removeChild ile silinicek kısmı tasklistin 1.elamanını sil dediğimizde eleman kalmayana dek döneceği için komple silicek.
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }

        localStorage.clear();
    }
    e.preventDefault();
}
