document.addEventListener("DOMContentLoaded", function() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/json/casas.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const casas = JSON.parse(this.responseText);

            function mostrarCasas() {
                const inmueblesDiv = document.getElementById("inmuebles");

                casas.forEach(casa => {
                    const casaDiv = document.createElement("div");
                    casaDiv.classList.add("img");

                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    img.src = casa.imagen;
                    img.alt = casa.titulo;
                    figure.appendChild(img);

                    const infoDiv = document.createElement("div");
                    infoDiv.classList.add("info");

                    const titulo = document.createElement("h2");
                    titulo.textContent = casa.titulo;

                    const precio = document.createElement("p");
                    precio.textContent = `Precio: $${casa.precio}`;

                    const ubicacion = document.createElement("p");
                    ubicacion.textContent = `Ubicación: ${casa.ubicacion}`;

                    const descripcion = document.createElement("p");
                    descripcion.textContent = casa.descripcion;

                    infoDiv.appendChild(titulo);
                    infoDiv.appendChild(precio);
                    infoDiv.appendChild(ubicacion);
                    infoDiv.appendChild(descripcion);

                    casaDiv.appendChild(figure);
                    casaDiv.appendChild(infoDiv);

                    inmueblesDiv.appendChild(casaDiv);
                });
            }

            mostrarCasas();
        }
    }
});
