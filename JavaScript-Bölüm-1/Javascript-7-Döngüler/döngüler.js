// Loops

// for loop

// for(ilk i tanımla (let i=1;)  sonra koşulu ekle (i<10;) i değişkenine döndüğü için arttır.(i++))

// for(let i =10; i<=100; i++) {
//     if(i==30){
//         console.log(i+"  Bu kadar yetmez")
//     continue;
//     }
//     if(i==60){
//         console.log(i+"  Bu kadar yetmez")
//     continue;
//     }
//     if(i==90){
//         console.log(i+"  Bu kadar yeter")
//     break;
//     }
//     console.log(i)
// }

// --------------------------------------------------


// while loop

// While için ilk tanımla (let i=0;) daha sonra while içine koşulu ekle( while(i<10) ) while sonrasında süslü parantezi aç içine istenileni yaz ve tanımlananı arttır.


// let k=1;
// while(k<5){
//     console.log(k);
//     k++;
// }

// // for (let i=0; i<10;i++){      // FOR OLAN
// //     console.log(i);
// // }


// let i=0;
// while(i<10){                  // WHİLE OLAN
//     console.log(i);
//     i++;
// }


// ----------------------------------------------------------------------


// // do-While loop   Farkı while soruyu başta soruyo burada sonda soruyor

// let i=0; 
// do{
//   console.log(i);
//   i++;
// }while(i<10)

// ----------------------------------------------------------------------

//  Tek sayıların çarpımı 


// let sonuc=1;
// for (let i=10;i>0;i--){
//     if(i%2==1){      // i%2 inin 2 modu = 1 demek
//         sonuc*=i;    // * çarpı + artı demek 
//     }
// }

// console.log(sonuc);
// console.log(1+3+5+7+9);


// for (let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         console.log(`i = ${i}  j = ${j}`);
//     }
// }




// let val='\n';  // \n alt satıra geçirir.
// for (let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//          val +='* ';  
//     }
//     val+='\n';
// }

// console.log(val);



// ---------------------------------------------------



// Loops in Array & Objects

let cars =['Bmw','Mercedes','Toyota'];
let people =[
   {firstName:'Tolga',lastName:'Han'},
   {firstName:'Tunay',lastName:'Bulut'},
   {firstName:'Ufuk',lastName:'Bulut'}
];

// Arrays

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i]);
// }

//---------------------------------------------------


// Objects
 
// for (let i=0; i<people.length;i++){
//     console.log(people[i].firstName);
// }



// ------------------------------------------------


// for-in

// for( let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }

//--------------------------------------------------


// Arrays

// for(let i in cars){
//     console.log(`index : ${i} value : ${cars[i]}`);
// }


//--------------------------------------------------



//Objects

// for (let i in people){
//     console.log(`index : ${i} value : ${people[i].firstName}`);
// }


//----------------------------------------------------



// foreach

// cars.forEach(function(item){
//     console.log(item);
// });

// people.forEach(function(item){
//    console.log(item.firstName);
// });





// map : returns an array


// let val = people.map(function(item){
//      return item.firstName + ' ' + item.lastName;
// });

// console.log(val);

let numbers = [1,5,6,8,10];

let num = numbers.map(function(n){
    return n*n;
});

console.log(num);