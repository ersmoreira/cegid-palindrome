const { isPalindrome } = require("../src/index.js");

test('returns true for a palindrome', () => {
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('deified')).toBe(true);
    expect(isPalindrome('rotator')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('')).toBe(true);
});

test('returns false for a non-palindrome', () => {
    expect(isPalindrome('house')).toBe(false);
    expect(isPalindrome('dog')).toBe(false);
    expect(isPalindrome('month')).toBe(false);
});

test('is case sensitive', () => {
    expect(isPalindrome('kayak')).toBe(true);
    expect(isPalindrome('Kayak')).toBe(false);
    expect(isPalindrome('KayaK')).toBe(true);
});