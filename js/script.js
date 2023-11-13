const lista = document.getElementById('character-list');
const back = document.getElementById('prev-page');
const forth = document.getElementById('next-page');

let ENDPOINT_URL = `https://rickandmortyapi.com/api/character/?page=1`;
getData(ENDPOINT_URL);

let info;
let next;
let prev;
let last;

async function getData(url) {
    lista.innerHTML = ''
    const response = await fetch(url);
    if (!response.ok) {
        console.log('¡Algo no funciona!');
    }
    const data = await response.json();
    let dataArray = data.results;
    info = data.info;
    next = info.next;
    prev = info.prev;

    dataArray.forEach(item => {
        let result = `
        <div class='container'>
            <li class='imagen'><img src='${item.image}'/></li>
            <li class='text'>Name: ${item.name}</li>
            <li class='text'>Species: ${item.species}</li>
        </div>
            `;
        lista.innerHTML += result;
    });
}

forth.addEventListener('click', e => {
    e.preventDefault();
    if(next !== null) {
        getData(next)
    }
});

back.addEventListener('click', e => {
    e.preventDefault();
    if(prev !== null) {
        getData(prev)
    }
});
