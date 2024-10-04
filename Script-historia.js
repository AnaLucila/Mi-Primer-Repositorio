let video1 = querySelector("video");

const reproducir=()=>{
    video1.play()
}

const pausar=()=>{
    video1.pause()
}

reproducir()
pausar()




/*TRATANDO DE CAMBIAR EL COLOR DEL NAV AL HACER SCROLL

function navChange(params) {
    
    
    window.addEventListener("scroll",()=>{
        let navegador = document.querySelector("nav");
        navegador.classList.add(".fondoNav");
        }
    )
 
}
navChange()


function navChange(){

    let navegador=document.querySelector(".noche");
    let contenedor=document.querySelector(".tema");
    

    titulo3.addEventListener('mouseover',()=>{
        let img = document.createElement('img');
        img.setAttribute("src","./murcielago.png");
        contenedor.appendChild(img);

        if (contenedor.style.backgroundColor != "darkblue") {
            contenedor.style.backgroundColor = "darkblue"
            contenedor.style.color = "black"
            
        } 

})
}
diaNoche();*/
