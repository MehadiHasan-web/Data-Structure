let array = ['stack1', 'stack2','stack3'];

// show stack 
var show = document.getElementById('show');

function showData(){
    // for(var i = 0; i < array.length; i++){
    //     let div = document.createElement('div');
    //     div.classList.add('p-2', 'border', 'w-50', 'rounded-top');
    //     div.textContent = array[i];
    //     show.appendChild(div);
    //     console.log(array[i]);
    // }


    show.innerHTML = array.join('<br />');
}
showData();





document.getElementById('push').addEventListener('click', push);
document.getElementById('pop').addEventListener('click', push);
document.getElementById('pick').addEventListener('click', pick);

function push() {
    let input = document.getElementById('push_input').value
    array.push(input)
    showData();
    console.log(array)
}

// pop function 
function pop(){
    let input = document.getElementById('push_input').value
    array.pop(input);
    console.log(array)
    showData();
}

// pop function 
function pick(){
    let input = document.getElementById('push_input').value
    let picking = array.peek(input);
    console.log(picking)
    showData();
}