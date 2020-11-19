//enclose something
//local scope
//global scope
/*
var a = 10;
function add(){
    var b = 20;
    return a+b
}

console.log("add()>>>",add())
console.log("a>>>",a)
console.log("b>>>>",b)
*/

/* variable that can be access outside or inside the block scope is in global scope*/
/* variable that cannot be access outside only inside the block scope is in local scope*/
/*
var a = 10
for(i=0;i<5;i++){
    let b = "hi"
    console.log(a+i+b)
}

console.log("a>>>",a)
console.log("b>>>>",b);

*/

mul(2)(3)(4)

function mul(a,b,c){
    return a*b*c
}


function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}