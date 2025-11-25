console.log("Hello world");

// 변수
const milkCaramel = "빨간펜"; //const 변수 변경 불가
let youtube = "후츠릿"; // let 변수 변경 가능

// 변수에서 드래그 한상태에서 검색창에서 turbo log message ~~(shift + strl + p)
youtube = "십오야";
console.log("🚀 ~ youtube:", youtube);

console.log("milkCaramel", milkCaramel);

const age = 45;
console.log("🚀 ~ age:", age); //단축키 ctrl + alt + L
//console.log("🚀 ~ age:", age);
//console.log("이영규의 나이",age);

/**
 * 데이터 타입
 * 1. 문자열 (string)
 * 2. 숫자 (number)
 * 3. boolean (참, 거짓)
 * 4. null/nuderfined -값이 비어있음
 */

//출입 가능 여부 판별
const isComming = true; //isComming에서 is는  boolean  암시함
console.log("🚀 ~ isComming:", isComming, typeof isComming);

console.log(age, typeof age);

//함수

// 함수 정의/선언

function sayHello(username, usermbti) {
  //실행할 로직들 작성
  //console.log("Hello world" + username + "님!"); // , or +

  //배틱: 문자열과 변수를 손쉽게 이어주는 문법  문결표시(shift 없이 ~ 클릭)
  console.log(`반갑습니다. ${username}! MBTI는 ${usermbti}입니다.`);
}

// 함수 실행/호출
const data = " 이영규";
sayHello("후츠릿", "INTJ");
sayHello(data, "INTJ");

// return (반환)
function sum(num1, num2) {
  // 두개의 값을 더한값 반환

  return num1 + num2; //로직의 마지막 줄 작성

  console.log("함수 종료"); //return  명령어 때문에 실행되지 출력이 되지 않음
}

//함수 종료
const result = sum(22, 40);
console.log("🚀 ~ result:", result);
