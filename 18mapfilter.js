var a =[4,5,3,8,9,43,54,87];
a.map((data) => { return data})
[4, 5, 3, 8, 9, 43, 54, 87]

var a =[4,5,3,8,9,43,54,87];
a.map((data) => { return data*2})
 [8, 10, 6, 16, 18, 86, 108, 174]


var a =[4,5,3,8,9,43,54,87];
a.map((data) => { return `<p>${data*2}</p>`})

>map is use to iterate over the Array
> it always return same length of array
> it also use to apply logic(sum,mul etc) and return binded HTML

////////////////////
var b = [20,30,35,34,26,67,21,19,32]
b.filter((data) => {return data>25})
[30, 35, 34, 26, 67, 32]

b.map((data) => {return data>25})
(9) [false, true, true, true, true, true, false, false, true]

> filter is use to return the value for array
> it may or may not return same length of array
> it only return those value for which output/condition is true

var a = [0,1,2,3]
a.map((data) => { return data*2})
[0, 2, 4, 6]

a.filter((data) => { return data*2})
[1, 2, 3]