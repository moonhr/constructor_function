// S : subject 주어
// O : object 목적어
// V : verb 동사

// KDT멤버들 객체만들기
const names = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const makeMember = require('./work-3');

let arrayMembers = [];
// for(let i = 0; i < names.length; i++){
//   let member = makeMember(i, names[i]);
//   arrayMembers.push(member);
// }

names.forEach(element => {
  let index = {};
  arrayMembers.push(makeMember(index ,element))
});
//객체가 원소인 배열이 만들어짐
console.log(arrayMembers);
