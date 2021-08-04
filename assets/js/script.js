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
let movesCointainer =document.getElementById("passos");
let moves = 0;
let botao = document.createElement('button');
let footer = document.createElement('div');



function createTower() {
    countMoves();
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

    document.body.appendChild(footer)
    footer.appendChild(botao)
    footer.id = "footer"
    botao.id = "botao"
    botao.innerText = "Reset"
}

createTower();


let clickUm = false;
let clickDois = false;
let clickTres = false;
torreUm.addEventListener('click', function (e) {
    if (clickDois === true) {
        if (torreUm.lastElementChild === null) {
            torreUm.appendChild(torreDois.lastElementChild);
            moves++;
            countMoves();
            clickDois = false;
            clickUm = false;
        } else if (torreUm.lastElementChild != null) {
            if (torreDois.lastElementChild.clientWidth < torreUm.lastElementChild.clientWidth) {
                torreUm.appendChild(torreDois.lastElementChild);
                moves++;
                countMoves();
                clickDois = false;
                clickUm = false;
            } else {
                clickDois = false;
                clickUm = false;
            }
        }
    }
    if (clickTres === true) {
        if (torreUm.lastElementChild === null) {
            torreUm.appendChild(torreTres.lastElementChild);
            moves++;
            countMoves();
            clickTres = false;
            clickUm = false;
        } else if (torreUm.lastElementChild != null) {
            if (torreTres.lastElementChild.clientWidth < torreUm.lastElementChild.clientWidth) {
                torreUm.appendChild(torreTres.lastElementChild);
                moves++;
                countMoves();
                clickTres = false;
                clickUm = false;
            } else {
                clickTres = false;
                clickUm = false;
            }
        }
    }
})

torreDois.addEventListener('click', function (e) {
    if (clickUm === true) {
        if (torreDois.lastElementChild === null) {
            torreDois.appendChild(torreUm.lastElementChild);
            moves++;
            countMoves();
            clickUm = false;
            clickDois = false;
        } else if (torreDois.lastElementChild != null) {
            if (torreUm.lastElementChild.clientWidth < torreDois.lastElementChild.clientWidth) {
                torreDois.appendChild(torreUm.lastElementChild);
                moves++;
                countMoves();
                clickUm = false;
                clickDois = false;
            } else {
                clickUm = false;
                clickDois = false;
            }
        }
    }
    if (clickTres === true) {
        if (torreDois.lastElementChild === null) {
            torreDois.appendChild(torreTres.lastElementChild);
            moves++;
            countMoves();
            clickTres = false;
            clickDois = false;
        } else if (torreDois.lastElementChild != null) {
            if (torreTres.lastElementChild.clientWidth < torreDois.lastElementChild.clientWidth) {
                torreDois.appendChild(torreTres.lastElementChild);
                moves++;
                countMoves();
                clickTres = false;
                clickDois = false;
            } else {
                clickTres = false;
                clickDois = false;
            }
        }
    }
})

torreTres.addEventListener('click', function (e) {
    if (clickUm === true) {
        if (torreTres.lastElementChild === null) {
            torreTres.appendChild(torreUm.lastElementChild);
            moves++;
            countMoves();
            checkVictory()
            clickUm = false;
            clickTres = false;
        } else if (torreTres.lastElementChild != null) {
            if (torreUm.lastElementChild.clientWidth < torreTres.lastElementChild.clientWidth) {
                torreTres.appendChild(torreUm.lastElementChild);
                moves++;
                countMoves();
                checkVictory()
                clickUm = false;
                clickTres = false;
            } else {
                clickUm = false;
                clickTres = false;
            }
        }
    }
    if (clickDois === true) {
        if (torreTres.lastElementChild === null) {
            torreTres.appendChild(torreDois.lastElementChild);
            moves++;
            countMoves();
            checkVictory()
            clickDois = false;
            clickTres = false;
        } else if (torreTres.lastElementChild != null) {
            if (torreDois.lastElementChild.clientWidth < torreTres.lastElementChild.clientWidth) {
                torreTres.appendChild(torreDois.lastElementChild);
                moves++;
                countMoves();
                checkVictory()
                clickDois = false;
                clickTres = false;
            } else {
                clickDois = false;
                clickTres = false;
            }
        }
    }
})

discoUm.addEventListener('click', function (e) {
    if (e.currentTarget === torreUm.lastElementChild) {
        clickUm = true;
        console.log(clickUm)
    }
    if (e.currentTarget === torreDois.lastElementChild) {
        clickDois = true;
        console.log(clickDois)
    }
    if (e.currentTarget === torreTres.lastElementChild) {
        clickTres = true;
        console.log(clickTres)
    }
})
discoDois.addEventListener('click', function (e) {
    if (e.currentTarget === torreUm.lastElementChild) {
        clickUm = true;
        console.log(clickUm)
    }
    if (e.currentTarget === torreDois.lastElementChild) {
        clickDois = true;
        console.log(clickDois)
    }
    if (e.currentTarget === torreTres.lastElementChild) {
        clickTres = true;
        console.log(clickTres)
    }
})
discoTres.addEventListener('click', function (e) {
    if (e.currentTarget === torreUm.lastElementChild) {
        clickUm = true;
        console.log(clickUm)
    }
    if (e.currentTarget === torreDois.lastElementChild) {
        clickDois = true;
        console.log(clickDois)
    }
    if (e.currentTarget === torreTres.lastElementChild) {
        clickTres = true;
        console.log(clickTres)
    }
})
discoQuatro.addEventListener('click', function (e) {
    if (e.currentTarget === torreUm.lastElementChild) {
        clickUm = true;
        console.log(clickUm)
    }
    if (e.currentTarget === torreDois.lastElementChild) {
        clickDois = true;
        console.log(clickDois)
    }
    if (e.currentTarget === torreTres.lastElementChild) {
        clickTres = true;
        console.log(clickTres)
    }
})
function countMoves(){
   return movesCointainer.innerText=`Movimentos: ${moves}`;
}
function checkVictory() {
    if (torreTres.childElementCount === 4) {
        window.alert("Parabéns você venceu!")
    }
}

botao.addEventListener("click",function(){
    moves = 0;
    createTower()
})