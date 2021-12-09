var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0
var color = document.getElementsByTagName('span')[0]

function increment() {
    if (currentNumber >= 1) {
        color.style.color = 'green'
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber < 0) {
        color.style.color = 'red'
    }

}