module.exports.hash1 = (range) => {
  var cache = {};
  return function h1(string) {
    var stringArr = string.split("");
    const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    var calculate = new Array(26);
    for (let i = 0; i < calculate.length; i += 2) {
      // fills up the array with 0s and 1s alternatingly.
      calculate[i] = 0;
      calculate[i + 1] = 1;
    }
    var sum = 0;
    if (string in cache) {
      return cache[string];
    }
    stringArr.forEach((elem) => {
      const notCaseSensitive = elem.toLowerCase();
      for (let i = 0; i < alphabets.length; i++) {
        if (alphabets[i] === notCaseSensitive) {
          return (sum += calculate[i]);
        }
      }
    });
    const random = Math.floor(Math.random() * (range - sum));
    cache[string] = random;
    return random;
  };
};

module.exports.hash2 = (range) => {
  var cache = {};
  return function hash3(string) {
    if (string in cache) {
      return cache[string];
    }
    var random = Math.floor(Math.random() * range);
    cache[string] = random;
    return random;
  };
};

module.exports.hash3 = (range) => {
  var cache = {};
  return function hash3(string) {
    if (string in cache) {
      return cache[string];
    }
    var random = Math.floor(Math.random() * range);
    cache[string] = random;
    return random;
  };
};

module.exports.hash = (string, range) => {
  var stringArr = string.split("");
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  var calculate = new Array(26);
  for (let i = 0; i < calculate.length; i += 2) {
    // fills up the array with 0s and 1s alternatingly.
    calculate[i] = 0;
    calculate[i + 1] = 1;
  }
  var sum = 0;

  stringArr.forEach((elem) => {
    const notCaseSensitive = elem.toLowerCase();
    for (let i = 0; i < alphabets.length; i++) {
      if (alphabets[i] === notCaseSensitive) {
        return (sum += calculate[i]);
      }
    }
  });
  if (sum === 0) sum = 13;
  const random = Math.floor(range / sum);

  return random;
};

module.exports._hash = (str, range) => {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i) * 3;
  }
  return sum % range;
};
