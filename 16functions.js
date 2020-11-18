function
method
arrow function
IFFI
Generator

//////////////
var a = 10
var b = 20
a+b
30

////////
function
///////

function add(a,b) {
    return a+b
}
undefined
add(3,5)
8
add('a','b')
"ab"
add(10,20)
30
add(10,20,30)
30

/////
function test(a,b) {
    var sum = a+b
    var sub = a-b
    return sum,sub
}

test(1,2)
-1

function test(a,b) {
    var sum = a+b
    var sub = a-b
    var out=[sum,sub]
    return out
}
test(1,2)
[3,-1]

/////////////
method> when function  assign to variable
//////////
var add = function(a,b){
    return a+b
}

///
es6 > arrow function
/////
var add = (a,b) => {return a+b}
add(1,2)
3