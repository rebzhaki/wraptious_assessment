/* the IIFE is not getting the correct value of i in each iteration when using var which has 
    a function scope and not a block scope. Pass the value of i as an argument in the function as corrected below */

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("Index:", i);
    }, Math.random() * 1000);
  })(i);
}
