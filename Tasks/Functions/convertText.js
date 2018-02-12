// Create convert function which takes text and return the array of words, exclude spaces, \n

const text = '  test one   \n\n\n\n\nOppa hello who are you\n texttest';
const result = convert(text);
[
  'test',
  'Oppa',
  'texttest',
];

function convert(text) {
  let state = "start"; // start, line, break, fill
  let temp = "";
  
  return text
    .split("")
    .reduce((acc, str) => {
      switch(state) {
        case "start": {
          if (str === " " || str === "\n") {
            return acc;
          }

          state = "fill";
          temp += str;
          
          return acc;
        }

        case "line": {
          temp = "";

          if (str === "\n") {
            state = "break";
          }

          return acc;
        }

        case "break": {
          temp = "";
          
          if (str === " " || str === "\n") {
            return acc;
          }

          state = "fill";
          temp += str;

          return acc;
        }

        case "fill": {
          if (str === " ") {
            state = "line";
            return [...acc, temp];
          }

          if (str === "\n") {
            state = "break";
            return [...acc, temp];
          }

          temp += str;
        }

        default:
          return acc;
      }
    }, [])
}
