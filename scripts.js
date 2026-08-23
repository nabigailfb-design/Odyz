const paginas = document.querySelectorAll(".pagina");
const botonAbrir = document.getElementById("abrir");
const botonSiguiente = document.getElementById("siguiente");

let paginaActual = 0;

paginas[0].classList.add("activa");

botonAbrir.addEventListener("click", () => {
    paginaActual = 1;

    paginas[0].classList.remove("activa");
    paginas[1].classList.add("activa");

    botonAbrir.classList.add("oculto");

    document.querySelector(".libro").classList.add("entrar");
});

botonSiguiente.addEventListener("click", () => {

    if (paginaActual < paginas.length - 1) {

        paginas[paginaActual].classList.remove("activa");

        paginaActual++;

        paginas[paginaActual].classList.add("activa");

    }

    if (paginaActual === paginas.length - 1) {
        botonSiguiente.classList.add("oculto");
    }
});
