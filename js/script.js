document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll(
      "#inicio h1, #inicio p, #sobre-mi, #portafolio, #servicios, #tecnologias, #contacto"
    );

    const appearOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("fade-in");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
    // Selecciona el elemento del header
const header = document.getElementById('header');

// Función para manejar el scroll
function handleScroll() {
if (window.scrollY > 50) { // Ajusta el valor según lo que necesites
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
}

// Escucha el evento de scroll
window.addEventListener('scroll', handleScroll);

  });