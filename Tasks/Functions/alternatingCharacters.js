// hackerrank task

function alternatingCharacters(s) {
    
    if (!s) {
        return s;
    }

    const strLength = s.length;
    let counter = 0;
    let previousSymbol = s[0];

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
