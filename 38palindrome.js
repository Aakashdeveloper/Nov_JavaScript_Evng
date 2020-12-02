
var palindrome = (data) => {
    var rem,temp,final=0;
    temp=data;
    
    while(data>0){
        rem = data%10
        data = parseInt(data/10)
        final = final*10+rem
    }
    if(final == temp) {
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

var a = 7899
undefined
var rem,temp,final=0;
undefined
rem = a%10
9
a = parseInt(a/10)
789
final = final*10+rem
9