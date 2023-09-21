// Import the library module you want to test
const myLibrary = require('../src/module2'); // Adjust the path as needed

// Import Chai's assert module
const assert = require('chai').assert;

// Describe the test suite for your library
describe('myLibrary', () => {
  // Describe the test case for the subtract function
  describe('module2.subtract', () => {
    // Test case 1: Subtracting two positive numbers
    it('should return the difference between two positive numbers', () => {
      const result = myLibrary.subtract(5, 3); // Corrected function call
      assert.equal(result, 2);
    });

    // Test case 2: Subtracting two negative numbers
    it('should return the difference between two negative numbers', () => {
      const result = myLibrary.subtract(-5, -3);
      assert.equal(result, -2);
    });

    // Test case 3: Subtracting a positive and a negative number
    it('should return the difference between a positive and a negative number', () => {
      const result = myLibrary.subtract(5, -3);
      assert.equal(result, 8);
    });

    // Test case 4: Subtracting zero from a number
    it('should return the number itself when subtracting zero', () => {
      const result = myLibrary.subtract(5, 0);
      assert.equal(result, 5);
    });

    // Test case 5: Subtracting zero from zero
    it('should return zero when subtracting zero from zero', () => {
      const result = myLibrary.subtract(0, 0);
      assert.equal(result, 0);
    });
  });

  // You can add more test cases for other functions or modules here
});
