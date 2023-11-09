document.addEventListener("DOMContentLoaded", function () {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "/json/habitaciones.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const habitaciones = JSON.parse(this.responseText);

            function mostrarHabitaciones() {
                const habitacionesDiv = document.getElementById("habitaciones");

                habitaciones.forEach((habitacion) => {
                    const habitacionDiv = document.createElement("div");
                    habitacionDiv.classList.add("img");

                    const figure = document.createElement("figure");
                    const img = document.createElement("img");
                    img.src = habitacion.imagen;
                    img.alt = habitacion.titulo;
                    figure.appendChild(img);

                    const infoDiv = document.createElement("div");
                    infoDiv.classList.add("info");

                    const titulo = document.createElement("h2");
                    titulo.textContent = habitacion.titulo;

                    const precio = document.createElement("p");
                    precio.textContent = `Precio: $${habitacion.precio}`;

                    const ubicacion = document.createElement("p");
                    ubicacion.textContent = `Ubicación: ${habitacion.ubicacion}`;

                    const descripcion = document.createElement("p");
                    descripcion.textContent = habitacion.descripcion;

                    infoDiv.appendChild(titulo);
                    infoDiv.appendChild(precio);
                    infoDiv.appendChild(ubicacion);
                    infoDiv.appendChild(descripcion);

                    habitacionDiv.appendChild(figure);
                    habitacionDiv.appendChild(infoDiv);

                    habitacionesDiv.appendChild(habitacionDiv);
                });
            }

            mostrarHabitaciones();
        }
    };
});
