function vowelsCounter(text) {
  // Code goes here
  const vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      counter += 1;
    }
  }
  return counter;
}

function vowelsCounter(text) {
  for (let char of text) {
    if ("aeiou".includes(char.toLowerCase())) {
      counter += 1;
    }
  }
}

function vowelsCounter4(text) {
  return [...text].filter((char) => "aeiou".includes(char.toLowerCase()))
    .length;
}

function vowelsCounter5(text) {
  return [...text].reduce((a, c) => a + Number("aeiou".includes(c)), 0);
}
console.log(vowelsCounter5("anehizxcv"));
