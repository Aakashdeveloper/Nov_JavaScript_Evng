if(condition){
    //do something
}else{
    //do something
}

var a = 878
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
VM46:3 Number 878 is even


var a = 87
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}


var name = "Aakash"
if(name=="John"){
    console.log(`${name} you are admin`)
}else if(name=="Nitika"){
    console.log(`${name} you are Super admin`)
}else{
    console.log(`${name} we don't know you`)
}
Aakash we don't know you


var name = "Aakash"
if(role=="Admin" ){
    if(name=="John"){
        console.log(`${name} you are System admin`)
    }else if(name=="Aakash"){
        console.log(`${name} you are DB admin`)
    }
}else if(name=="Nitika"){
    console.log(`${name} you are Super admin`)
}else{
    console.log(`${name} we don't know you`)
}

var a = -1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}

//Ternary operator
var a = 10
a>10 ? "Hii":"Bie"
"Bie"

var a = 10
a<10 ? "Hii":"Bie"
"Bie"

var a = 10
a==10 ? "Hii":"Bie"
"Hii"

var a = 10
a==10 ? a+1:a-1
11

//Never try nested ternary
var a = 10
a>10 ?a+1:a-1?"hii":"bie"
"hii"
var a = 10
a==10 ?a+1:a-1?"hii":"bie"
11