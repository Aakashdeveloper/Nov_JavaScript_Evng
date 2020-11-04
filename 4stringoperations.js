var city = "LoNdON"
undefined
city.toLowerCase()
"london"
city.toUpperCase()
"LONDON"
city.length
6
city[0]
"L"
city[1]
"o"
var name = " London "
undefined
name.length
8
name.trim()
"London"
var name = " London .   "
undefined
name.trim()
"London ."


//JavaScript is case senstive
var username = "aakash"
undefined
var username1 = "Aakash"
undefined
username == username1
false
username.toLowerCase() == username1.toLowerCase()
true

var city = "pARis"
"Paris"


var city = "pARis"
undefined
city.charAt(0)
"p"
city.charAt(1)
"A"

var city = "pARis"
undefined
city.slice(1)
"ARis"
city.slice(2)
"Ris"
city.slice(2,4)
"Ri"
city.slice(2,5)
"Ris"
city.slice(2,6)
"Ris"


var city = "pARis"
undefined
city.charAt(0).toUpperCase()
"P"
city.slice(1).toLowerCase()
"aris"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"


var a  = "I am learning Javascript"
a.replace('Javascript','js')
"I am learning js"

var a  = "Javascript I am learning Javascript"
a.replace(/Javascript/g,'js')
"js I am learning js"

var name = " London .   "
name.replace(/ /g,'')
"London."

var name ="John Keev"
var name ="John Keev"
undefined
name.replace(/ /g,'-')
"John-Keev"


var a = 10
var b = 20
a+b
30

a.toString()+b.toString()
"1020"


slice(start,end?)
substring(start,end?)
substr(start,length?)

var name = "london"
undefined
name.slice(1)
"ondon"
name.substring(1)
"ondon"
name.substr(1)
"ondon"

name.slice(2,5)
"ndo"
name.substring(2,5)
"ndo"
name.substr(2,5)
"ndon"

var city = "Amsterdam"
city.substr(2,5)
"sterd"

///////////
var city = "Amsterdam"
city.slice(-1)
"m"
city.slice(-2)
"am"

city.substring(-1)
"Amsterdam"
city.substring(-2)
"Amsterdam"

var city = "Amsterdam"

city.slice(-1,-2)
""
city.slice(1,-2)
"msterd"
city.slice(-2,1)
""

city.substring(-1,-2)
""
city.substring(1,-2)
"A"
city.substring(2,-2)
"Am"
city.substring(-1,2)
"Am"