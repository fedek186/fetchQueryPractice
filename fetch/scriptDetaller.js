window.addEventListener("load", function (e) {
  let queryString = location.search;
  let queryStringObj = new URLSearchParams(queryString);
  let id = queryStringObj.get("id");

  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (informacion) {
      console.log(informacion);
      let article = document.querySelector("article");
      article.innerHTML = `<img src=${informacion.image}>
        <div>
            <h2> ${informacion.name} </h2>
            <p> ${informacion.status} </p>
            <p> ${informacion.gender} </p>
            <button> save </button>
        <div>
        `;
      
      let boton = document.querySelector("button");
      if (localStorage.getItem("id")== null) {
        let arrayId = [];
        localStorage.setItem('id',JSON.stringify(arrayId));
      } 
      
      else
      {
        let array = JSON.parse(localStorage.getItem('id'));
         if(array.indexOf(id) != -1)
          {
            boton.style.color = "Green";
          }        
      };

      ///////////////////

      boton.addEventListener("click", function (e) {
        let array = JSON.parse(localStorage.getItem('id'));
        if (array.indexOf(id) != -1 ) {
            boton.style.color = "black";
            let posicion = array.indexOf(id); 
            array.splice(posicion,1);
            localStorage.setItem('id',JSON.stringify(array));
            console.log('la sacaron' + localStorage );
        } else {
            boton.style.color = "green";
            array.push(id);
            localStorage.setItem('id',JSON.stringify(array));
            console.log('la pusieron' + localStorage );
        }

      });

  
    })
    .catch(function (error) {
      let h1 = document.querySelector("h1");
      h1.innerText = "ERROR  EN LA CONEXION CON LA API";
      h1.style = "color:red";
    });

  console.log(localStorage);
});
