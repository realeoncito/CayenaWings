document.addEventListener(
    "DOMContentLoaded",
    cargando
);

function cargando(){
    const carga=document.querySelector(".cargando");
    setTimeout(()=>{
        carga.style.opacity="0";
        setTimeout(()=>{
            carga.style.visibility="hidden";
        },2000);
    },2000);
}