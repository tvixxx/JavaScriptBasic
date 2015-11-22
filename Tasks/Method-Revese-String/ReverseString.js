/* Methods revesre string  */

/* First method  */
function reverseString(string) {
    return string.split("").reverse().join(""); //split('') - separator не указан, возвращает исходную строку
    // join() - glue отсутствует, ничем не соединяется
}
alert(reverseString("i like HTML"));

/* Second method */
function reverseString (string) {
   var letters = string.split(''); //суть та же ,что и выше
   letters.reverse();
return letters.join('');
}
alert(reverseString("hello"));
