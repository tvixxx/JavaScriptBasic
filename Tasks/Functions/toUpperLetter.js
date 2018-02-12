// Create function which takes the string and in each word in the str does first letter uppercase.

const text = '   what    who   test text';
const result = toUpper(text);

function toUpper(str) {
  let state = 'wait'; // Enter, Wait, Word
 
  return str.split("").reduce((acc, char, index) => {
    switch (state) {
      case "wait": {
        const trigger = char === ' ' && str[index + 1] !== ' ';
        
        if (trigger) {
          state = 'enter';
        }
        
        return acc;
      }
        
      case "enter": {
        state = "word";
        return acc += char.toUpperCase();
      }
      
      case "word": {
        const trigger = str[index + 1] === ' ';
        
        if (trigger) {
          state = 'wait';
          return acc += char + ' ';
        }
        
        return acc += char;
      }
        
      default: {
        return acc;
      } 
    }
  }, '');
  
}

console.log(result);
