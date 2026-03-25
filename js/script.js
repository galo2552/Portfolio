document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL INTERRUPTOR DE TEMAS ---
    const btnTema = document.getElementById("btn-tema");
    const body = document.body;

    btnTema.addEventListener("click", () => {
        // La propiedad 'toggle' agrega la clase si no la tiene, y se la quita si ya la tiene
        body.classList.toggle("tema-corporativo");

        // Cambiamos el texto del botón dependiendo del tema activo
        if (body.classList.contains("tema-corporativo")) {
            btnTema.innerHTML = "Modo Brutal ";
        } else {
            btnTema.innerHTML = "Modo Corporativo ";
        }
    });

    // --- ANIMACIONES GSAP ---
    // Hacemos que la página entre con estilo al cargar
    gsap.from(".hero-textos > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
    });

gsap.from(".caja-foto", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
        clearProps: "all"
    });
});
