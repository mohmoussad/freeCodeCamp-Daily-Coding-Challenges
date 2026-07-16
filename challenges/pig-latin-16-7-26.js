/*

Pig Latin Converter
16 July 2026
Given a string, convert it to Pig Latin using the following rules:

If a word begins with a vowel ("a", "e", "i", "o", or "u"), add "way" to the end. For example, "universe" converts to "universeway".
If a word begins with one or more consonants, move them to the end and add "ay". For example, "hello" converts to "ellohay".
Preserve the case of the first letter. For example, "Hello" converts to "Ellohay".
*/

function pigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const isUpper = (char) => char === char.toUpperCase();

  return str
    .split(" ")
    .map((word) => {
      if (vowels.includes(word[0])) {
        return word + "way";
      } else {
        const arrWord = word.split("");
        const firstVowelIndex = arrWord.findIndex((char) => vowels.includes(char));
        const firstOonsonants = arrWord.slice(0, firstVowelIndex);
        const firstPart =
          (isUpper(arrWord[0]) ? arrWord[firstVowelIndex].toUpperCase() : arrWord[firstVowelIndex]) +
          arrWord.slice(firstVowelIndex).slice(1).join("");

        return firstPart + firstOonsonants.join("").toLowerCase() + "ay";
      }
    })
    .join(" ");
}

console.log(pigLatin("universe"));
console.log(pigLatin("Apple"));
console.log(pigLatin("hello"));
console.log(pigLatin("Hello"));
console.log(pigLatin("hello universe"));
console.log(pigLatin("Hello universe"));
console.log(pigLatin("string"));