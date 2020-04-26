function listTropes(json) {
  var tropesList = document.getElementById("tropes-list");
  for (tropeName in json) {
    var trope = json[tropeName];
    var description = trope.description;
    var name = trope.name;
    console.log(trope);

    // Add the trope to the list
    var li = document.createElement("li");
    var liName = document.createElement("div");
    liName.innerHTML = name;
    li.appendChild(liName);
    var liDescription = document.createElement("div");
    liDescription.innerHTML = description;
    li.appendChild(liDescription);

    tropesList.appendChild(li);
  }
}

function listLevels(json) {
  var levelsList = document.getElementById("levels-list");
  for (levelName in json) {
    var level = json[levelName];
    var name = level.name;
    console.log(level);

    // Add the level to the list
    var li = document.createElement("li");
    var liName = document.createElement("div");
    liName.innerHTML = name;
    li.appendChild(liName);

    levelsList.appendChild(li);
  }
}

fetch("data/tropes.json")
  .then((response) => response.json())
  .then((json) => listTropes(json));

fetch("data/levels.json")
  .then((response) => response.json())
  .then((json) => listLevels(json));

console.log("Scripts loaded.");
