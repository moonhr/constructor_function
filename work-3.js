console.log('work-3');

function workThree(index, name) {
  let local = {
    number: index + 1,
    name: name,
  };
  return local;
};

let test = workThree(5, '문혜림');
console.log(test)