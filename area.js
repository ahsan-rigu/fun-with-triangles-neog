const areaInput = document.querySelectorAll(".area-input");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const areaOutput = document.querySelector("#area-output");

function calculateArea(){
    console.log(23);
    let triangleArea = (Number(areaInput[0].value) * Number(areaInput[1].value))/2;
    areaOutput.textContent = "the area of the triangle is " + triangleArea;
}

calculateAreaBtn.addEventListener("click", calculateArea);
