

const getData = async (pokemon) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    return response.data
};

const createSprite = (sprite) => {
    const html = `<img src="${sprite}" class="poke-sprite">`;
    document.querySelector('.sprite-div').insertAdjacentHTML('beforeend', html);
};

const createInfo = (name, height, weight, types) => {
    const html = `<li class="list-group-item">Name: ${name}</li><br><li class="list-group-item">Height: ${height} feet</li><br><li class="list-group-item">Weight: ${weight} pounds</li><br>`;
    document.querySelector('.info-group').insertAdjacentHTML('beforeend', html);
    for (value of types) {
        let typeHtml = `<li class="list-group-item">Type(s): ${value['type']['name']}</li><br>`
        document.querySelector('.info-group').insertAdjacentHTML('beforeend', typeHtml);
    }
    
};

const createMoves = (moves) => {
    moves.forEach(element => {
        let html = `<li class="list-group-item">${element['move']['name']}</li><br>`;
        document.querySelector('.moves-group').insertAdjacentHTML('beforeend', html);
    });
};

const loadData = async () => {
    event.preventDefault();
    document.getElementsByClassName('poke')[0].innerHTML = "";
    document.getElementsByClassName('poke')[1].innerHTML = "";
    document.getElementsByClassName('poke')[2].innerHTML = "";
    let search = document.getElementById('pokeSearch').value;
    const pokeData = await getData(search);
    createSprite(pokeData.sprites['front_default']);
    createInfo(pokeData.name, pokeData.height, pokeData.weight, pokeData.types);
    createMoves(pokeData.moves);
};