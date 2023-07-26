const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click',checkClickedAnswer));

const correctAnswers = {
   1:'D',
   2:'A',
   3:'C',
   4:'B',

}

function checkClickedAnswer(event){
    const clickedAnswerElement = event.currentTarget; 
 

    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;

    const correctAnswer = correctAnswers[questionId];




    let message;
    let answerColorCode;
    

    if(selectedAnswer === correctAnswer){
        message = '正解です！おめでとう！';
        answerColorCode = '';
    }else{
        message = 'ざんねん！不正解です!';
        answerColorCode = 'red';
    }

    

    alert (message);


    document.querySelector('span#correct-answer').style.color = answerColorCode;
    document.querySelector('div#section-correct-answer').style.display = 'block';
}
