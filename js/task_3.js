// 3.* Дополнительное 
// На основе куска кода написать реализацию функции superfunc 
// Она возвращает функцию которая запоминает все переданные в нее параметры и возвращает их в виде массива

function superfunc() {
  let lastArgs = [];
  return (...args) => {
    for (let arg of args) {
     lastArgs.push(arg);
    }
    return lastArgs;
  };
}

let a = superfunc()
console.log(a(1, 2, 3)) // [1, 2, 3]
let b = superfunc()
console.log(b(1, 2)) // [1, 2]
console.log(a(5, 6)) // [1, 2, 3, 5, 6]
console.log(b(3, 4)) // [1, 2, 3, 4]
