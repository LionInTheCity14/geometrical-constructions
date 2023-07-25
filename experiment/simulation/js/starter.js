document.querySelector("#trans1-starter").addEventListener("click",() => {
    document.querySelector("#png1-starter").style.visibility = "hidden";
    document.querySelector("#trans1-starter").style.visibility = "hidden";

    document.querySelector("#gif1-starter").style.visibility = "visible";

    timeOut = setTimeout(timeDelay1Starter, 2500);
});

let clicks = 0;

function showNextBtn(clicks){
    console.log(clicks);
    if(clicks === 5)
        setTimeout(() => document.querySelector("#nextBtnOfStarter").style.visibility = "visible", 1000);
}

function timeDelay1Starter(){
    document.querySelector("#clip1-3d-starter").style.visibility = "visible";
    document.querySelector("#clip2-3d-starter").style.visibility = "visible";
    document.querySelector("#clip3-3d-starter").style.visibility = "visible";
    document.querySelector("#clip4-3d-starter").style.visibility = "visible";
    document.querySelector("#drafter1-starter").style.visibility = "visible";
}

document.querySelector("#clip1-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip1-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip1-starter").style.visibility = "visible";
    showNextBtn(clicks += 1);
});

document.querySelector("#clip2-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip2-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip2-starter").style.visibility = "visible";
    showNextBtn(clicks += 1);
});

document.querySelector("#clip3-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip3-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip3-starter").style.visibility = "visible";
    showNextBtn(clicks += 1);
});

document.querySelector("#clip4-3d-starter").addEventListener("click", () => {
    document.querySelector("#clip4-3d-starter").style.visibility = "hidden";
    document.querySelector("#clip4-starter").style.visibility = "visible";
    showNextBtn(clicks += 1);
});

document.querySelector("#drafter1-starter").addEventListener("click", () => {
    document.querySelector("#drafter1-starter").style.visibility = "hidden";
    document.querySelector("#drafter2-starter").style.visibility = "visible";
    showNextBtn(clicks += 1);
});