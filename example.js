// * 객체 리터럴에 메서드가 추가된 방식
// 함수가 붙어서 메서드이긴하나 실효성이 떨어진다.
const first = {
  a : 1,
  b : 2,
  add : function() {
    return this.a + this.b;
  }
}
let testFirst = first.add();
console.log(testFirst);



// 함수가 두개라 재사용성은 있으나 코드가 번잡해짐
// * 객체를 리턴하는 일반 함수
function second(a, b) {
  let result = {};
  result.first = a;
  result.second = b;
  return result;
}
// * 단순 값을 더하는 함수
function add(a,b) {
  return a + b;
}
let testSecond = second(1,2);
let testSecondAdd = add(testSecond.first, testSecond.second);
console.log(testSecondAdd);




// 규격을 정해 쓸모를 정해줌
// * 생성자 함수 방식
class Third {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
  add() {
    return this.first + this.second;
  }
}

let testThird = new Third(1,2);
let testThirdAdd = testThird.add();
console.log(testThirdAdd);