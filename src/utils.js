// Your code here
// src/utils.js

function isPalindrome(word) {
    // Check if input is a string
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    // Check if input contains only alphabetic characters (A-Z, a-z)
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must only contain alphabetic characters');
    }
  
    // Convert word to lowercase for case-insensitivity
    const cleanedWord = word.toLowerCase();
  
    // Check if the word is equal to its reverse
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  module.exports = isPalindrome;
  