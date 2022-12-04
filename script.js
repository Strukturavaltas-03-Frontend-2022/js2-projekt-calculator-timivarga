function Num(val){
    document.getElementById('screen').value += val;
}

function equal(){
    let input = document.getElementById('screen').value;
    let output = eval(input);
    document.getElementById('screen').value = output;
}

function clr(){
    document.getElementById('screen').value = '';
}