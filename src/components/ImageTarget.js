import cv from "./opencv.js";
var eventFunction = {
    upLoad(){
        var input = document.getElementById("before");
        input.src = URL.createObjectURL(document.getElementById("InputImage").files[0]);
    },
    ImageOnLoad(){
        var input = document.getElementById("before");
        var newCanvas = document.getElementById("after");
        newCanvas.width = input.width;
        newCanvas.height = input.height;
        var ctx = newCanvas.getContext("2d");
        ctx.drawImage(input,0,0);
        var dst = cv.imread(newCanvas,0);
        cv.imshow(newCanvas,dst);
    }
}
export default eventFunction