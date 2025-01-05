// Seleccionar todos los enlaces de navegación
const navLinks = document.querySelectorAll('.contenedor-navegacion a');

// Función para manejar el estado activo
function handleActiveState() {
    // Obtener la posición actual de scroll
    const currentScroll = window.scrollY;
    
    // Obtener todas las secciones
    const sections = document.querySelectorAll('section[id]');
    
    // Recorrer todas las secciones para encontrar la sección visible actual
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Ajuste para el header fijo
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            // Remover la clase active de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
                link.style.color = '#ffffff'; // Letra blanca para enlaces inactivos
                link.style.backgroundColor = 'transparent';
            });
            
            // Agregar la clase active al enlace correspondiente
            const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
                activeLink.style.color = '#ffffff'; // Letra blanca para enlace activo
                activeLink.style.backgroundColor = '#eb840e'; // Fondo naranja para enlace activo
            }
        }
    });
}

// Click handler para los enlaces
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover active de todos los enlaces
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.style.color = '#ffffff';
            link.style.backgroundColor = 'transparent';
        });
        
        // Agregar active al enlace clickeado
        this.classList.add('active');
        this.style.color = '#ffffff';
        this.style.backgroundColor = '#eb840e';
        
        // Scroll suave a la sección
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Escuchar el evento scroll
window.addEventListener('scroll', handleActiveState);

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', handleActiveState);