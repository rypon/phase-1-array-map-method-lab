const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capWords(array) {
  const words = array.split(' ');
  //console.log(words)
  const capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  //console.log(capWords)
  const newSentence = capWords.join(' ');
  //console.log(newSentence)
  return newSentence;
}

function titleCased() {
  return tutorials.map(capWords)
}
console.log(titleCased())