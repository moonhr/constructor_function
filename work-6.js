// ItsME
// 내이름
// 나이
// 주소
// 이메일
// 좋아하는 것
// 싫어하는 것

class ItsME{
  constructor(name, age, address, email, like, hate){
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.like = like;
    this.hate = hate;
  }
  
  set name(value){
    if(typeof(value) === "string"){
      this._name = value;
    } else {
      console.error("name은 문자열이어야 합니다.");
    }
  }
  get name() {
    return this._name + "님";
  }

  set age(value) {
    if(typeof(value) === "number") {
      this._age = value;
    } else {
      console.error("age는 숫자이어야 합니다.");
    }
  }

  get age() {
    return this._age + "살";
  }

  set address(value) {
    if(typeof(value) === "string") {
      this._address = value;
    } else {
      console.error("address은 문자열이어야 합니다.");
      console.log(typeof(value))
    }
  }

  get address() {
    return this._address
  }

  set email(value) {
    if(typeof(value) === "string") {
      this._email = value;
    } else {
      console.error("email은 문자열이어야 합니다.");
    }
  }

  get email() {
    return this._email
  }
}

let test = new ItsME("문혜림", 26, '서구', "asd", "아아", "라떼");
console.log(test)