function listTropes(json: any) {
  const tropesList = document.getElementById('tropes-list');

  // json.sort()
  for (const tropeName in json) {
    const trope = json[tropeName];
    const description = trope.description;
    const name = trope.name;
    console.log(trope);

    // Add the trope to the list
    const li = document.createElement('li');
    const liName = document.createElement('div');
    liName.innerHTML = name;
    li.appendChild(liName);
    const liDescription = document.createElement('div');
    liDescription.innerHTML = description;
    li.appendChild(liDescription);

    tropesList!.appendChild(li);
  }
}

function listLevels(json: any) {
  const levelsList = document.getElementById('levels-list');
  for (const levelName in json) {
    const level = json[levelName];
    const name = level.name;
    console.log(level);

    // Add the level to the list
    const li = document.createElement('li');
    const liName = document.createElement('div');
    liName.innerHTML = name;
    li.appendChild(liName);

    levelsList!.appendChild(li);
  }
}

fetch('data/tropes.json')
  .then(response => response.json())
  .then(json => listTropes(json));

fetch('data/levels.json')
  .then(response => response.json())
  .then(json => listLevels(json));

console.log('Scripts loaded.');
