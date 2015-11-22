/* Methods revesre string  */

/* First method  */
function reverseString(string) {
    return string.split("").reverse().join(""); //split('') - separator не указан, возвращает исходную строку
    // join() - glue отсутствует, строка будет соединена запятыми.
}
alert(reverseString("i like HTML"));
