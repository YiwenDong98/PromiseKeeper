// Simple catch with default value in case of rejection missing exception on catch.

var p = new Promise(function (resolve, reject){ reject(17) });
var p2 = p.catch(function f1(){
    return 5
})
var p3 = p2.then(function f2(value){
    console.log(value)
    return value + 1
})