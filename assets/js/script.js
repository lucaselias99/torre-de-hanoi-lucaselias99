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

torreUm.addEventListener('click', function(e) {
    clickum = true;
    //console.log(clickum)
    //console.log(e.currentTarget)
    if(clickdois===true) {
        if(torreUm.lastElementChild === null){
            torreUm.appendChild(torreDois.lastElementChild);
            clickdois = false;
            clickum = false;
        } else if(torreUm.lastElementChild != null){
            if(torreDois.lastElementChild.clientWidth < torreUm.lastElementChild.clientWidth ){
                torreUm.appendChild(torreDois.lastElementChild);
                clickdois = false;
                clickum = false;
            }
        }
    }
    if(clicktres===true) {
        if(torreUm.lastElementChild === null){
            torreUm.appendChild(torreTres.lastElementChild);
            clicktres = false;
            clickum = false;
        } else if(torreUm.lastElementChild != null){
            if(torreTres.lastElementChild.clientWidth < torreUm.lastElementChild.clientWidth ){
                torreUm.appendChild(torreTres.lastElementChild);
                clicktres = false;
                clickum = false;
            }
        }
    }
})
torreDois.addEventListener('click',function(e) {
    clickdois = true;
    //console.log(clickdois)
    //console.log(e.currentTarget)
    if(clickUm===true) {
        if(torreDois.lastElementChild === null){
            torreDois.appendChild(torreUm.lastElementChild);
            clickum = false;
            clickdois = false;
        } else if(torreDois.lastElementChild != null){
            if(torreUm.lastElementChild.clientWidth < torreDois.lastElementChild.clientWidth ){
                torreDois.appendChild(torreUm.lastElementChild);
                clickum = false;
                clickdois = false;
            }
        }
    }
    if(clicktres===true) {
        if(torreDois.lastElementChild === null){
            torreDois.appendChild(torreTres.lastElementChild);
            clicktres = false;
            clickdois = false;
        } else if(torreDois.lastElementChild != null){
            if(torreTres.lastElementChild.clientWidth < torreDois.lastElementChild.clientWidth ){
                torreDois.appendChild(torreTres.lastElementChild);
                clicktres = false;
                clickdois = false;
            }
        }
    }
})
torreTres.addEventListener('click',function(e) {
    clicktres = true;
    //console.log(clicktres)
    //console.log(e.currentTarget)
    if(clickum===true) {
        if(torreTres.lastElementChild === null){
            torreTres.appendChild(torreUm.lastElementChild);
            clickum = false;
            clicktres = false;
        } else if(torreTres.lastElementChild != null){
            if(torreUm.lastElementChild.clientWidth < torreTres.lastElementChild.clientWidth ){
                torreTres.appendChild(torreUm.lastElementChild);
                clickum = false;
                clicktres = false;
            }
        }
    }
    if(clickdois===true) {
        if(torreTres.lastElementChild === null){
            torreTres.appendChild(torreDois.lastElementChild);
            clickdois = false;
            clicktres = false;
        } else if(torreTres.lastElementChild != null){
            if(torreDois.lastElementChild.clientWidth < torreTres.lastElementChild.clientWidth ){
                torreTres.appendChild(torreDois.lastElementChild);
                clickdois = false;
                clicktres = false;
            }
        }
    }
})
