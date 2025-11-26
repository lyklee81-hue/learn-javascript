// 배열
// 재료 목록 데이터
const ingredients = ["김치", "버섯", "계란", "양배추"];
// console.log("🚀 ~ ingredients:", ingredients);
// console.log("🚀 ~ ingredients:", ingredients);
// console.log("🚀 ~ ingredients:", ingredients[2]);
// console.log("ingredients", ingredients.length);

// 반복문
ingredients.forEach((value, index) => {
  //n번 실행
  console.log(`${index}번째 데이터: ${value}`);
});

const messages = [
  {
    username: "맛있는 쉡프",
    message: "대화를 시작해볼까요?",
  },
  {
    username: "후츠릿",
    message: "그래, 너는 이름이 뭐야",
  },
];

messages.forEach((item) => {
  //반복 실행 구문
  //item: 객체
  console.log(item.message);
});

const names = ["alice", "bob", "kelly", "david"];

const upperNames = names.map((name) => name.toUpperCase());
console.log("🚀 ~ upperNames:", upperNames);

const filerNames = names.filter((name) => name.length >= 4); //4 대신 10을 사용하면 배열을 반환(공백 배열)
console.log("🚀 ~ filerNames:", filerNames);

const findNames = names.find((name) => name.length >= 4);
console.log("🚀 ~ findNames:", findNames);

// some: 배열의 요소 중 하나라도 조건을 만족하면  true, 그렇지 않으면 false
const someNames = names.some((name) => name.length >= 4);
console.log("🚀 ~ someNames:", someNames);

// every: 배열의 모든 요소가 조건을 만족하면 true, 그렇지 않으면 false
const everyNames = names.every((name) => name.length >= 4);
console.log("🚀 ~ everyNames:", everyNames);

//문제 1번
//function add(a, b) {
//	return a + b;
//}

// 여기에 화살표 함수로 다시 작성하세요.
const add = (a, b) => a + b;

console.log("합계:", add(5, 3)); // 예상 결과: 8

//화살표 함수로 변환
//함수 정의
//const upperString =() => {}
//const sum = (num1, num2) => num1 + num2;

//Q7. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (filter)
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => number % 2 === 0); // 여기에 코드를 작성하세요.
console.log(evenNumbers); // 예상 결과: [2, 4, 6]

//const filerNames = names.filter((name) => name.length >= 4); //4 대신 10을 사용하면 배열을 반환(공백 배열)
//console.log("🚀 ~ filerNames:", filerNames);
