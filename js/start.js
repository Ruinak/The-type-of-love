// 상수로 main, qna, result를 선언
const main = document.querySelector('#main');
const qna = document.querySelector('#qna');
const result = document.querySelector('#result');
const endPoint = 12;

function begin() {
  main.style.WebkitAnimation = 'fadeOut 1s';
  main.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    qna.style.WebkitAnimation = 'fadeIn 1s';
    qna.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      qna.style.display = 'block';
    }, 450);

    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}

function goNext(qIdx) {
  var q = document.querySelector('.qBox');
  // data.js에서 q를 꺼내옴
  q.innerHTML = qnaList[qIdx].q;
  // data.js에서 answer를 꺼내옴
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100 / endPoint) * (qIdx + 1) + '%';
}

function addAnswer(answerText, qIdx) {
  var a = document.querySelector('.answerBox');
  // 버튼을 answer 변수에 담음
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  answer.classList.add('my-3');
  answer.classList.add('py-3');
  answer.classList.add('mx-auto');
  answer.classList.add('fadeIn');

  // answer라는 버튼을 a에 담아줌
  a.appendChild(answer);
  answer.innerHTML = answerText;

  answer.addEventListener(
    'click',
    function () {
      var children = document.querySelectorAll('.answerList');
      for (let i = 0; i < children.length; i++) {
        children[i].disable = true;
        children[i].style.WebkitAnimation = 'fadeOut 0.5s';
        children[i].style.animation = 'fadeOut 0.5s';
      }
      setTimeout(() => {
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = 'none';
        }
        goNext(++qIdx);
      }, 450);
    },
    false
  );
}
