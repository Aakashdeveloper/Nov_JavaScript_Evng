/*function sayhi() {
    return "Hi To JS"
}

console.log(sayhi())
*/

////IFFI////
(function(){
    console.log("Hi To JS")
}())

/////Genarator function ////
function loop(userinput) {
    for(i=0;i<userinput;i++){
        console.log(i)
    }
}


function * loop(userinput) {
    for(i=0;i<userinput;i++){
        yield i
    }
}

var data = loop(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}