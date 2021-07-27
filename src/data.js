/*export const filterData = (data, conditions) => {
    let resultFilter = data.filter(
        (pelicula) => pelicula["director"] == conditions
      );
      return resultFilter;
  };*/
  import data from "./data/ghibli/ghibli.js";

  const filmsdata = data["films"];
  const filmshtml = document.getElementById("peliculasData");
  
  let htmls = "";
       const peliculasGhibli = {
        peliculasDefault:()=>{
            filmsdata.forEach((pelicula) => {
                let auxPelicula = `<div class="films"> 
                    <img class="poster" src= "${pelicula["poster"]}">
                        <div class="contenido">
                          <h3 class="title">${pelicula["title"]}</h3>
                          <p class="description">${pelicula["description"]}</p>
                          <p class="director">Director: ${pelicula["director"]}</p>
                          <p class="producer">Producer: ${pelicula["producer"]}</p>
                          <p class="date">Date: ${pelicula["release_date"]}</p>
                          <p class="score">Score: ${pelicula["rt_score"]}</p>
                        </div>
                </div>`;
            
                htmls += auxPelicula;
              });
            
              filmshtml.innerHTML = htmls;
            },
      

        peliculasPorSeleccion:(peliculas)=> {
        htmls = "";
        peliculas.forEach((pelicula) => {
          let auxPelicula = `<div class="films"> 
                      <img class="poster" src= "${pelicula["poster"]}">
                      <div class="contenido">
                        <h3 class="title">${pelicula["title"]}</h3>
                        <p class="description">${pelicula["description"]}</p>
                        <p class="director">Director: ${pelicula["director"]}</p>
                        <p class="producer">Producer: ${pelicula["producer"]}</p>
                        <p class="date">Date: ${pelicula["release_date"]}</p>
                        <p class="score">Score: ${pelicula["rt_score"]}</p>
                      </div>
              </div>`;
      
          htmls += auxPelicula;
        });
        filmshtml.innerHTML = htmls;
      },
      filterData:(data, conditions)=>{
        
        let resultFilter = data.filter(
            (pelicula) => pelicula["director"] == conditions
            );
            return resultFilter;
    },
      orderData:(data, conditions)=>{
        let resultOrder = [];
            if (conditions == 1) {
        resultOrder = data.sort(function (p1, p2) {
      if (p1["title"] > p2["title"]) {
        return 1;
      }
      if (p1["title"] < p2["title"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 2) {
    resultOrder = data.sort(function (p1, p2) {
      if (p1["title"] < p2["title"]) {
        return 1;
      }
      if (p1["title"] > p2["title"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 3) {
    resultOrder = data.sort(function (p1, p2) {
      if (p1["release_date"] > p2["release_date"]) {
        return 1;
      }
      if (p1["release_date"] < p2["release_date"]) {
        return -1;
      }
      return 0;
    });
  } else if (conditions == 4) {
    resultOrder = data.sort(function (p1, p2) {
      if (p1["release_date"] < p2["release_date"]) {
        return 1;
      }
      if (p1["release_date"] > p2["release_date"]) {
        return -1;
      }
      return 0;
        });
    }
    else if(conditions==6){
      let resultOrder = data.sort((a,b)=>{
        return a.rt_score-b.rt_score;
      });
      return resultOrder;
    }
    else if(conditions==5){
      let resultOrder = data.sort((a,b)=>{
        return a.rt_score-b.rt_score;
      })
      return resultOrder.reverse();
    }
    return resultOrder;

      }

    }
    
    export default peliculasGhibli;
    

