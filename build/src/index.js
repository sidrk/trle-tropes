"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listTropes(json) {
    const tropesList = document.getElementById('tropes-list');
    // json.sort()
    for (const tropeName in json) {
        const trope = json[tropeName];
        const description = trope.description;
        const name = trope.name;
        // console.log(trope);
        // Add the trope to the list
        const li = document.createElement('li');
        const liName = document.createElement('div');
        liName.innerHTML = name;
        li.appendChild(liName);
        const liDescription = document.createElement('div');
        liDescription.innerHTML = description;
        li.appendChild(liDescription);
        tropesList.appendChild(li);
    }
}
function listLevels(json) {
    const levelsList = document.getElementById('levels-list');
    for (const levelName in json) {
        const level = json[levelName];
        const name = level.name;
        // console.log(level);
        // Add the level to the list
        const li = document.createElement('li');
        const liName = document.createElement('div');
        liName.innerHTML = name;
        // const tropes: Trope[] = [];
        for (const trope of level.tropes) {
            const tropeBadge = document.createElement('span');
            tropeBadge.className = 'tag';
            tropeBadge.innerText = trope.name;
            liName.appendChild(tropeBadge);
        }
        li.appendChild(liName);
        levelsList.appendChild(li);
    }
}
fetch('data/tropes.json')
    .then(response => response.json())
    .then(json => listTropes(json));
fetch('data/levels.json')
    .then(response => response.json())
    .then(json => listLevels(json));
console.log('Scripts loaded.');
//# sourceMappingURL=index.js.map