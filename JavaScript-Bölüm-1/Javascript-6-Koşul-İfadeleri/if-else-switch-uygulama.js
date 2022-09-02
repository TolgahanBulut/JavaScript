/*

var trafigecikis = new Date(2017,08,15);
trafigecikis.setHours(0,0,0,0); // Trafiğe çıkış saatini sıfırlıyoruz.
var trafiktekims = Date.now() - trafigecikis.getTime(); // Bize ms değerini veriyor çıkış süresinden Bugüne kadar olan süreyi.

var trafiktekigun = Math.floor(trafiktekims/(1000*60*60*24)); // Milisaniyeyi güne çevirme işlemini aşağıya yuvarlayarak yapıyoruz.

// if (trafiktekigun<=365){
//     console.log("Bakım Süresi Gelmedi");
// }else if(trafiktekigun >=365 && trafiktekigun<365*2){
//     console.log("1.Bakım Yılı");
// }else if(trafiktekigun >=730 && trafiktekigun<365*3){
//     console.log("2.Bakım Yılı");
// }else if(trafiktekigun >=1095 && trafiktekigun<365*4){
//     console.log("3.Bakım Yılı");
// }else {
//     console.log("Artık bakım yok");
// }

switch(true){
    case(trafiktekigun<=365):
        console.log("Bakım Süresi Gelmedi");
    break;

    case(trafiktekigun >=365 && trafiktekigun<365*2):
        console.log("1.Bakım Yılı");
    break;

    case(trafiktekigun >=365*2 && trafiktekigun<365*3):
        console.log("2.Bakım Yılı");
    break;

    case(trafiktekigun >=365*3 && trafiktekigun<365*4):
        console.log("3.Bakım Yılı");
    break;

    default:
        console.log("Artık bakım yok")


}


*/



// -------------------------------------------------


// var result = prompt("Who's there")


// switch(result){
//     case("cancel"):
//         console.log("Canceled");
//     break;

//     case("other"):
//         console.log("I don't know you");
//     break;

//     case("admin"):
//         var password = prompt("Password")
//         switch(password){
//             case("cancel"):
//                 console.log("Canceled");
//             break;

//             case("other"):
//                 console.log("Wrong Password");
//             break;

//             case("TheMaster"):
//                 console.log("Welcome!");
//             break;

//             default:
//                 console.log("Hatalı Giriş");
//         }
// }



var result = prompt("Who's there");

if(result == "cancel"){
    console.log("Cancelled !")
}else if(result == "other"){
    console.log("I don't know you.")
}else if(result == "admin"){
    var password = prompt("Şifreyi girin");
    if(password == "cancel"){
        console.log("Cancelled !");
    }else if(password == "TheMaster"){
        console.log("Welcome !")
    }else {
        console.log("Wrong Password !")
    }
}
