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
document.getElementById('pop').addEventListener('click', pop);
document.getElementById('peek').addEventListener('click', peek);

function push() {
    let input = document.getElementById('push_input').value
    array.push(input)
    showData();
    console.log(array)
}

// pop function 
function pop(){
    let poppedElement = array.pop();
    console.log(poppedElement);
    showData();
}

// pop function 
// function peek(){
//     let topElement = peek(array);
//     console.log(topElement)
//     showData();
// }

const myStack = [1, 2, 3, 4];
const topElement = peek(myStack);
console.log("Top element:", topElement);