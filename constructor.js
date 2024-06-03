// 분류규격 라면볶음면 {
//   재료들(라면종류, 라면물, 추가재료) {
//     라면종류: 라면종류;
//     라면물: 라면물;
//     추가재료: 추가재료;
//   }
// }

class hyeonRamen {
  constructor(ramenName, ramenWater, addFood) {
    this.ramenName = ramenName;
    this.ramenWater = ramenWater;
    this.addFood = addFood;
  }
  set ramenName(ramenName) {
    if (ramenName !== "진라면") {
      console.error("진라면만 받아요")
    }
  }
}


let test = new hyeonRamen("진라면", "300ml", "체다치즈,고추장");
console.log(test)