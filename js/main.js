/* ============================================================
   SIGG — Finca Las Mercedes
   Lógica principal del sitio
   ============================================================ */

// Espera a que el HTML esté cargado antes de tocar la página.
document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Año actual en el pie ----------
       Así no hay que editar el año a mano cada enero. */
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

    /* ---------- Aviso en los módulos que aún no existen ----------
       Mientras las páginas de cada módulo no estén construidas,
       el enlace no lleva a ninguna parte. En vez de dejar que la
       página salte al inicio, avisamos de que está en construcción.

       Cuando crees la página de un módulo, cambia su href="#" por
       la ruta real (por ejemplo href="modulos/hato.html") y quita
       el aria-disabled="true" del HTML. */
    const enlaces = document.querySelectorAll('.modulo__enlace[aria-disabled="true"]');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (evento) {
            evento.preventDefault();

            const nombre = enlace.querySelector(".modulo__nombre").textContent;
            alert("El módulo «" + nombre + "» todavía está en construcción.");
        });
    });

    /* ---------- Desplazamiento suave ----------
       Hace que los enlaces internos (#inicio, #modulos, etc.)
       se desplacen de forma fluida hasta la sección elegida. */
    const enlacesInternos = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    enlacesInternos.forEach(function (enlace) {
        enlace.addEventListener("click", function (evento) {
            const destino = document.querySelector(this.getAttribute("href"));

            if (destino) {
                evento.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    /* ---------- Mensaje de inicio ----------
       Solo visible para desarrolladores en la consola. */
    console.log("SIGG - Sitio web cargado correctamente.");

});