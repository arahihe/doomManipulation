const CARDS_CONTAINER = document.querySelector("#card-container");
const FILMS = [
    {
        id: 555,
        filmname: "Her",
        description: "Theodore is on the verfe of his divorce. While he remembers the moment of his marriage, he adquires an Operating System with an evolution consience. A kinky and tangled love story.",
        year: 2013,
        best_scenes: {
        scenes: [
            "Thedore and Samantha date on the beach, with the song that she composed.",
            "The Moon Song scene.",
            "The parting of Samantha"
            ],
        },
    },
    {
        id: 777,
        filmname: "Amélie",
        description: "Amélie founds a tin box full with toys and memories of a, once, kid. This old box will lead Amélie to a new paradigma of her life.",
        year: 2001,
        best_scenes: {
            scenes: [
                "Amélie and Nino see each other for the first time",
                "Raymond Dufayel tells Amélie to take a chance",
                "Amélie calls Ninos work"
            ],
        },
    },
];

//Sections
function createElements() {
    const cardObj = {
        name_section: document.createElement("h2"),
        desc_section: document.createElement("p"),
        year_section: document.createElement("p"),
        scenes_section: document.createElement("div"),
    };
    return cardObj;
}

//Card
function injectData(obj, films) {
    const scenesList = films.best_scenes.scenes.map((e) =>{
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
    });

    obj.name_section.textContent = films.filmname;
    obj.desc_section.textContent = films.desc;
    obj.year_section.textContent = films.year;
    obj.scenes_section.append(...scenesList);
    renderCard(obj);
}

function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.year_section,
        cardObj.scenes_section,
    );
    card.className = "div-created";
    CARDS_CONTAINER.append(card);
}

FILMS.forEach((films) => {
    const cardData = createElements();
    injectData(cardData, films);
});