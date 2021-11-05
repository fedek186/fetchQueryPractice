let arrayFavoritos = JSON.parse(localStorage.getItem('id'));
console.log(arrayFavoritos[0]);
let lista = document.querySelector(".characterList");

for (let i = 0; i < arrayFavoritos.length; i++) {
    fetch(`https://rickandmortyapi.com/api/character/${arrayFavoritos[i]}`) 
    .then(function (respuesta) {return respuesta.json();})
    .then(function (informacion) {
    let character = 
    '<article>' +
        `<a href= "detalle.html?id=${informacion.id}">` +
            '<img src= " ' + informacion.image + ' " >' + 
            '<p>' + informacion.name + '</p>' +
            '<P>' + informacion.status + '</p>' +
        '</a>' +
    '</article>';
    lista.innerHTML += character; 
})
.catch(function(error) {
    let h1 = document.querySelector("h1");
    h1.innerText = "ERROR  EN LA CONEXION CON LA API";
    h1.style = "color:red";
  })    

}

  