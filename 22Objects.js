var mobiesname = "Avenger";
var movierating = 4.5;
var movielang = "Eng";


var mobiesname1 = "Jab We met";
var movierating1 = 4.8;
var movielang1 = "Hindi";


/////Liternal Notation
var movies = {
    name:'Mad Max',
    rating:3.4,
    lang:'Eng'
}
undefined
movies.name
"Mad Max"
movies.rating
3.4
movies.lang
"Eng"
movies.ind="'Hollywood"
"'Hollywood"
movies
{name: "Mad Max", rating: 3.4, lang: "Eng", ind: "'Hollywood"}
movies.rating=3.5
3.5
movies
{name: "Mad Max", rating: 3.5, lang: "Eng", ind: "'Hollywood"}
delete movies.lang
true
movies
{name: "Mad Max", rating: 3.5, ind: "'Hollywood"}
delete movies.type
true

movies['name']
"Mad Max"
movies['ind']="Hollywood"
"Hollywood"
movies
{name: "Mad Max", rating: 3.4, lang: "Eng", ind: "Hollywood"}
delete movies['lang']
true

var movie =  {
    "name":"Mad Max",
    "rating":3.4,
    "lang":"Eng"
}

for(a in movie){
    console.log(movie[a])
}
VM780:8 Mad Max
VM780:8 3.4
VM780:8 Eng


var movie =  {
    "name":"Mad Max",
    "rating":3.4,
    "lang":"Eng"
}

for(key in movie){
    console.log(key)
}
VM808:8 name
VM808:8 rating
VM808:8 lang


var test = [{a:1},{b:2},{c:3}]

for(i=0;i<test.length;i++){
    for(key in test[i]){
        console.log(test[i][key])
    }
}


var movies = [
    {
        "name":"Mad Max",
        "rating":3.4,
        "lang":"Eng"
    },
    {
        "name":"Avenger",
        "rating":4.3,
        "lang":"Eng"
    },
    {
        "name":"Jab We Met",
        "rating":4.8,
        "lang":"Hindi"
    }
]

for(i=0;i<movies.length;i++){
    for(key in movies[i]){
        //console.log(movies[i][key])
        console.log(key)
    }
}

///////////////

var calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}

calc.sub(2,4)
-2
calc.sub(3,2)
1
calc.sum(3,2)
5


var dbQuery = {
    find:(table)=> {return `Select * from ${table}`},
    insert:(table,data) => { return `Insert into ${table} name,city values(${data.name}, ${data.city})`}
}

dbQuery.find('Emp')
"Select * from Emp"
dbQuery.insert('Student',{name:'Nikita',city:'Amsterdam'})
"Insert into Student name,city values(Nikita, Amsterdam)"