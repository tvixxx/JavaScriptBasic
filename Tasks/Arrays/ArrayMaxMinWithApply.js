// Дан массив [29,38,115,1234,76,4,23,21,19,15,16], нужно найти min и max значения в нем. 2 варианта решения

// You can use method apply for search min and max value in array:

//Min value 
Math.min.apply(null, [29,38,115,1234,76,4,23,21,19,15,16]); // 4

//Max value
Math.max.apply(null, [34,23,78,69,92,123,25,1,2,3,143,23,11,2,6]); // 143

// spread
Math.max(...[29,38,115,1234,76,4,23,21,19,15,16]) // 1234

Math.min(...[29,38,115,1234,76,4,23,21,19,15,16]) // 4
