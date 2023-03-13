"use strick";


let elList = document.querySelector(".pakimons__ul"),
    elForm = document.querySelector(".box__form"),
    elSelect = document.querySelector(".box__select"),
    elSearch = document.querySelector(".box__search");

renderUi(pokemons);

function renderUi(arr) {

    for (let i of arr) {

        let elItem = document.createElement('li');
        elItem.setAttribute("class", "pakimons__item");

        elItem.innerHTML = `
    
        <div class="pakimons__img">
            <img src="${i.img}" alt="${i.name}">
        </div>

        <div class="pakimons__info">
            <h3 class="pakimons__title">${i.name}</h3>
            <p class="pakimons__text">${i.type}</p>
            <span class="pakimons__weight">${i.weight}</span>
            <span class="pakimons__age">Age: ${i.avg_spawns}</span>
        </div>
    `

        elList.appendChild(elItem);

    }
};


let candy = [];

function candies() {
    pokemons.forEach(items => {
        if (!candy.includes(items.candy)) {
            candy.push(items.candy);
        }
    });
    candy.forEach((item) => {
        let elOption = document.createElement('option');
        elOption.textContent = item;
        elSelect.append(elOption);
    });
}
candies();

elForm.addEventListener('change', (evt) => {
    evt.preventDefault();
    let value = elSelect.value;

    elList.innerHTML = '';

    if (value == 'all') {
        renderUi(pokemons)
    } else {
        const candyArr = pokemons.filter((item) => {
            return value === item.candy;
        });
        renderUi(candyArr);

    }
});

elSearch.addEventListener("keyup", (evt) => {
    evt.preventDefault();
    let value;

    if (elSearch.value != " ") {
        value = evt.target.value;

        let nameVal = pokemons.filter(item => {
            return item.name.includes(value);
        })

        elList.innerHTML = '';

        renderUi(nameVal);
    } else {
        renderUi(pokemons);
    }

});