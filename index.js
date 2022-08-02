function display(val){
    document.getElementById('result').value += val;
    return val;
}

function solve(){
    let a = document.getElementById('result').value;
    let b = eval(a);
    document.getElementById('result').value = b;
    return b;
}

function ClearScreen(){
    document.getElementById('result').value = ''
}
