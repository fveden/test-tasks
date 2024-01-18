"use strict";

/**
 * The function calculates the number of occurrences of two consecutive symbols
 * @param {string} string Input string
 * @param {string} s1 First character
 * @param {string} s2 Second character
 * @returns {number} Counter occurrences 
 */
function dscount(string, s1, s2) {
  string = string.toLowerCase();
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  let counter = 0;
  for (let i = 0; i < string.length - 1; i++) {
    //If first symbol equals s1 and the next symbol equals s2, then increase the counter
    if (string[i] === s1 && string[i + 1] === s2) {
      counter++;
    }
  }
  return counter;
}


// Для удобства можно использовать эти тесты:
try {
  test(dscount, ["ab___ab__", "a", "b"], 2);
  test(dscount, ["___cd____", "c", "d"], 1);
  test(dscount, ["de_______", "d", "e"], 1);
  test(dscount, ["12_12__12", "1", "2"], 3);
  test(dscount, ["_ba______", "a", "b"], 0);
  test(dscount, ["_a__b____", "a", "b"], 0);
  test(dscount, ["-ab-аb-ab", "a", "b"], 2);
  test(dscount, ["aAa", "a", "a"], 2);

  console.info("Congratulations! All tests passed.");
} catch (e) {
  console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
  let r = call.apply(n, args) === count;
  console.assert(r, `Found items count: ${count}`);
  if (!r) throw "Test failed!";
}