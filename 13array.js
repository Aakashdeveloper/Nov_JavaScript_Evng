> array is a collection of homogenous datatype
>
var a = [1,2,3,5,7,8,465]
var b = ['a','c','eger','egrg4t']
var c = [true,false,false,true]

> array is a collection of homogenous and hetrogenous datatype 

var d = ['john',true,35,3,false,4,'Alvin']

var city = ["London","Delhi","NewYork","Amsterdam"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[city.length-1]
"Amsterdam"

var city = ["London","Delhi","NewYork","Amsterdam"]
undefined
city.push('Helsinki')
5
city
(5) ["London", "Delhi", "NewYork", "Amsterdam", "Helsinki"]
city.push('Dubai')
6
city
(6) ["London", "Delhi", "NewYork", "Amsterdam", "Helsinki", "Dubai"]
city.pop()
"Dubai"
city
(5) ["London", "Delhi", "NewYork", "Amsterdam", "Helsinki"]
city.pop(2)
"Helsinki"
city.pop(2767867)
"Amsterdam"

city.unshift('Venice')
4
city
(4) ["Venice", "London", "Delhi", "NewYork"]
city.shift()
"Venice"

Push > add at the end
Pop > Remove from the last value 
unshift > Add at the begining
shift > Remove first value


var city = ["London", "Delhi", "NewYork", "Amsterdam", "Helsinki", "Dubai"]
undefined
city.slice(1,3)
(2) ["Delhi", "NewYork"]
city.slice(1,4)
(3) ["Delhi", "NewYork", "Amsterdam"]

var city = ["London", "Delhi", "NewYork", "Amsterdam", "Helsinki", "Dubai"]
city.splice(index,count of delete, value to add)

var city = ["London", "Delhi", "NewYork", "Amsterdam", "Helsinki", "Dubai"]
undefined
city.splice(3,2)
(2) ["Amsterdam", "Helsinki"]
city
(4) ["London", "Delhi", "NewYork", "Dubai"]

city.splice(3,0,'Pune','Paris')
[]
city
(6) ["London", "Delhi", "NewYork", "Pune", "Paris", "Dubai"]
city.splice(2,2,'Nice','Haug')
(2) ["NewYork", "Pune"]
city
(6) ["London", "Delhi", "Nice", "Haug", "Paris", "Dubai"]


var url = "https://github.com/Aakashdeveloper/Angular5-Seed"

url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "Angular5-Seed"]
var a = url.split('/')

a[a.length-1]
"Angular5-Seed"

var a = "I am doing javascript"
a.split(' ')
(4) ["I", "am", "doing", "javascript"]

var b = "JavaScript"
b.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

var c = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
undefined
c.toString()
"J,a,v,a,S,c,r,i,p,t"
c.toString().replace(/,/g,'')
"JavaScript"

var myarr = ["Delhi","Mumbai",["Red","Yellow","Green",['Audi','BMW','MERC'],"Orange"],"Paris","Amsterdam"]
undefined
myarr[4]
"Amsterdam"
myarr[2]
(5) ["Red", "Yellow", "Green", Array(3), "Orange"]
myarr[2][2]
"Green"
myarr[2][3]
(3) ["Audi", "BMW", "MERC"]
myarr[2][3][1]
"BMW"


var myarr = ["Delhi","Mumbai",["Red","Yellow","Green",['Audi','BMW','MERC'],"Orange"],"Paris","Amsterdam"]
undefined
myarr.flat()
(9) ["Delhi", "Mumbai", "Red", "Yellow", "Green", Array(3), "Orange", "Paris", "Amsterdam"]
myarr.flat(2)
(11) ["Delhi", "Mumbai", "Red", "Yellow", "Green", "Audi", "BMW", "MERC", "Orange", "Paris", "Amsterdam"]

var myarr = ["Delhi", "Mumbai", "Red", "Yellow", "Green", "Audi", "BMW", "MERC", "Orange", "Paris", "Amsterdam"]
undefined
myarr.sort()
(11) ["Amsterdam", "Audi", "BMW", "Delhi", "Green", "MERC", "Mumbai", "Orange", "Paris", "Red", "Yellow"]
myarr.reverse()
(11) ["Yellow", "Red", "Paris", "Orange", "Mumbai", "MERC", "Green", "Delhi", "BMW", "Audi", "Amsterdam"]

var a = ["Delhi", 1, true, "Yellow", -1, "Audi", true, "MERC", "Orange", 2, false]
undefined
a.sort()
(11) [-1, 1, 2, "Audi", "Delhi", "MERC", "Orange", "Yellow", false, true, true]
typeof(a[0])
       
"number"
typeof(a[3])
       
"string"
typeof(a[8])
       
"boolean"