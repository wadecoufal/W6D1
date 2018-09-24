function sum() {
  let sum = 0;
  for ( let i = 0; i < arguments.length; i ++) {
    sum += arguments[i];
  }
  return sum;
}

function othersum(...args) {
  let sum = 0;
  args.forEach( num => {
    sum += num;
  });
  return sum;
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

Function.prototype.myBind = function () {
  let args = Array.from(arguments);
  let that = this;
  
  const calledFunc = function () {
    return that.apply(args[0], args.slice(1).concat(Array.from(arguments)));
  };
  
  return calledFunc;
};


Function.prototype.myBind1 = function (...args) {
  return (...otherArgs) => {
    return this.apply(args[0], args.slice(1).concat(otherArgs));
  };
};



function curriedSum(numArgs) {
  let numbers = [];
  
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
      }
      return sum;
    } else {
      return _curriedSum;
    }
  }
  
  return _curriedSum;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;
  
  function _curried(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that(...args);
    } else {
      return _curried;
    }
  }
  return _curried;
};





