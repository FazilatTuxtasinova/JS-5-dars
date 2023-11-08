/*Dom in JS*/

/*let headTag = document.head;*/
/*let bodyTag = document.body;*/
/*let havola = document.documentURI;*/
/*let formalar = document.forms;*/
/*let havolalar = document.links;*/
/*console.log(havolalar);*/

/*Events in JS(JS da hodisalar)*/


/*
function meniIkkiMartaBos(){
    alert("Siz batonni ikki marta bosdingiz!");
}
*/

/*
function tanlash(event){
    alert ("Siz " + event.target.value + "ni tanladingiz!");
    }
*/

function inputgaBosish(){
    console.log("Inputga bosildi!");
}
function inputdanChiqish(){
    console.log("Inputdan chiqish!");
}
function yozish(event){
    console.log(event.target.value);
}
document.querySelector(".matnTegi").addEventListener('copy',function (event){
    console.log("Diqqat! Diqqat! Sizdan" + event.target.value + "nomli hujjatlar ko`chirilayapti!");
})
document.querySelector(".matnTegi").addEventListener('delet',function (event){
    console.log("Diqqat! Diqqat! Sizning" + event.target.value + "nomli hujjatlaringiz o`chirilayapti!");
})
document.querySelector(".matnTegi").addEventListener('read',function (event){
    console.log("Diqqat! Diqqat! Sizning" + event.target.value + "nomli hujjatlaringiz o`qilyapti!");
})
/*
function kirish(){
    console.log("Hududga kirildi!")
}
*/
/*
function chiqish(){
    console.log("Hududdan chiqildi!")
}
*/
/*
function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}*/
