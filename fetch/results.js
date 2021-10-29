let searchResults = document.querySelector(".search-results");
console.log("fede" + searchResults);

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('busqueda');
console.log(busqueda);