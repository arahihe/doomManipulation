const CARDS_CONTAINER = document.querySelector("#card-container");

const FILM = {
    id: 555,
    filmname: 'Her',
    desc: 'En Los Ángeles, un escritor desanimado desarrolla una especial relación amorosa con el sistema operativo de su computadora, una intuitiva y sensible entidad llamada Samantha.',
    year: 2013,
    fav_moments: {
        moments: [
            'Dear Catherine...',
            'Beach date w/Samantha',
            'Parting of Samantha',
        ],
    },
};


//Sections
const card = document.createElement("div");
const name_section = document.createElement("h4");
const desc_section = document.createElement("p");
const year_section = document.createElement("p");
const moments_section = document.createElement("div");

//list
const momentsList = FILM.fav_moments.moments.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(momentsList);

//Card & info
name_section.textContent = FILM.filmname;
desc_section.textContent = FILM.desc;
year_section.textContent = FILM.year;
moments_section.append(...momentsList);
card.append(name_section, desc_section, year_section, moments_section);

//card to container
CARDS_CONTAINER.append(card);