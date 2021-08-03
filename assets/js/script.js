let torresContainer = document.createElement("section");
let torreUm = document.createElement("div");
let torreDois = document.createElement("div");
let torreTres = document.createElement("div");
let discoUm = document.createElement("div");
let discoDois = document.createElement("div");
let discoTres = document.createElement("div");
let discoQuatro = document.createElement("div");
let legendas = document.createElement("section");
let legendaStart = document.createElement("div");
let legendaOffSet = document.createElement("div");
let legendaEnd = document.createElement("div");



function createTower() {
    torresContainer.classList.add("torres");
    document.body.appendChild(torresContainer);

    torreUm.classList.add("torre");
    torreUm.id = "torreum";
    torresContainer.appendChild(torreUm);

    torreDois.classList.add("torre");
    torreDois.id = "torredois";
    torresContainer.appendChild(torreDois);

    torreTres.classList.add("torre");
    torreTres.id = "torretres";
    torresContainer.appendChild(torreTres);

    discoQuatro.classList.add("disco");
    discoQuatro.id = "quatro";
    torreUm.appendChild(discoQuatro);

    discoTres.classList.add("disco");
    discoTres.id = "tres";
    torreUm.appendChild(discoTres);

    discoDois.classList.add("disco");
    discoDois.id = "dois";
    torreUm.appendChild(discoDois);

    discoUm.classList.add("disco");
    discoUm.id = "um";
    torreUm.appendChild(discoUm);

    legendas.classList.add("legendas");
    document.body.appendChild(legendas);

    legendaStart.innerText = "Start";
    legendaOffSet.innerText = "Offset";
    legendaEnd.innerText = "End";

    legendas.appendChild(legendaStart);
    legendas.appendChild(legendaOffSet);
    legendas.appendChild(legendaEnd);
}

createTower();


