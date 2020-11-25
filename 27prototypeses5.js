function human(name){
    this.name=name;
    this.country="London";
}

function robot(name){
    this.name=name;
    this.legs=2
    this.age=10
}


var john = new human('John')
var pepper = new robot('Pepper')
john
human {name: "John", country: "London"}
pepper
robot {name: "Pepper", legs: 2, age: 10}
human.prototype = new robot()
robot {name: undefined, legs: 2, age: 10}
var john = new human('John')
undefined
john
human {name: "John", country: "London"}
john.legs
2
john.age
10

robot.prototype = new human()
