

// 高阶函数是什么
// 1.一个函数的参数是函数 我们就可以称之为高阶函数(回调函数)
// 2.一个函数返回一个函数 我们也称为高阶函数

function coreFn(a, b, c) {
  console.log('core', a, b, c);
}

Function.prototype.before = function(callback) {
  return (...args) => {
    callback();
    this(...args);
  }
}

const newFn = coreFn.before(() => {
  console.log('before');
});

newFn(1, 2, 3);