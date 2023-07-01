function move() {
    document.getElementById("png1").style.animationPlayState = "running";
    document.getElementById("png1").style.animationIterationCount = "1";
    // document.getElementById("png3").style.visibility = "hidden";
    myTimeout = setTimeout(myGreeting, 1200);
}


function myGreeting() {
    document.getElementById("png2").style.visibility = "visible";
    document.getElementById("png1").style.visibility = "hidden";
    document.getElementById("wr").style.visibility = "hidden";
    document.getElementById("png4").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("png6").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "visible";
    document.getElementById("wr1").style.visibility = "visible";
    document.getElementById("png13").style.visibility = "visible";

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}
var check1 = 0;
function clipmove() {
    document.getElementById("png8").style.visibility = "visible";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("png8").style.animationPlayState = "running";
    document.getElementById("png8").style.animationIterationCount = "1";
    ++check1;
    if(check1==5)
    {
        document.getElementById("next").style.visibility = "visible";
    }
}

function clipmove1() {
    document.getElementById("png9").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("png9").style.animationPlayState = "running";
    document.getElementById("png9").style.animationIterationCount = "1";
    ++check1;
    if(check1==5)
    {
        document.getElementById("next").style.visibility = "visible";
    }
}

function clipmove2() {
    document.getElementById("png10").style.visibility = "visible";
    document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("png10").style.animationPlayState = "running";
    document.getElementById("png10").style.animationIterationCount = "1";
    ++check1;
    if(check1==5)
    {
        document.getElementById("next").style.visibility = "visible";
    }
}

function clipmove3() {
    document.getElementById("png11").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "hidden";
    document.getElementById("png11").style.animationPlayState = "running";
    document.getElementById("png11").style.animationIterationCount = "1";
    ++check1;
    if(check1==5)
    {
        document.getElementById("next").style.visibility = "visible";
    }
}

function draftermove() {
    document.getElementById("png14").style.visibility = "visible";
    document.getElementById("png13").style.visibility = "hidden";
    document.getElementById("png14").style.animationPlayState = "running";
    document.getElementById("png14").style.animationIterationCount = "1";
    ++check1;
    if(check1==5)
    {
        document.getElementById("next").style.visibility = "visible";
    }
}

