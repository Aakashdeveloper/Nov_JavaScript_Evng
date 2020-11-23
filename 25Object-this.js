/*var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say Hi to ${firstname} ${lastname}`
    }
}

console.log(sayHi.greet())
//"Say Hi to Michal Peter"*/


var firstname = "Michal";
var lastname = "Peter";

var sayHi = {
    firstname:'Zoe',
    lastname:'Lisa',
    greet:function(){
        return `Say Hi to ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())
"Say Hi to Zoe Lisa"

/////////////
Constructor
//////////


var bob = new Object();
bob.age = 10;;
bob.city = "newYork"
bob.setAge= function(newAge){
    this.age = newAge
}

bob
{age: 10, city: "newYork", setAge: ƒ}
bob.setAge(20)
undefined
bob
{age: 20, city: "newYork", setAge: ƒ}



var tony = new Object();
tony.age = 10;;
tony.city = "newYork"
tony.setAge= function(newAge){
    this.age = newAge
}


var createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;;
bob.city = "newYork"
bob.setAge= createAge

var tony = new Object();
tony.age = 10;;
tony.city = "newYork"
tony.setAge= createAge
