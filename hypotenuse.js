var hypotenuseInputs = document.querySelectorAll(".hypotenuse-inputs");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
const hypotenuseOutput = document.querySelector("#hypotenuse-output");

console.log(23);

function calculateHypotenuse(sideOne, sideTwo){
    let hypotenuseSquared = Math.pow(sideOne, 2) + Math.pow(sideTwo, 2);
    hypotenuse = Math.sqrt(hypotenuseSquared);
    return hypotenuse.toFixed(2);
}

function getHypotenuse(){
    console.log(typeof hypotenuseInputs);
    let hypotenuse = calculateHypotenuse(Number(hypotenuseInputs[0].value) , Number(hypotenuseInputs[1].value));
    hypotenuseOutput.textContent = "the hypotenuse of the triangle is " + hypotenuse;
}

calculateHypotenuseBtn.addEventListener("click", getHypotenuse);
