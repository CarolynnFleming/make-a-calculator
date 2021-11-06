// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from "../math-utils.js";


const test = QUnit.test;

test('add() should take in 4 and 5 and return 9', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(4,5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


import { subtract } from "../math-utils.js";

test('subtract() should take in 5 and 4 and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(5,4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { multiply } from "../math-utils.js";
test('multiply() should take in 5 and 4 and return 20', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(5,4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
import { divide } from "../math-utils.js";
test('divide() should take in 8 and 2 and return 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(8,2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});