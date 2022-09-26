var vineta3 = document.querySelector(".vineta3");
var montanas = document.querySelector(".montanas");
var sol = document.querySelector(".sol");
var vineta4 = document.querySelector(".vineta4");
var hades = document.querySelector(".hades");
var vineta6 = document.querySelector(".vineta6");
var vineta7 = document.querySelector(".vineta7");
var hades2 = document.querySelector(".hades2");
var vineta9 = document.querySelector(".vineta9");
var vineta10 = document.querySelector(".vineta11");
var vineta12 = document.querySelector(".vineta12");
var vineta13 = document.querySelector(".vineta13");
var v13 = document.querySelector(".v13");
var vineta14 = document.querySelector(".vineta14");
var vineta15 = document.querySelector(".vineta15");
var vineta16 = document.querySelector(".vineta20");
var vineta18 = document.querySelector(".vineta22");
var vineta20 = document.querySelector(".vineta24");
var roca = document.querySelector(".roca");



montanas.addEventListener("click", mover);
 function mover(){
    montanas.classList.add('montanas_animation');
    sol.classList.add('sol_animation');
    vineta3.classList.add('sombra');
    montanas.style.animation = 'none';
     
}


vineta3.addEventListener("click", cambio);
function cambio(){
    vineta4.classList.add('sombra');
    vineta3.classList.remove('sombra');
    vineta3.setAttribute("src","./gifs/vineta 3/vineta3_img2.png");

}

vineta3.addEventListener("mouseout", regresa_3);
function regresa_3(){
    vineta3.setAttribute("src","./gifs/vineta 3/vineta3_img.jpg");
   
}

vineta4.addEventListener("click", cambio_v4);
function cambio_v4(){
    vineta4.setAttribute("src","./FONDOS COMIC JPG/cap1/vineta4_1.jpg");
    vineta4.classList.remove('sombra');
    hades.classList.add('parpadeo');
}

vineta4.addEventListener("mouseout", regreso_v4);
function regreso_v4(){
    vineta4.setAttribute("src","./FONDOS COMIC JPG/cap1/vineta4.jpg");
}

roca.addEventListener("click", cambio_v5);
function cambio_v5(){
    hades.classList.add('hades_animation');
    vineta6.classList.add('sombra');
    hades.classList.remove('parpadeo');
}

vineta6.addEventListener("click", cambio_v6);
function cambio_v6(){
    if (vineta6==0) {
        return
    } else {
        vineta6.setAttribute("src","./gifs/vineta 6/vineta6.gif");
        vineta6.classList.remove('sombra');
        vineta7.classList.add('parpadeo');
        vineta6 = 0; 
    }  
}

vineta7.addEventListener("click", cambio_v7);
function cambio_v7(){
    if (vineta7==0) {
        return
    } else {
    vineta7.setAttribute("src","./gifs/vineta 7/vineta7.gif");
    hades2.classList.add('hades2_animation');
    vineta9.classList.add('sombra');
    vineta7.classList.remove('parpadeo');
    vineta7 = 0; 
    }
}

vineta9.addEventListener("click", cambio_v9);
function cambio_v9(){
    vineta9.setAttribute("src","./gifs/vineta 9/30 seg.gif");
    vineta9.classList.remove('sombra');
    viñeta10.classList.add('sombra'); 
}

vineta9.addEventListener("mouseout", regresa_v9);
function regresa_v9(){
    vineta9.setAttribute("src","./gifs/vineta 9/vineta9.png"); 
}

vineta10.addEventListener("click", cambio_v10);
function cambio_v10(){
    if (vineta10==0) {
        return
    } else {
    vineta10.setAttribute("src","./gifs/vineta 10/30 seg.gif");
    vineta10.classList.remove('sombra');
    vineta12.classList.add('parpadeo');
    vineta10 = 0; 
    } 
}

vineta12.addEventListener("click", cambio_v12);
function cambio_v12(){
    vineta12.style.opacity = 100; 
    vineta12.classList.remove('parpadeo');
    vineta13.classList.add('sombra');
}

vineta13.addEventListener("click", cambio_v13);
function cambio_v13(){
    if (vineta13==0) {
        return
    } else {
    vineta13.setAttribute("src","./gifs/vineta 12/30 seg.gif");
    vineta13.classList.remove('sombra');
    v13.classList.add('sombra');
    vineta13 = 0; 
    } 
}

v13.addEventListener("click", cambio_vi13);
function cambio_vi13(){
    if (v13==0) {
        return
    } else {
    v13.setAttribute("src","./gifs/12.gif");
    v13.classList.remove('sombra');
    vineta14.classList.add('sombra');
    v13 = 0; 
    }  
}

vineta14.addEventListener("click", cambio_v14);
function cambio_v14(){
    if (vineta14==0) {
        return
    } else {
    vineta14.setAttribute("src","./gifs/vineta 14/14.gif");
    vineta14.classList.remove('sombra');
    vineta15.classList.add('sombra');
    vineta14 = 0; 
    }  
}

vineta15.addEventListener("click", cambio_v15);
function cambio_v15(){
    if (vineta15==0) {
        return
    } else {
    vineta15.setAttribute("src","./gifs/vineta 18/castillo.gif");
    vineta15.classList.remove('sombra');
    vineta16.classList.add('sombra');
    vineta15 = 0; 
    } 
}

vineta16.addEventListener("click", cambio_v16);
function cambio_v16(){
    if (vineta16==0) {
        return
    } else {
    vineta16.setAttribute("src","./gifs/vineta 20/vineta-20.gif");
    vineta16.classList.remove('sombra');
    vineta18.classList.add('sombra');
    vineta16 = 0; 
    } 
}

vineta18.addEventListener("click", cambio_v18);
function cambio_v18(){
    if (vineta18==0) {
        return
    } else {
    vineta18.setAttribute("src","./gifs/vineta 22/vineta-22.gif");
    vineta18.classList.remove('sombra');
    vineta20.classList.add('sombra');
    vineta18 = 0; 
    } 
}

vineta20.addEventListener("click", cambio_v20);
function cambio_v20(){
    if (vineta20==0) {
        return
    } else {
    vineta20.setAttribute("src","./gifs/vineta ultima/vineta20_1.gif");
    vineta20.classList.remove('sombra');
    vineta20 = 0; 
    }  
}















  




