// const rl = require('readline');
// const fs = require('fs');
// const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));



// const readLine = rl.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readLine.question("포켓몬스터 이름 작성해주세요 :", function (answer) {
//   let answerData = [];
//   let score = 0;
//   pokemonData.forEach(element => {
//     if (answer === element) {
//       answerData.push(element);
//       readLine.close();
//     }
//   });
//   console.log(answerData);
  

  // do : 1. 답변을 받는다.
  // do : 2. 답변과 기초데이터와의 존재 유무를 판단한다.
  // do : 3. 존재한다면 위 지역변수 배열에 추가한다.(append)
  // todo : 4. 존재한다면, score를 1점 추가한다.
  // todo : 5. 존재하지 않는다면, 다시한번 물어본다.
  // todo : 6. "종료" 라고 말한다면, 질문을 종료하고 결과를 보여준다.
  // todo : 7. 결과는 총 "포켓몬스터 score 개"를 작성하였습니다. 라는 로그를 남겨준다. 
  // todo : 8. trim 띄어쓰기가 있다면 붙여줘
// });

const rl = require('readline');
const fs = require('fs');

// const convert = JSON.parse(pokemonData); 이렇게 쓰기 싫어서 랩핑해줌
const pokemonData = JSON.parse(fs.readFileSync('./pokemon.json')); //parse랩핑
// console.log(pokemonData);
// console.log(typeof(pokemonData));
// console.log(Array.isArray(pokemonData)); //is라는게 boolean이고 배열 맞냐고 물어보는거임


const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

//포켓몬스터를 계속 적어서 맞는 것 까지 저장되고 틀리는 순간 채점
const d = readLine.question("포켓몬스터 이름 작성해주세요 : ", (answer) => {
  let answerData = [];
  let score = 0;
  
  if(answer.includes(" ")){
    answer = answer.trim();
  }
  pokemonData.filter(()=>{
    answerData.push(pokemonData);
    score++;
  });
});