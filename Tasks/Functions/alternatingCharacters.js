// hackerrank task
// Шашанку нравятся строки, в которых последовательные символы отличаются. Например, ему нравится строка , но не нравится строка . Задана строка, состоящая только из символов  и . Шашанк хочет сделать из нее строку, которая ему понравится. Для этого он может удалять из нее символы.

// Ваша задача - найти минимальное количество необходимых удалений.

// Формат входных данных 
// Первая строка содержит целое число , количество тестов. 
// В следующих  строках записано по одной строке.

// Формат выходных данных 
// Выведите минимальное количество необходимых удалений для каждого теста.

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
