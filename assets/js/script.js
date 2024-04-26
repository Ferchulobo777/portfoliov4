/* Guardar la ruta de los proyectos en una Variable */
const rutaProyecto = "../../data/proyectos.json";

/* Funcion para cargar y mostrar los Proyectos */
async function cargarProyectos() {
    try {
        const response = await fetch(rutaProyecto);
        const proyectos = await response.json();
    
        const contenedorProyectos = document.getElementById('proyectos-contenedor');

        proyectos.forEach(proyecto => {
            let proyectoHTML = `
                <div class="col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="700">
                    <div class="proyecto">
                        <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
                        <div class="overlay">
                            <p>${proyecto.nombre}</p>
                            <div class="iconos-contenedor">
                                <a href="${proyecto.github}" target="_blank" rel="noopener noreferrer">
                                    <i class="bi bi-github"></i>
                                </a>
                                <a href="${proyecto.link}" target="_blank" rel="noopener noreferrer">
                                    <i class="bi bi-laptop"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            contenedorProyectos.innerHTML += proyectoHTML;
        });
    } catch (error) {
        console.log("Error al cargar proyectos", error);
    }
}

/* Llamar a la funcion para cargar los proyectos al cargar la pagina */
document.addEventListener('DOMContentLoaded', cargarProyectos);

document.getElementById("currentYear").textContent = new Date().getFullYear()
