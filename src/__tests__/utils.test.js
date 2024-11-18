// Your tests here
// src/__tests__/utils.test.js

const isPalindrome = require('../utils');

describe('isPalindrome', () => {
  
  // Test case for a valid palindrome
  it('should return true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  // Test case for a non-palindrome
  it('should return false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  // Test case for a case-insensitive palindrome
  it('should return true for a palindrome word with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  // Test case for an empty string (considered a palindrome)
  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  // Test case for non-alphabetic characters in a palindrome
  it('should ignore non-alphabetic characters and return true for palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });

  // Test case for non-string input (should throw an error)
  it('should throw an error if input is not a string', () => {
    expect(() => isPalindrome(12321)).toThrow('Input must be a string');
  });

  // Test case for non-alphabetic characters in the input (should throw an error)
  it('should throw an error if input contains non-alphabetic characters', () => {
    expect(() => isPalindrome('hello1')).toThrow('Input must only contain alphabetic characters');
  });
});
