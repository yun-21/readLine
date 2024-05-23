const { error } = require('console');
const rl = require('readline');
// console.dir(rl);

let inOut={
  input:global.process.stdin, //node의 최상위 global / dom에는 window 
  output:global.process.stdout
}

const readLine = rl.createInterface(inOut);

console.dir(readLine);

readLine.question("만들고 싶은 HTML 파일이름을 작성해주세요: ",(answer)=>{
  // let data = answer;
  const fs = require('fs');
  fs.writeFileSync(answer+".html","hello","utf-8",(error)=>{
    if(error===true){
      console.log("파일 생성 실패");
    }else{
      console.log("파일 생성 성공");
    }
    readLine.close();
  });
});

// readLine.question("내가 좋아하는 동물을 맞춰보세요: ",(answer)=>{
  // if(answer==='강아지'){
    // console.log(`정답! 바로 ${answer}입니다~`);
    // readLine.question("당신은 어떤종류의 강아지를 좋아하시나요?: ",(answer)=>{
      // console.log(`아~ 당신은 ${answer}종류의 강아지를 좋아하시는군요..`);
      // readLine.close();
    // });
  // }
  // else{
    // console.log(`탈락이에요.. 제가 좋아하는 동물은 ${answer}가 아닙니다..`);
    // readLine.question("한번의 기회를 더 줄게요: ",(answer)=>{
      // if(answer==='강아지'){
        // console.log(`정답! 바로 ${answer}입니다~`);
        // readLine.close();
      // }
      // else{
        // console.log("더이상의 기회는 없습니다.");
        // readLine.close();
      // }
    // });
  // }
// });
