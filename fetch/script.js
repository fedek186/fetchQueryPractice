fetch("https://rickandmortyapi.com/api/character")
.then(function (respuesta) {return respuesta.json();})
.then(function (informacion) {
    let data = informacion.results;
    console.log(data);
    let lista = document.querySelector(".characterList");
    for (let i = 0; i<12; i++) {
    let characters = 
    '<article>' +
        `<a href= "detalle.html?id=${data[i].id}">` +
            '<img src= " ' + data[i].image + ' " >' + 
            '<p>' + data[i].name + '</p>' +
            '<P>' + data[i].status + '</p>' +
        '</a>' +
    '</article>';
    lista.innerHTML += characters; 
    };
})
.catch(function(error) {
    let h1 = document.querySelector("h1");
    h1.innerText = "ERROR  EN LA CONEXION CON LA API";
    h1.style = "color:red";
  })
  
  