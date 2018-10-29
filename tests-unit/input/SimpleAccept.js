// Simple accept with then missing catch

var p = new Promise(function (resolve, reject){ resolve(17) });
var p2 = p.then(function f1(value){
    console.log(value); // prints 17
    return value + 1
})