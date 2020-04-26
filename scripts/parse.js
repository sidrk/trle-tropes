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

fetch("data/tropes.json")
  .then((response) => response.json())
  .then((json) => listTropes(json));

console.log("Scripts loaded.");
