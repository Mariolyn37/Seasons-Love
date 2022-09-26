var viñeta1 = document.querySelector(".viñeta1");
var viñeta2 = document.querySelector(".viñeta2");
var viñeta3 = document.querySelector(".viñeta3");
var viñeta5 = document.querySelector(".viñeta5");
var viñeta6 = document.querySelector(".viñeta6");
var viñeta8 = document.querySelector(".viñeta8");
var viñeta9 = document.querySelector(".viñeta9");
var viñeta12 = document.querySelector(".viñeta12");
var viñeta13 = document.querySelector(".viñeta13");
var viñeta14 = document.querySelector(".viñeta14");
var viñeta17 = document.querySelector(".viñeta17");
var viñeta19 = document.querySelector(".viñeta19");
var viñeta21 = document.querySelector(".viñeta21");
var viñeta22 = document.querySelector(".viñeta22");


viñeta1.addEventListener("click", cambiov1);
function cambiov1(){
    if (viñeta1==0) {
        return  
    } else {
    viñeta1.setAttribute("src","./cap 3/gifts/viñeta 1/viñeta1.gif");  
    viñeta2.classList.add('sombra');
    viñeta1.style.animation = 'none'; 
    viñeta1 = 0;   
    }  
}

viñeta2.addEventListener("click", cambiov2);
function cambiov2(){
    viñeta2.setAttribute("src","./cap 3/img/viñeta2.jpg");  
    viñeta2.classList.remove('sombra');
    viñeta3.classList.add('sombra');
}

viñeta3.addEventListener("click", cambiov3);
function cambiov3(){
    viñeta3.setAttribute("src","./cap 3/img/viñeta3_1.jpg");  
    viñeta3.classList.remove('sombra');
    viñeta5.classList.add('sombra');
}

viñeta5.addEventListener("click", cambiov5);
function cambiov5(){
    if (viñeta5==0) {
        return  
    } else {
    viñeta5.setAttribute("src","./cap 3/gifts/viñeta5/viñeta5.gif"); 
    viñeta5.classList.remove('sombra');
    viñeta6.classList.add('sombra');
    viñeta5 = 0;   
    }     
}

viñeta6.addEventListener("click", cambiov6);
function cambiov6(){
    if (viñeta6==0) {
        return  
    } else {
        viñeta6.setAttribute("src","./cap 3/gifts/viñeta 6/viñeta6.gif");  
        viñeta6.classList.remove('sombra');
        viñeta8.classList.add('sombra');
        viñeta6 = 0;   
    }    
}

viñeta8.addEventListener("click", cambiov8);
function cambiov8(){
    if (viñeta8==0) {
        return  
    } else {
    viñeta8.setAttribute("src","./cap 3/gifts/viñeta 8/viñeta8.gif");  
    viñeta8.classList.remove('sombra');
    viñeta9.classList.add('sombra'); 
    viñeta8 = 0;   
    }    
}

viñeta9.addEventListener("click", cambiov9);
function cambiov9(){
    if (viñeta9==0) {
        return  
    } else {
    viñeta9.setAttribute("src","./cap 3/gifts/viñeta 9/viñeta9.gif");  
    viñeta9.classList.remove('sombra');
    viñeta12.classList.add('sombra');
    viñeta9 = 0;   
    }    
}

viñeta12.addEventListener("click", cambiov12);
function cambiov12(){
    if (viñeta12==0) {
        return  
    } else {
        viñeta12.setAttribute("src","./cap 3/gifts/viñeta 12/viñeta 12.gif"); 
        viñeta12.classList.remove('sombra');
        viñeta13.classList.add('sombra');
        viñeta12 = 0;   
    }  
}

viñeta13.addEventListener("click", cambiov13);
function cambiov13(){
    if (viñeta13==0) {
        return  
    } else {
    viñeta13.setAttribute("src","./cap 3/gifts/viñeta 13/viñeta13.gif"); 
    viñeta13.classList.remove('sombra');
    viñeta14.classList.add('sombra'); 
    viñeta13 = 0;   
    }     
}

viñeta14.addEventListener("click", cambiov14);
function cambiov14(){
    if (viñeta14==0) {
        return  
    } else {
        viñeta14.setAttribute("src","./cap 3/gifts/viñeta 14/viñeta14.gif"); 
        viñeta14.classList.remove('sombra');
        viñeta17.classList.add('sombra');
        viñeta14 = 0;   
    }      
}

viñeta17.addEventListener("click", cambiov17);
function cambiov17(){
    if (viñeta17==0) {
        return  
    } else {
    viñeta17.setAttribute("src","./cap 3/gifts/viñeta 17/viñeta17.gif"); 
    viñeta17.classList.remove('sombra');
    viñeta19.classList.add('sombra');
    viñeta17 = 0;   
    }      
}

viñeta19.addEventListener("click", cambiov19);
function cambiov19(){
    if (viñeta19==0) {
        return  
    } else {
    viñeta19.setAttribute("src","./cap 3/gifts/viñeta 19/viñeta19.gif"); 
    viñeta19.classList.remove('sombra');
    viñeta21.classList.add('sombra');
    viñeta19 = 0;   
    }     
}

viñeta21.addEventListener("click", cambiov21);
function cambiov21(){
    if (viñeta21==0) {
        return  
    } else {
    viñeta21.setAttribute("src","./cap 3/gifts/viñeta 21/viñeta21.gif");  
    viñeta21.classList.remove('sombra');
    viñeta22.classList.add('sombra');
    viñeta21 = 0;   
    }  
}

viñeta22.addEventListener("click", cambiov22);
function cambiov22(){
    if (viñeta22==0) {
        return  
    } else {
    viñeta22.setAttribute("src","./cap 3/gifts/viñeta 22/viñeta22.gif"); 
    viñeta22.classList.remove('sombra'); 
    viñeta22 = 0;   
    }
}































