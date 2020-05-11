




$(document).ready(function() {
    document.getElementById("mySidenav").style.width = "0";
    var min = Math.ceil(0);
    var max = Math.floor(4);
    var rndCol = Math.floor(Math.random() * (max - min +1)) + min;
    const coloriBg = ["#f5997e", "#ebcbc8", "#8010c0",  "#155e95", "#a0707d"];
    const coloriTxt = ["#a80030", "#195c64", "#ff01c1", "#abeeff", "#99121b"];
    
    $("body").css("background-color",coloriBg[rndCol]);
    $(".colTxt").css("color",coloriTxt[rndCol]);
    $(".myModal").css("color",coloriTxt[rndCol]);
    $(".modal-content").css("background-color",coloriBg[rndCol]);
    $(".barra").css("background-color",coloriBg[rndCol]);
    $(".sidenav").css("background-color",coloriTxt[rndCol]);
    $(".bottoncino").css("background-color",coloriBg[rndCol]);
    $(".sidenav").css("border-color",coloriTxt[rndCol]);
    $(".sidenav").css("color",coloriBg[rndCol]);
    $(".sidenav a").css("color",coloriBg[rndCol]);
    $(".bottoncino").css("border-color",coloriTxt[rndCol]);
    $(".bottoncino").css("color",coloriTxt[rndCol]);
    $(".pet-name").css("border-color",coloriTxt[rndCol]);
    $(".modal-content").css("border-color",coloriTxt[rndCol]);
    $(".bordino").css("border-color",coloriTxt[rndCol]);
    $(".barra").css("border-color",coloriTxt[rndCol]);
    $(".spegni").css("color",coloriTxt[rndCol]);
    $(".sinistro").css("color",coloriTxt[rndCol]);
    
    
    
    function getBrowserSize(){
       var w, h;

         if(typeof window.innerWidth != 'undefined')
         {
          w = window.innerWidth; //other browsers
          h = window.innerHeight;
         } 
         else if(typeof document.documentElement != 'undefined' && typeof      document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) 
         {
          w =  document.documentElement.clientWidth; //IE
          h = document.documentElement.clientHeight;
         }
         else{
          w = document.body.clientWidth; //IE
          h = document.body.clientHeight;
         }
       return {'width':w, 'height': h};
}

if(parseInt(getBrowserSize().width) >800){
 document.getElementById("rotato").style.display = "none";
}
    

    });



// EXAMPLE json da cambiare //
const petsData = [
    {
       "Num": 1,
   "Name": "Titolo di Prova",
   "Date": "10.2.09",
   "Cliente": "Cliente01",
   "Description": "LoremIpsum",
   "Image": "assets/1.png"
 },
 {
   "Num": 2,
   "Name": "Titolo Prova 2",
   "Date": "6.12.09",
   "Cliente": "Cliente02",
   "Description": "LoremIpsum",
   "Image": "assets/2.png"
 },
 {
   "Num": 3,
   "Name": "Titolo di prova 3",
   "Date": "5.3.10",
   "Cliente": "Cliente03",
   "Description": "LoremIpsum",
   "Image": "assets/3.png"
 },
 {
   "Num": 4,
   "Name": "Titolo di prova 4",
   "Date": "5.3.11",
   "Cliente": "Cliente04",
   "Description": "LoremIpsum",
   "Image": "assets/4.png"
 },
 {
   "Num": 5,
   "Name": "Titolo di prova 5",
   "Date": "5.3.12",
   "Cliente": "Cliente05",
   "Description": "LoremIpsum",
   "Image": "assets/5.png"
 },
 {
   "Num": 6,
   "Name": "Titolo di prova 6",
   "Date": "5.3.13",
   "Cliente": "Cliente06",
   "Description": "LoremIpsum",
   "Image": "assets/6.png"
 },
 {
   "Num": 7,
   "Name": "Titolo di prova 7",
   "Date": "5.3.14",
   "Cliente": "Cliente07",
   "Description": "LoremIpsum",
   "Image": "assets/7.png"
 },
 {
   "Num": 8,
   "Name": "Titolo di prova 8",
   "Date": "5.3.15",
   "Cliente": "Cliente08",
   "Description": "LoremIpsum",
   "Image": "assets/8.png"
 },
 {
   "Num": 9,
   "Name": "Titolo di prova 9",
   "Date": "5.3.16",
   "Cliente": "Cliente09",
   "Description": "LoremIpsum",
   "Image": "assets/9.png"
 },
 {
   "Num": 10,
   "Name": "Titolo di prova 10",
   "Date": "5.3.17",
   "Cliente": "Cliente10",
   "Description": "LoremIpsum",
   "Image": "assets/10.png"
 },
 {
   "Num": 11,
   "Name": "Titolo di prova 11",
   "Date": "5.3.18",
   "Cliente": "Cliente11",
   "Description": "LoremIpsum",
   "Image": "assets/11.png"
 },
 {
   "Num": 12,
   "Name": "Titolo di prova 12",
   "Date": "5.3.19",
   "Cliente": "Cliente12",
   "Description": "LoremIpsum",
   "Image": "assets/12.png"
 },
 {
   "Num": 13,
   "Name": "Titolo di prova 13",
   "Date": "5.3.20",
   "Cliente": "Cliente13",
   "Description": "LoremIpsum",
   "Image": "assets/13.png"
 },
 {
   "Num": 14,
   "Name": "Titolo di prova 14",
   "Date": "5.3.21",
   "Cliente": "Cliente14",
   "Description": "LoremIpsum",
   "Image": "assets/14.png"
 },
 {
   "Num": 15,
   "Name": "Titolo di prova 15",
   "Date": "5.3.22",
   "Cliente": "Cliente15",
   "Description": "LoremIpsum",
   "Image": "assets/15.png"
 },
 {
   "Num": 16,
   "Name": "Titolo di prova 16",
   "Date": "5.3.23",
   "Cliente": "Cliente16",
   "Description": "LoremIpsum",
   "Image": "assets/16.png"
 },
 {
   "Num": 17,
   "Name": "Titolo di prova 17",
   "Date": "5.3.24",
   "Cliente": "Cliente17",
   "Description": "LoremIpsum",
   "Image": "assets/17.png"
 } 
    ]


///////////////////
// GRID TEMPLATE //
function memeTemplate(pet) {
    return `
<div class="animal" name="${pet.Num}">
<img class="pet-name" src="${pet.Image}" data-name="${pet.Name}" id="${pet.Num}" data-image="${pet.Image}" onclick="funzione()" data-cliente="${pet.Cliente}" data-propaganda="${pet.Date}" data-spiegazione="${pet.Description}" data-template="${pet.Template}">
<p>${pet.Name}</p>
</div>
`
}



document.getElementById("app").innerHTML = `
${petsData.map(memeTemplate).join('')}
`


////// MODALS ////////
//pronz

var i = document.getElementsByName("${pet.Num}");

// Modal open and fill //
//var nome = document.getElementsByClassName("pet-name")[prova].getAttribute("data-name");

// Get the modal //
var modal = document.getElementById("myModal");

// Get the button that opens the modal //
var btn = document.getElementsByClassName("animal");


// Get the <span> element that closes the modal //
var span = document.getElementsByClassName("spegni")[0];


var prova;
var ribolla;
function theFunction(gigi)
{prova = gigi.target.id ;
 ribolla = String(prova);
 nome = document.getElementById(ribolla).getAttribute("data-Name");
 immagine = document.getElementById(ribolla).getAttribute("data-image");
 propaganda = document.getElementById(ribolla).getAttribute("data-propaganda");
 cliente = document.getElementById(ribolla).getAttribute("data-cliente");
 spiegazione = document.getElementById(ribolla).getAttribute("data-spiegazione");
 template = document.getElementById(ribolla).getAttribute("data-template");
 collegamentos = document.getElementById(ribolla).getAttribute("data-link");
 document.getElementById("progetto").innerHTML = nome;
 document.getElementById("cliente").innerHTML = cliente;
 document.getElementById("spiegazione").innerHTML = spiegazione;
 document.getElementById("template").innerHTML = template;
 console.log(gigi)
 console.log(gigi.target.id -1)


 var img = document.createElement("img");
 img.src = immagine;
 img.setAttribute('class', 'normale');
 var src = document.getElementById("immagine");
 src.appendChild(img);

 var paolino = document.createElement("a")
 paolino.textContent = propaganda;
 var spanProp= document.getElementById("propaganda");
 spanProp.appendChild(paolino);

}

function funzione() {
    modal.style.display = "block";
    theFunction(event);

    console.log(event)
}


// When the user clicks on the button, open the modal //
btn.onclick = function() {
    modal.style.display = "block";
    // console.log(nome);
}


// When the user clicks on <span> (x), close the modal //
span.onclick = function() {
    modal.style.display = "none";
    //codice per ripulire il modal dall'immagine
    var imgRemover = document.getElementById("immagine")
    imgRemover.removeChild(imgRemover.childNodes[0]);

    var aRemover = document.getElementById("propaganda")
    aRemover.removeChild(aRemover.childNodes[0]);
    //FINE codice per ripulire il modal dall'immagine

}

// When the user clicks anywhere outside of the modal, close it //

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        var imgRemover = document.getElementById("immagine")
        imgRemover.removeChild(imgRemover.childNodes[0]);

        var aRemover = document.getElementById("propaganda")
        aRemover.removeChild(aRemover.childNodes[0]);
    }});


//---------------------//
// Draggable //
$(function() {
    $("#myModal").draggable();
});


///////////////////////////////////
////////MOUSE OVER SU HK///////////

function movimento(e) {
    var sinistra = e.pageX;
    var destra = e.pageY;
    document.getElementById("demo").style.top = destra + 10 + "px";
    document.getElementById("demo").style.left = sinistra + 10 + "px";
    document.getElementById("demo").style.display = "block";
} 

function sparisci() {
    document.getElementById("demo").style.display = "none";
} 


////////////////SIDEBAR///////////////

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "17rem";
}





//////////////////////////////////
/////////MODAL ABOUT/////////

$(function() {
    $("#modal-reddit").draggable();
});

$(function() {
    $("#modal-kym").draggable();
});


   

