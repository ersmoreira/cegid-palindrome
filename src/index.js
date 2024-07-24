function isPalindrome(text) {
    const splitString = text.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray === text
}

module.exports = { isPalindrome };