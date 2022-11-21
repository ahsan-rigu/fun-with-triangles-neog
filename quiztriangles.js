const quizForm = document.querySelector("#quizForm");
const checkAnswerButton = document.querySelector("#check-answers");
const outputBox = document.querySelector(".output-box");

correctAnswers = ["Equillateral", "Isoceless", "Both a. and b.", "180","Similar Triangles", "Both a. and b."]

checkAnswerButton.addEventListener("click" , checkAnswers);

function checkAnswers(){
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