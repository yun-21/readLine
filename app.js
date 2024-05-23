const rl = require('readline');
const fs = require('fs');
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

  // todo : 1. 답변을 받는다.
  // todo : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
  // todo : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
  // todo : 4. 존재한다면, score를 1점 추가한다.
  // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
  // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
  // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다. 
  // todo : 8. 입력칸에 띄어쓰기가 있다면 붙여줘요

let answerData = [];
let score = 0;
function call() {
  readLine.question("포켓몬스터 이름 작성해주세요 :", (answer) => {
    pokemonData.forEach((element) => {
      if (answer.trim() === element) {
        answerData.push(element);
      }
    });
    if(answerData.includes(answer.trim())===true){
      score++;
      console.log(answerData);
      call();

      //? 작성을 선택해서 하고싶으면 주석 풀어서 사용
      // readLine.question("작성을 더 하시겠습니까?(yes or no): ", (answer) => {
      //   if (answer === 'yes') {
      //     call();
      //   }
      //   else if (answer === 'no') {
      //     console.log("현재 점수는 : ", score,"점 입니다.");
      //     readLine.close();
      //   }
      //   else {
      //     console.log("yes 또는 no로 답 하지않아서 강제종료");
      //     readLine.close();
      //   }
      // });
    }
    else if(answerData.indexOf(answer)===-1){
      console.log("틀렸습니다. 현재 점수는 : ",score,"점 입니다.");
      readLine.close();
    }
  });
}
call();