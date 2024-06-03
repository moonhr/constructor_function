//* 기본 함수 연습 파일
//* 목적은 함수를 좀 더 이해하기 위함.
//* 매개변수가 객체인 경우를 아래에 작성

function workOne(a, b) {
  //* logic : 매개변수 두 개를 받고, 리턴은 객체
  let localVariable = {};

  localVariable[a] = a;
  localVariable[b] = b;

  return localVariable
}

let test = workOne('황재민','배성빈')
console.log(test)
