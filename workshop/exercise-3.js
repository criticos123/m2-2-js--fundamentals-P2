// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)
function max(num1,num2){
    return Math.max(num1,num2);
}
console.log(max(12,43));
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
const big=max(max(12,43),max(54,67));
console.log(big);
// Q3.3
// Would this work with more integers?
//let me try with 6 integers
const bigger=max(max(max(12,43),max(54,67),max(69,71)));
console.log(bigger)
//NO it will not work if you run you get a NaN