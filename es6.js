//객체를 생성
const user = {
  isLoggedIn: true,
  role: "user", //'guest, 'admin' 값이 있을수 있음
};

// 관리자 페이지 접근 로직
if (user.isLoggedIn && user.role === "admin") {
  console.log("👌접근 가능");
} else {
  console.log("❌접근 불가");
}

// 일반 페이지 접근 로직
if (user.isLoggedIn || user.role === "admin") {
  console.log("✔️접근 가능");
} else {
  console.log("❌접근 불가");
}

if (!user.isLoggedIn) {
  //로그인되지않은 사용자
  console.log("로그인 해주세요!");
}

//default parameter
//function sayHello(username, usermbti) {
//실행할 로직들 작성
//console.log("Hello world" + username + "님!"); // , or +

//배틱: 문자열과 변수를 손쉽게 이어주는 문법  문결표시(shift 없이 ~ 클릭)
//  console.log(`반갑습니다. ${username}! MBTI는 ${usermbti}입니다.`);
//}

const sayHello = (username = "사용자", usermbti = "AAA") => {
  console.log(`반갑습니다. ${username}! MBTI는 ${usermbti}입니다.`);
};

sayHello("이영규");
sayHello("이호선", "INTP");

// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"];

//구조분해할당
const [first, second, third] = ingredients;
console.log("🚀 ~ third:", third);
console.log("🚀 ~ second:", second);
console.log("🚀 ~ first:", first);
console.log("🚀 ~ first, second, third:", first, second, third);

const todoItem = {
  todo: "React 학습하기",
  isComplete: false,
};

const { todo, isComplete } = todoItem;
console.log("🚀 ~ todo:", todo);
console.log("🚀 ~ isComplete:", isComplete);

const copyIngredients = [...ingredients, "방울토마토"];
console.log("🚀 ~ copyIngredients:", copyIngredients);

const copyTodoItem = {
  ...todoItem,
  description: " React 공부 할거예요",
  isComplete: true,
};
console.log("🚀 ~ copyTodoItem:", copyTodoItem);
