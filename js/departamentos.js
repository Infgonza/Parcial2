document.addEventListener("DOMContentLoaded", function() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/json/departamentos.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const departamentos = JSON.parse(this.responseText);

            function mostrarDepartamentos() {
                const departamentosDiv = document.getElementById("departamentos");

                departamentos.forEach(departamento => {
                    const depDiv = document.createElement("div");
                    depDiv.classList.add("img");

                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    img.src = departamento.imagen;
                    img.alt = departamento.titulo;
                    figure.appendChild(img);

                    const infoDiv = document.createElement("div");
                    infoDiv.classList.add("info");

                    const titulo = document.createElement("h2");
                    titulo.textContent = departamento.titulo;

                    const precio = document.createElement("p");
                    precio.textContent = `Precio: $${departamento.precio}`;

                    const ubicacion = document.createElement("p");
                    ubicacion.textContent = `Ubicación: ${departamento.ubicacion}`;

                    const descripcion = document.createElement("p");
                    descripcion.textContent = departamento.descripcion;

                    infoDiv.appendChild(titulo);
                    infoDiv.appendChild(precio);
                    infoDiv.appendChild(ubicacion);
                    infoDiv.appendChild(descripcion);

                    depDiv.appendChild(figure);
                    depDiv.appendChild(infoDiv);

                    departamentosDiv.appendChild(depDiv);
                });
            }

            mostrarDepartamentos();
        }
    }
});
