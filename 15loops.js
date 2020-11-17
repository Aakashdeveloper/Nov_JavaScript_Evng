for
while loop
dowhile loop
for of 
for in > object
///////
Map
filter

//////////////////////
for > it can generate series of value and iterate over array
///////
for(i=0;i<5;i++){
    console.log(i)
}


var city = ["London", "Delhi", "Nice", "Haug", "Paris", "Dubai"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

var city = ["London", "Delhi", "Nice", "Haug", "Paris", "Dubai"]
for(i=0;i<city.length;i++){
    console.log(`My City is ${city[i]}`)
}

My City is London
My City is Delhi
My City is Nice
My City is Haug
My City is Paris
My City is Dubai

var city =  ["Delhi","Mumbai",['Audi','BMW','MERC'],"Paris","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Delhi
Mumbai
(3) ["Audi", "BMW", "MERC"]
Paris
Amsterdam


var city =  ["Delhi","Mumbai",['Audi','BMW','MERC'],"Paris","Amsterdam"]
for(i=0;i<city.length;i++){
    for(j=0;j<city[i].length;j++){
        console.log(city[i][j])
    }
}

Array.isArray(a)
false
Array.isArray(b)
true

var city =  ["Delhi","Mumbai",['Audi','BMW','MERC'],"Paris","Amsterdam"]
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
    
}

////while////
var i = 0;
while(i<5){
    console.log(i);
    i++
}
0
1
2
3
4

////Do while////
var i =0;
do{
    console.log(i);
    i++
}
while(i<5);
0
1
2
3
4

/////for of/////
var city = ["London", "Delhi", "Nice", "Haug", "Paris", "Dubai"]

for(mycity of city){
    console.log(mycity)
}

var city =  ["Delhi","Mumbai",['Audi','BMW','MERC'],"Paris","Amsterdam"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(cars of mycity){
            console.log(cars)
        }
    }else{
        console.log(mycity)
    }
}