function starter(){
    document.querySelector("#mainStep").style.visibility = "hidden";
    document.querySelector("#start-btn").style.visibility = "hidden";

    document.querySelector("#starter").style.visibility = "visible";
}

function move(){
    document.querySelector("#starter-drawingBoard").style.visibility = "hidden";
    document.querySelector("#starter-drawingSheet").style.visibility = "hidden";

    document.querySelector("#starter-gif").style.visibility = "visble";
}