const anglesObj = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const isTriangelOutput = document.querySelector("#is-triangle-output");







function isTriangle(){
    let sumOfAngles = (Number(anglesObj[0].value)+Number(anglesObj[1].value)+Number(anglesObj[2].value));

    if(sumOfAngles===180){
        isTriangelOutput.textContent = "yes, given angles form a triangle";
    }else {
        isTriangelOutput.textContent = "no, given angles don't form a triangle";
    }
} 

isTriangleBtn.addEventListener("click", isTriangle);


