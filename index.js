//onload


function iniciar(){
    setTimeout(function(){fadeIn(10,"nahuelTitle")},500);
    setTimeout(function(){fadeIn(10,"subNahuel")},1500);
    setTimeout(function(){fadeIn(10,"header")},1700);
    
}

// ---------------------
let cardFedyState = true;
let cardMercaditoState = true;
let cardMechaState = true;
let hjsState = true;
let hhtmlState = true;
let hcssState = true;
let hreactState = true;
let hbootState = true;


let togglerActive = false; //Variable global para el estado del toggler
var prevScrollpos = window.pageYOffset; //This variable indicates if we are going up or down in the page

//Funcion que determina si un elemento esta en viewport

function isInViewport(element) {
    var rect = document.getElementById(element).getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= -500 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight +250 || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

//Funcion apra el header
window.onscroll = function() { //This function hides the header if we are going down, and shows it if we are going up
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-5rem";
  }
  prevScrollpos = currentScrollPos;

  //COPIAR Y PEGAR PARA CADA TARJETA/HABILIDAD
    if(isInViewport("cardFedy")&&cardFedyState){
    fadeIn(5,"cardFedy");
    cardFedyState = false;
    }
    if(isInViewport("cardMercadito")&&cardMercaditoState){
    fadeIn(5,"cardMercadito");
    cardMercaditoState = false;
    }
    if(isInViewport("cardMecha")&&cardMechaState){
    fadeIn(5,"cardMecha");
    cardMechaState = false;
    }
    if(isInViewport("hjs")&&hjsState){
    fadeIn(5,"hjs");
    hjsState = false;
    }
    if(isInViewport("hcss")&&hcssState){
    fadeIn(5,"hcss");
    hcssState = false;
    }
    if(isInViewport("hhtml")&&hhtmlState){
    fadeIn(5,"hhtml");
    hhtmlState = false;
    }
    if(isInViewport("hboot")&&hbootState){
    fadeIn(5,"hboot");
    hbootState = false;
    }
    if(isInViewport("hreact")&&hreactState){
    fadeIn(5,"hreact");
    hreactState = false;
    }
}
    
//Funcion para rotar el toggler en device
function rotateTogglerIcon(){
    togglerActive = !togglerActive;
    let toggler = document.getElementById("togglerBtn");
    if(!togglerActive){
        toggler.style.transform = "none"; 
    }
    else{
        toggler.style.transform = 'rotate(225deg)'
    }
}

//Funcion fadeIn

function fadeIn(segs, id){
    let element = document.getElementById(id);
    let op = 0.0;
    element.style.opacity = op;
    let interval = setInterval(aparecer,segs);
    function aparecer(){
        if(op<1){
            op = op+0.01;
            
            element.style.opacity = op;
        }
        else{
            clearInterval(interval);
        }
    }
}

//Funciones para el contacto

function botonMail(){
    document.getElementById("contactTitle").innerHTML = "CORREO";
    document.getElementById("contactTitle").hidden = false;
    document.getElementById("contactInfo").innerHTML = "nahuelfedyszyn@gmail.com"
    document.getElementById("contactInfo").hidden = false;
    document.getElementById("contactLink").innerHTML = "ENVIAR CORREO";
    document.getElementById("contactLink").setAttribute('href', "https://mail.google.com/mail/?view=cm&fs=1&to=nahuelfedyszyn@gmail.com");
    document.getElementById("contactLink").setAttribute("target","_blank");
    document.getElementById("contactLink").hidden = false;
    document.getElementById("botoneraText").innerHTML = "Mi medio de comunicacion favorito. Si necesitas enviarme un mensaje largo un correo electronico es la mejor opcion, siempre me tomo un buen tiempo para leer mis correos detenidamente. Lo más seguro es que conteste tu correo el mismo dia que yo lo reciba."
    fadeIn(5, "contactTitle");
    fadeIn(5, "contactInfo");
    fadeIn(5, "botoneraText");
    fadeIn(5, "contactLink");
}

function botonWpp(){
    
    document.getElementById("contactTitle").hidden = true;
  
    document.getElementById("contactInfo").hidden = true;
    document.getElementById("contactLink").innerHTML = "ENVIAR MENSAJE";
    document.getElementById("contactLink").setAttribute('href', "https://api.whatsapp.com/send?phone=5493874117921");
    document.getElementById("contactLink").setAttribute("target","_blank");
    document.getElementById("contactLink").hidden = false;
    document.getElementById("botoneraText").innerHTML = "Algo más informal, pero muy ágil. Prefiero este medio de comunicacion si necesitas enviarme mensajes más cortos. Lo más probable es que responda tus mensajes en cuanto tenga algunos minutos libres para escribirte."
    fadeIn(5, "contactTitle");
    fadeIn(5, "contactInfo");
    fadeIn(5, "botoneraText");
    fadeIn(5, "contactLink");
}

function botonLlamar(){
    document.getElementById("contactTitle").innerHTML = "TELEFONO";
    document.getElementById("contactTitle").hidden = false;
    document.getElementById("contactInfo").innerHTML = "387 4 117 921"
    document.getElementById("contactInfo").hidden = false;
    document.getElementById("contactLink").innerHTML = "LLAMAR";
    document.getElementById("contactLink").setAttribute('href', "tel:154117921");
    document.getElementById("contactLink").setAttribute("target","_blank");
    document.getElementById("contactLink").hidden = false;
    document.getElementById("botoneraText").innerHTML = "Las llamadas son un medio de comunicacion en el cual podremos entablar un dialogo directo, sin embargo solo respondo las llamadas si se que tengo algunos minutos libres para dedicarte. Puedes enviarme antes un mensaje para asegurarte de que puedo contestar tu llamada."
    fadeIn(5, "contactTitle");
    fadeIn(5, "contactInfo");
    fadeIn(5, "botoneraText");
    fadeIn(5, "contactLink");
}




