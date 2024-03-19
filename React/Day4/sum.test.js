// commonjs way of import

const sum = require('./sum');

// test case

test('Sum of 4 + 5 is 9!',()=>{
    expect(sum(4,5)).toBe(9);
})