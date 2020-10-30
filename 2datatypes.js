'1'+1
"11"
'1'-1
0
'2'*4
8
'24'*4
96
'24'/4
6
'24'%4
0
'24'%'4'
0
24%'5'
4

'1a'-1
NaN
'1a'-'a'
NaN


var a = true
var b = true

a+b
2 

true is equal to 1
false is equal to 0


true+10
11
true+false
1
true-true
0
true*10
10
'hi'+true
"hitrue"
'true'+'true'
"truetrue"
'true'-'true'
NaN

//es5
var a = "10"
var b = "20"
a+b
"1020"


var a = "10"
var b = "20"
undefined
a+b
"1020"
parseInt(a)+parseInt(b)
30
var a = "Hi"
undefined
parseInt(a)
NaN

//es5
var a = "10.43"
var b = "20.11"
undefined
a+b
"10.4320.11"
parseInt(a)+parseInt(b)
30
parseFloat(a)
10.43
parseFloat(a)+parseFloat(b)
30.54

//es6
var a = "10.43"
var b = "20.11"
undefined
Number(a)+Number(b)
30.54