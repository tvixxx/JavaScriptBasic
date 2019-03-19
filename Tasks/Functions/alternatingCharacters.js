// hackerrank task

function alternatingCharacters(s) {
    
    if (!s) {
        return s;
    }

    let counter = 0;
    let previousSymbol = s[0];
    let strLength = s.length;

    for (let i = 1; i < strLength; i++) {
        if (s[i] === previousSymbol) {
            counter++;
        } else {
            previousSymbol = s[i];
        }
    }

    return counter;
}

// AAAA - 3
// BBBBB - 4
// ABABABAB - 0
// BABABA - 0
// AAABBB - 4
