const quizForm = document.querySelector("#quizForm");
const checkAnswerBtn = document.querySelector("#check-answers");
const outputBox = document.querySelector(".output-box")

correctAnswers = ["Equillateral", "Isoceless", "Both a. and b."]

checkAnswerBtn.addEventListener("click", console.log(23));

function checkAnswers(){
    console.log(23);
    var score = 0;
    var index = 0;
    var formResults = new FormData(quizForm);
    for(let alpha of formResults.values()){
        if(alpha === correctAnswers[index]){
            score++;
            
        }

        index++;
    }

    outputBox.textContent= "your score is "+ score
}