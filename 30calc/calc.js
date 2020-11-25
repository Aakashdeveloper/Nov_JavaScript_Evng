function calc(opt){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out;
    if(opt=="add"){
        out = Number(a)+Number(b);
    }else{
        out = Number(a)-Number(b);
    }
    document.getElementById('output').innerText = out;
}

function test(uinput){
    alert(uinput)
}



function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b);
    document.getElementById('output').innerText = out;
}

const sub = () => {
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b);
    document.getElementById('output').innerText = out;
}