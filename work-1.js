//* 기본 함수 연습 파일
//* 목적은 함수를 좀 더 이해하기 위함.
//* 매개변수가 객체인 경우를 아래에 작성

function workOne(a, b) {
  //* logic : 매개변수 두 개를 받고, 리턴은 객체
  //* condition : 매개변수 모두 문자열
  if (typeof (a) === 'string') {
    if (typeof (b) === 'string') {
      let localVariable = {};

      localVariable[a] = a;
      localVariable[b] = b;

      return localVariable
    } else {
      console.error("문자열만 받음");
    }
  } else {
    console.error("문자열만 받음");
  }
}



let test = workOne('a','2')
console.log(test)
