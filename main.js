import data from "./data/ghibli/ghibli.js";
import peliculasGhibli from "./data.js"

const filmsdata = data["films"];

peliculasGhibli.peliculasDefault();
// Ejecutamos por defecto la función peliculasDefault; cuando carga las peliculas al inicio (carga pagina films)

let botonFiltrar = document.getElementById("filtrar");
botonFiltrar.addEventListener("click", (e) => {
  e.preventDefault();
  let filterBy = document.getElementById("selectFiltro").value;
  let result = peliculasGhibli.filterData(filmsdata, filterBy);

  peliculasGhibli.peliculasPorSeleccion(result);
  //objeto peliculasGhibli llama a mi funcion peliculasPorSelección
});

let botonOrdenar = document.getElementById("ordenar");
botonOrdenar.addEventListener("click", () => {
  let orderBy = document.getElementById("selectOrden").value;
  let result = peliculasGhibli.orderData(filmsdata, orderBy);
  peliculasGhibli.peliculasPorSeleccion(result);
});