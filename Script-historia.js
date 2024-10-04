let video1 = document.querySelector("video");
let tiempoActual;


const reproducir=()=>{
    video1.play()
    let duracion=document.querySelector(".showTime");
    duracion.textContent=video1.currentTime;
    tiempoActual=setInterval(() => {
        let duracion=document.querySelector(".showTime");
        duracion.textContent="00:"+video1.currentTime.toFixed(0);
    }, 1000)
}
    

const pausar=()=>{
    video1.pause();
    clearInterval(tiempoActual);
}


const transformarTiempo=(tiempo)=>{

}





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
