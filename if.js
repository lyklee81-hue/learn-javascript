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
/**
 *   if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else if (score >= 70) {
  console.log("C등급");
} else if (score >= 60) {
  console.log("C등급");
} else {
  console.log("D등급");
}
   */

//삼항연산자
score > 60 ? pass() : fail();

const isCheck = "abc" === "abc";
console.log("🚀 ~ isCheck:", isCheck);

const userInput = "";
if (!userInput) {
  // userInput의 값이 비어있는 경우
  console.log("값을 입력해주세요");
}

// 배열
// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"];
console.log("🚀 ~ ingredients:", ingredients);
console.log("🚀 ~ ingredients:", ingredients);
console.log("🚀 ~ ingredients:", ingredients[2]);
console.log("ingredients", ingredients.length);

const person = {
  name: "이영규",
  age: 45,
  home: "부산시 연제구",
  company: "부산시 진구",
  isMale: true,
};

console.log("0번째 데이터", person["name"]);
console.log("company", person.company); //닷 표기법 권장

const messageInfo = {
  userImage:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0pEZas5_qRK1NAKMGO27eFR6lvJ1LyHKp6B-j9k_BBOP4I6dA2Z_LjqNWLUjnt8v9yx_-wYDdQnR5w3WjWApHFa2dzndaGjd9epxsw&s=10",
  userName: "맛있는 쉐프",
  message: "안녕하세요",
  role: "assistant",
};
