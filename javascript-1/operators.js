// For each of the following code blocks,
// read the expression and predict what the result of evaluating it would be,
// then execute the expression in the Chrome console.

console.log('1' + 2);  //12
console.log(typeof '1' + 2);  //string2
console.log(6 % 4);    //2
console.log('3 + 4 is ' + 3 + 4); // '3 + 4 is 34'

// how could you make this produce the correct output?
// modify it to -> '3 + 4 is ' + (3 + 4);

console.log(0 < 0);  // false
console.log('false' == false);  // false
console.log(true == 'true');  // false
console.log(5 >= -5);  // true
console.log(!false || false); // true
console.log(true || "42");  // true
console.log(!true && !false); // false
console.log(6 % 5);  // 1
console.log(5 < 4 && 1 === 1); // false
console.log(typeof 'codeup' === 'string'); // true
console.log('codeup' === 'codeup' && 'codeup' === 'Codeup');  // false
console.log(4 >= 0 && 1 !== '1');   // true
console.log(6 % 3 === 0);  // true
console.log(5 % 2 !== 0);  // true