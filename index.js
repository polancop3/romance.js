
let song = "They told him don't you ever come around here Don't want to see your face, you better disappear the fire's in their eyes and their words are really clear So beat it, just beat it"
// removes uncessary characters
function parseText(str) {
  let cleanTxt = str.toLowerCase().replace(/\./g, '').replace(/,/g, "").replace(/[0-9]/g, '').split(" ");
  return cleanTxt
}

//takes array and makes object
function generateWordPairs(array) {
  array = parseText(song)
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = array[i + 1]
    
  }
  return obj
}
const wordPairs = generateWordPairs()

// will randomly take a word
function randomWords(arr) {
  let current = Math.floor(arr.length * Math.random());
  return arr[current];
}
//should take random words and create a line based on length
function writeLine(text, length) {
  let list = parseText(text);
  let pairs = generateWordPairs(text);
  let word = randomWords(list);
  let sentence = [word];

  while (pairs[word]) {
    let followingWrd = pairs[word];
      word = randomWords(followingWrd);
        sentence.push(word);

    if (sentence.length > length) {
       break;
    }
  }

  return sentence.join(' ');
}
// final function should create new lines with our random created sentences from writeLine function
function generatePoem(text, newLines) {
  for (let i = 0; i < newLines; i++) {
    let line = Math.floor(Math.random() * 10) + 1;
    console.log(writeLine(text, line))
  }
}
generatePoem(song, 5);
