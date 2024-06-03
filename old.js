function old(a, b) {
  this.first = a;
  this.second = b;
}

let test = new old(1, 2);
console.log(test)

class newOld {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }
}

let test2 = new newOld(1,2);
console.log(test2)