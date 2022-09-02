/*

// İF-ELSE STATEMENTS

const firstname = "Tolga";
const age = 26;
const isStudent = true;
const school = "high school";

// if(firstname === "Tolga"){
//     console.log("Merhaba Tolga");
// }

// if (age === 26){
//     console.log("Yaşınız 19")
// }

// if(isStudent){
//     console.log("Merhaba öğrenci");
// }else{
//     console.log("Merhaba işler nasıl");
// }

// if (age>=18){
//     if ((school == "university") || (school === "high school")){
//     console.log("ehliyet alabilirsiniz");
//     }else{
//     console.log("eğitim durumunuz yetersiz");

//     }
// }else{
//     console.log("ehliyet alamazsınız");

// }



// if (age > 0 && age<12){
//     console.log(`${firstname} is a child`)
// }else if(age>=13 && age <=19){
//     console.log(`${firstname} is a teenager`);
// }else {
//     console.log(`${firstname} is a adult`)
// }



// UNDEFİNED


if (typeof id !== 'undefined'){
    console.log('id: '+ id)
}else{
    console.log('no id');
}


*/



/* ---------------------- Switch Statements -----------------

*/

// let category = "beyaz eşya";

// switch(category){
//     case "telefon":
//         console.log("telefon kategorisi");
//     break;

//     case "bilgisayar":
//         console.log("bilgisayar kategorisi");
//     break;

//     default:
//         console.log("yanlış kategori");
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//         day = "Pazar"
//     break;

//     case 1:
//         day = "Pazartesi"
//     break;

//     case 2:
//         day = "Salı"
//     break;

//     case 3:
//         day = "Çarşamba"
//     break;

//     case 4:
//         day = "Perşembe"
//     break;

//     case 5:
//         day = "Cuma"
//     break;

//     case 6:
//         day = "Cumartesi"
//     break;
// }

// console.log(`Bugün günlerden ${day}`)



// let hafta;

// switch(new Date().getDay()){
//     case 0:
//     case 6:
//         hafta = "Hafta Sonu"
//     break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         hafta = "Hafta İçi";
//     break
// }

// console.log(`Bugün ${hafta}`);

// var firstname = "tolga";
// const age = 19;

// switch(true){
//     case (age > 0 && age<12):
//         console.log(`${firstname} is a child`);
//     break;

//     case (age >= 13 && age<19):
//         console.log(`${firstname} is a teenager`);
//     break;

//     default:
//         console.log(`${firstname} is a adult`)
// }




//--------------------------- Object Literals------------------------


let val;

let person = {
    firstname : "Tolga",
    lastname : "Bulut" ,
    age : 26,
    hobbies : ["spor","seyehat","game"],
    address : {
        city : "Edirne",
        country : "Türkiye"
    },
    dogumyili : function(){
        return 2022- this.age;  // 7 yazmak yerine this yazarsak personun içinde olduğumuzdan onu alır.
    }
};

val = person.firstname;
val = person.lastname;
val = person["firstname"];
val = person.hobbies;
val = person.hobbies[1];
val = person.age;
val = person.hobbies.length;
val = person.address;
val = person.address.city;
val = person.address["city"];
val = person.dogumyili();


console.log(val);
console.log(typeof val);


let people = [
    {firstname : "Tolga",lastname : "Bulut" },
    {firstname : "Tunay",lastname : "Bulut" },
    {firstname : "Ufuk",lastname : "Bulut" },
    {firstname : "Serpil",lastname : "Bulut" }
];

val = people[2];
val = people[2].firstname;

for (let i =0; i<people.length;i++){
    console.log(people[i].firstname);
}



// console.log(val);
// console.log(typeof val);