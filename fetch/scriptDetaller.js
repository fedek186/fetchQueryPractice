let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');
console.log(id);

fetch(  `https://rickandmortyapi.com/api/character/${id}`)
.then(function (respuesta) {return respuesta.json();})
.then(function (informacion) {
    console.log(informacion);
    let article = document.querySelector("article");
    article.innerHTML = 
    `<img src=${informacion.image}>
    <div>
        <h2> ${informacion.name} </h2>
        <p> ${informacion.status} </p>
        <p> ${informacion.gender} </p>
    <div>
    `
})
.catch(function(error) {
    let h1 = document.querySelector("h1");
    h1.innerText = "ERROR  EN LA CONEXION CON LA API";
    h1.style = "color:red";
  })
  
