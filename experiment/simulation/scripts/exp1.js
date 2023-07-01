// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

function myStopFuntion(){
    clearTimeout(myTimeout);
}

// STEP 1

function step1(){
    document.querySelector("#mainStep").style.visibility = "hidden";
    document.querySelector("#png1-mainStep").style.visibility = "hidden";
    document.querySelector("#next-to-step1").style.visibility = "hidden";

    document.querySelector("#step1").style.visibility = "visible";
    document.querySelector("#png1-step1").style.visibility = "visible";
    document.querySelector("#png2-step1").style.visibility = "visible";
    
    myTimeout = setTimeout(myGreeting1Step1, 1000);
}
 
function moveSheet(){
    document.querySelector("#png1-step1").style.visibility = "hidden";
    document.querySelector("#png2-step1").style.visibility = "hidden";
    document.querySelector("#arr1-step1").style.visibility = "hidden";
    document.querySelector("#trans1-step1").style.visibility = "hidden";

    document.querySelector("#gif1-step1").style.visibility = "visible";
}

// TIME DELAY FUNCTION OF STEP 1

function myGreeting1Step1(){
    document.querySelector("#arr1-step1").style.visibility = "visible";
    document.querySelector("#trans1-step1").style.visibility = "visible";

    myStopFuntion();
}