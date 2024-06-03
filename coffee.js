class makeCoffee {
  constructor(bean, water, sugar, milk){
    this.bean = bean
    this.water = water
    this.sugar = sugar
    this.milk = milk
  }
}

let test = new makeCoffee('케냐', '150ml', 'false', 'false')
console.log(test)