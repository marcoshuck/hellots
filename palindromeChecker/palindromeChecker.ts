export function checkPalindrome(word: string) {
  const regex: RegExp = new RegExp('[^a-zA-Z0-9 -]');
  word.replace(regex, '');
  const palindrome: string = word.toLowerCase().split('').reverse().join('');
  if (word !== palindrome) {
    return false;
  }
  return true;
}
