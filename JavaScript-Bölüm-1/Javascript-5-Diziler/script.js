let names = ["tolga","tunay","serpil","ufuk"];
let years = ["1996","1992","1970","1967"];
let mix = ["tolga", "bulut",1983,null,undefined,["spor","seyehat"]];


/*------------- GET ARRAY İTEM // Dizinin içinden item alma.--------------*/



// console.log(names[0])
// console.log(names[3])


// // Dizilerdeki elemanların isimleri 0'dan başlar. Örn yukarıda 4 elemanlı names dizisinin tolga elemanı 0 tunay 1 serpil 2 ufuk 3.




/* --------- SET ARRAY İTEM // Dizinin içindeki elemanı değiştirme.-------*/




// names[0] = "tolgahan"; // Tolga olan eleman tolgahan oldu.

// // names[5] = "bulut"; // Normalde dizi 4 karakterli fakat bunu yazdığımızda 5.elamnı boş der ve names[5] olduğu için 6'ya bulut ekler.

// names[names.length]="bulut" // Dizinin sonuna bulut elemanı ekler.





/* ---------------- ADD İTEM  // Diziye eleman ekleme. ------------------*/




// years.push(1955); // Dizinin sonuna eleman ekler
// years.unshift(1995); // Dizinin başına eleman ekler.





/* ---------------- Remove İTEM  // Diziden eleman çıkarır.---------------*/



// years.pop(); // Dizinin sonundan eleman çıkarır.
// years.shift();  // Dizinin başından eleman çıkarır.





/* -------------- indexOf  // Dizideki elemanı bulur(Numara).-------------*/
// // O eleman yoksa -1 yani yok der.




// let index = names.indexOf("ufuk");

// console.log("index = "+index);



/* ----------- Reverse  // Dizideki elemanları tersten yazar.-------------*/



// names.reverse();




/* ---------------- Sort  // Sayısal ve alfabetik sıralar.----------------*/



// years.sort();



/* ------------------- Concat  // Dizileri birleştirir.-------------------*/



// let val = years.concat(names);

// console.log(val);




/* ------------------- Splice  //Eleman silme ve ekleme-------------------

names.splice(0,2,"tolgahan") // splice(nerden başlayacağı , kaç tane sileceği , ne ekleyeceği)

*/

function over18(year){
    let age = 2018 - year;
    return age>=18;

}

// find 

// let val = years.find(over18);


// filter

let val = years.filter(over18);

console.log(val);





console.log(names);
console.log(names.length);
console.log(typeof names);

console.log(years)
console.log(mix)