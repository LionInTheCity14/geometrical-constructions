// THIS SINGLE FUNCTION WILL STOP THE setTimeOut Functions

function myStopFuntion(){
    clearTimeout(myTimeout);
}

function nextToStarterPage(){
    document.querySelector("#mainPage").style.visibility = "hidden";
    document.querySelector("#step1").style.visibility = "visible";

    URL("#starter.html");
}

function step1MoveSheet1(){
    document.querySelector("#step1-png1").style.visibility = "hidden";
    document.querySelector("#step1-trans1").style.visibility = "hidden";
    document.querySelector("#step1-arr1").style.visibility = "hidden";

    document.querySelector("#step1-gif1").style.visibility = "visible"

    myTimeout = setTimeout(timeDelay1Step1, 2500);
}

// TIME DELAY FUNCTION OF STEP 1 

function timeDelay1Step1(){
    document.querySelector("#step1-gif1").style.visibility = "hidden"

}

function nextToStep3(){
    document.querySelector("#mainPage").style.visibility = "hidden"
    document.querySelector("#step3").style.visibility = "visible";
    
}