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

readLine.question("포켓몬스터 이름 작성해주세요 : ",(answer)=>{
  for(let i=0; i<pokemonData.length; i++){
    if(pokemonData[i]===answer){
      console.log(i+1+'포켓몬스터 번호');
      console.log("포켓몬스터 이름이 존재합니다.");
      readLine.close();
      break;
    }
    else{
      console.log("포켓몬스터 이름이 존재하지않습니다.");
      readLine.close();
    }
  }
});