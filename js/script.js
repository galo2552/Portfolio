document.addEventListener("DOMContentLoaded", () => {

    // --- CONFIGURACIÓN DE SCROLL FLUIDO (LENIS) ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    });

    // Sincronizar Lenis con ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".greeting", { y: "100%", duration: 0.8, delay: 0.2 })
      .from(".name", { y: "100%", duration: 1 }, "-=0.6")
      .from(".role", { y: "100%", duration: 1 }, "-=0.8")
      .from(".description", { opacity: 0, y: 20, duration: 1 }, "-=0.5")
      .to(".scroll-indicator", { opacity: 1, duration: 1 }, "-=0.2")
      .from(".hero-foto-container", { opacity: 0, x: 50, duration: 1.2 }, "-=1")
      .to(".scroll-indicator", { opacity: 1, duration: 1 }, "-=0.2");
    // --- EFECTO DE LUZ ---
    
    const body = document.querySelector("body");

    window.addEventListener("mousemove", (evento) => {
        const x = evento.clientX;
        const y = evento.clientY;

        body.style.setProperty("--mouse-x", `${x}px`);
        body.style.setProperty("--mouse-y", `${y}px`);
    });
// --- SCROLLTRIGGER PARA PROYECTOS ---
    
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".proyecto-card", {
        scrollTrigger: {
            trigger: "#proyectos",
            start: "top 80%",      
            toggleActions: "play none none none" 
        },
        y: 50,              
        opacity: 0,         
        duration: 0.8,      
        stagger: 0.2,       
        ease: "power3.out",
        clearProps: "all" 
    });

    // --- SCROLLTRIGGER PARA SOBRE MÍ ---

    // texto que entre desde la izquierda (x: -50)
    gsap.from(".sobre-mi-texto", {
        scrollTrigger: {
            trigger: "#sobre-mi",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        clearProps: "all"
    });

    // etiquetas de habilidades con un efecto escalonado (stagger)
    gsap.from(".habilidad-tag", {
        scrollTrigger: {
            trigger: "#sobre-mi",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)", // efecto rebote
        clearProps: "all"
    });
});