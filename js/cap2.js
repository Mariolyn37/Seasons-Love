var vineta1 = document.querySelector(".vineta1");
var vineta2 = document.querySelector(".vineta2");
var vineta3 = document.querySelector(".vineta3");
var v7 = document.querySelector(".v7");
var vineta7 = document.querySelector(".vineta7");
var vineta8 = document.querySelector(".vineta8");
var vineta9 = document.querySelector(".vineta9");
var vineta10 = document.querySelector(".vineta10");
var vineta11 = document.querySelector(".vineta11");
var vineta13 = document.querySelector(".vineta13");
var vineta14 = document.querySelector(".vineta14");
var vineta16 = document.querySelector(".vineta16");
var vineta18 = document.querySelector(".vineta18");
var vineta20 = document.querySelector(".vineta20");
var vineta22 = document.querySelector(".vineta22");
var vineta23 = document.querySelector(".vineta23");
var vineta24 = document.querySelector(".vineta24");
var vineta25 = document.querySelector(".vineta25");
var vineta26 = document.querySelector(".vineta26");
var vineta27 = document.querySelector(".vineta27");
var viñeta30 = document.querySelector(".viñeta30");
var viñeta31 = document.querySelector(".viñeta31");
var viñeta32 = document.querySelector(".viñeta32");
var viñeta35 = document.querySelector(".viñeta35");
var viñeta37 = document.querySelector(".viñeta37");


vineta1.addEventListener("click", cambiov1);
function cambiov1(){
    if (vineta1==0) {
        return
    } else {
        vineta1.setAttribute("src","./cap 2 comic/gif del comic/vineta 1/vineta 1.gif");  
        vineta2.classList.add('sombra');
        vineta1 = 0;   
    } 
}

vineta2.addEventListener("click", cambiov2);
function cambiov2(){
    if (vineta2==0) {
        return   
    } else {
    vineta2.setAttribute("src","./cap 2 comic/gif del comic/vineta 2/vineta2.gif"); 
    vineta2.classList.remove('sombra'); 
    vineta3.classList.add('sombra');
    vineta2 = 0;   
    }  
}

vineta3.addEventListener("click", cambiov3);
function cambiov3(){
    if (vineta3==0) {
        return    
    } else {
        vineta3.setAttribute("src","./cap 2 comic/gif del comic/vineta 3/vineta3.gif"); 
        vineta3.classList.remove('sombra'); 
        v7.classList.add('sombra');
        vineta3 = 0;   
    } 
}

v7.addEventListener("click", cambiovi7);
function cambiovi7(){
    v7.setAttribute("src","./cap 2 comic/imagenes/viñeta_Mesa de trabajo 1.jpg");  
    v7.classList.remove('sombra'); 
    vineta8.classList.add('sombra'); 
}

vineta7.addEventListener("click", cambiov7);
function cambiov7(){
    if (vineta7==0) {
        return    
    } else {
    vineta7.setAttribute("src","./cap 2 comic/gif del comic/vineta 7/vineta 7.gif");  
    vineta7.classList.remove('sombra'); 
    vineta8.classList.add('sombra'); 
    vineta7 = 0;   
    }    
}

vineta8.addEventListener("click", cambiov8);
function cambiov8(){
    if (vineta8==0) {
        return  
    } else {
    vineta8.setAttribute("src","./cap 2 comic/gif del comic/vineta 8/vineta 8.gif"); 
    vineta8.classList.remove('sombra'); 
    vineta9.classList.add('sombra');
    vineta8 = 0;   
    }    
}

vineta9.addEventListener("click", cambiov9);
function cambiov9(){
    if (vineta9==0) {
        return  
    } else {
        vineta9.setAttribute("src","./cap 2 comic/gif del comic/vineta 9/vineta 9.gif"); 
        vineta9.classList.remove('sombra'); 
        vineta10.classList.add('sombra');
        vineta9 = 0;   
    }      
}

vineta10.addEventListener("click", cambiov10);
function cambiov10(){
    if (vineta10==0) {
        return  
    } else {
    vineta10.setAttribute("src","./cap 2 comic/gif del comic/vineta 11/vineta11.gif"); 
    vineta10.classList.remove('sombra'); 
    vineta11.classList.add('sombra');
    vineta10 = 0;   
    }        
}

vineta11.addEventListener("click", cambiov11);
function cambiov11(){
    vineta11.setAttribute("src","./cap 2 comic/imagenes/cap 2 del comic-11 2.jpg");  
    vineta11.classList.remove('sombra'); 
    vineta13.classList.add('sombra'); 
}

vineta11.addEventListener("mouseout", regresav11);
function regresav11(){
    vineta11.setAttribute("src","./cap 2 comic/imagenes/fondo11.png");
      
}

vineta13.addEventListener("click", cambiov13);
function cambiov13(){
    if (vineta13==0) {
        return  
    } else {
    vineta13.setAttribute("src","./cap 2 comic/gif del comic/vineta14/vineta.gif"); 
    vineta13.classList.remove('sombra'); 
    vineta14.classList.add('sombra');
    vineta13 = 0;   
    }     
}

vineta14.addEventListener("click", cambiov14);
function cambiov14(){
    vineta14.setAttribute("src","./cap 2 comic/imagenes/cap 2 del comic-14.jpg"); 
    vineta14.classList.remove('sombra'); 
    vineta16.classList.add('sombra');   
}

vineta16.addEventListener("click", cambiov16);
function cambiov16(){
    if (vineta16==0) {
        return  
    } else {
    vineta16.setAttribute("src","./cap 2 comic/gif del comic/vineta 16/vineta 16.gif");  
    vineta16.classList.remove('sombra'); 
    vineta18.classList.add('sombra'); 
    vineta16 = 0;   
    }     
}

vineta18.addEventListener("click", cambiov18);
function cambiov18(){
    vineta18.setAttribute("src","./cap 2 comic/imagenes/vineta18b.jpg");  
    vineta18.classList.remove('sombra'); 
    vineta20.classList.add('sombra');  
}


vineta20.addEventListener("click", cambiov20);
function cambiov20(){
    if (vineta20==0) {
        return  
    } else {
    vineta20.setAttribute("src","./cap 2 comic/gif del comic/vineta 20/vineta 20.gif");  
    vineta20.classList.remove('sombra'); 
    vineta22.classList.add('sombra');
    vineta20 = 0;   
    }    
}

vineta22.addEventListener("click", cambiov22);
function cambiov22(){
    vineta22.setAttribute("src","./cap 2 comic/imagenes/cap 2 del comic-21.jpg"); 
    vineta22.classList.remove('sombra'); 
    vineta23.classList.add('sombra');  
}

vineta23.addEventListener("click", cambiov23);
function cambiov23(){
    if (vineta23==0) {
        return  
    } else {
    vineta23.setAttribute("src","./cap 2 comic/gif del comic/vineta 22/vineta 22.gif");  
    vineta23.classList.remove('sombra'); 
    vineta24.classList.add('sombra');
    vineta23 = 0;   
    }    
}

vineta24.addEventListener("click", cambiov24);
function cambiov24(){
    if (vineta24==0) {
        return  
    } else {
    vineta24.setAttribute("src","./cap 2 comic/gif del comic/vineta 24/vineta 24.gif"); 
    vineta24.classList.remove('sombra'); 
    vineta25.classList.add('sombra');
    vineta24 = 0;   
    }      
}

vineta25.addEventListener("click", cambiov25);
function cambiov25(){
    if (vineta25==0) {
        return  
    } else {
    vineta25.setAttribute("src","./cap 2 comic/gif del comic/vineta 23/vineta23.gif");  
    vineta25.classList.remove('sombra'); 
    vineta26.classList.add('sombra');
    vineta25 = 0;   
    }    
}

vineta26.addEventListener("click", cambiov26);
function cambiov26(){
    if (vineta26==0) {
        return  
    } else {
    vineta26.setAttribute("src","./cap 2 comic/gif del comic/vineta 26/vineta26.gif");  
    vineta26.classList.remove('sombra'); 
    vineta27.classList.add('sombra'); 
    vineta26 = 0;   
    }    
}

vineta27.addEventListener("click", cambiov27);
function cambiov27(){
    if (vineta27==0) {
        return  
    } else {
    vineta27.setAttribute("src","./cap 2 comic/gif del comic/vineta 28/vineta28.gif");  
    vineta27.classList.remove('sombra'); 
    viñeta30.classList.add('sombra'); 
    vineta27 = 0;   
    }  
}

viñeta30.addEventListener("click", cambiov30);
function cambiov30(){
    if (viñeta30==0) {
        return  
    } else {
    viñeta30.setAttribute("src","./cap 2 comic/gif del comic/viñeta 30/viñeta 30.gif"); 
    viñeta30.classList.remove('sombra'); 
    viñeta31.classList.add('sombra'); 
    viñeta30 = 0;   
    }    
}

viñeta31.addEventListener("click", cambiov31);
function cambiov31(){
    if (viñeta31==0) {
        return  
    } else {
    viñeta31.setAttribute("src","./cap 2 comic/gif del comic/viñeta 31/viñeta 31.gif");  
    viñeta31.classList.remove('sombra');
    viñeta32.classList.add('sombra');
    viñeta31 = 0;   
    }    
}

viñeta31.addEventListener("mouseout", regresav31);
function regresav31(){
    viñeta31.setAttribute("src","./cap 2 comic/gif del comic/viñeta 31/viñeta 31.jpg"); 
    viñeta31.classList.remove('sombra'); 
      
}

viñeta32.addEventListener("click", cambiov32);
function cambiov32(){
    if (viñeta32==0) {
        return  
    } else {
        viñeta32.setAttribute("src","./cap 2 comic/gif del comic/viñeta 32/viñeta32.gif");  
        viñeta32.classList.remove('sombra'); 
        viñeta35.classList.add('sombra'); 
        viñeta32 = 0;   
    }   
}

viñeta35.addEventListener("click", cambiov35);
function cambiov35(){
    if (viñeta35==0) {
        return  
    } else {
    viñeta35.setAttribute("src","./cap 2 comic/gif del comic/viñeta 35/viñeta35.gif"); 
    viñeta35.classList.remove('sombra');  
    viñeta35 = 0;   
    }  
    
       
}

viñeta37.addEventListener("click", cambiov37);
function cambiov37(){
    viñeta37.style.opacity = 100; 
    
}




















