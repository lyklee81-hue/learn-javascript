// 조건문
// if () {}
const score = 80;

const pass = () => {
  console.log("합격 👌");
};

const fail = () => {
  console.log("불합격 😒");
};

if (score >= 60) {
  //  조건식이 true 경우 실행할 구문
  // 합격
  pass();
} else {
  //조건식 false인 경우  실행할 구문
  //불합격
  fail();
}

console.log("if 종료");

if (score >= 90) {
  console.log("A등급");
} else if (score >= 70) {
  console.log("B등급");
} else if (score >= 60) {
  console.log("C등급");
} else if (score >= 50) {
  console.log("C등급");
} else {
  console.log("D등급");
}
