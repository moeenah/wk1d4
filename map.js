var words = ["ground", "control", "to", "major", "tom"];

function map (array, func) {
  var newWords = [];
  array.forEach(function(word, iteration) {
    newWords.push(func(word));

  });
  console.log(newWords);
  return newWords;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
