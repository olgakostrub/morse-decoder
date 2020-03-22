const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  const encodeString = str => {
    let encodedString = str.replace(/\./g, "10");
    encodedString = encodedString.replace(/\-/g, "11");
    const diff = 10 - encodedString.length;
    if (diff) {
      encodedString = "0".repeat(diff) + encodedString;
    }
    return encodedString;
  };

  const MORSE_TABLE_DIGITIZED = {};
  MORSE_TABLE_DIGITIZED["**********"] = " ";
  for (let i in MORSE_TABLE) {
    MORSE_TABLE_DIGITIZED[encodeString(i)] = MORSE_TABLE[i];
  }

  // decode
  let decodedString = "";
  for (let i = 0; i < expr.length; i += 10) {
    const codedString = expr.substr(i, 10);
    decodedString = decodedString + MORSE_TABLE_DIGITIZED[codedString];
  }
  return decodedString;
}

module.exports = {
  decode
};
