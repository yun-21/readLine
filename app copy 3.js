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
readLine.question("포켓몬스터 이름 작성해주세요 : ", (answer) => {
  let data = [];
  pokemonData.forEach((element) => {
    if (answer === element) {
      data.push(element);
      readLine.close();
    }
  });
  console.log(data);
  if(data.length===0){
    console.log("존재하지않음");
  }
  else{
    console.log("존재함");
    fs.writeFileSync("./serchPokemon.json",JSON.stringify(data),"utf8",(err)=>{
      if(err){
        console.log(err);
      }
    });
  }
  readLine.close();
});