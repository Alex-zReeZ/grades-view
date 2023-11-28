
const button = document.querySelector('#button-1');
const inputValue = document.getElementById('sem1')
let allGrades = document.querySelector('#allGrades')

//all the color for the circles before the grade
const redSVG = document.querySelector('#redSVG').content.querySelector("svg")
const orangeSVG = document.querySelector('#orangeSVG').content.querySelector("svg")
const greenSVG = document.querySelector('#greenSVG').content.querySelector("svg")


// add grade to the list
button.addEventListener('click', () => {
    //take the number in input
    const newValue = document.createElement('span');
    newValue.className = "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"

    //what color goes before the grade
    let circle = document.createElement('svg');

    if (inputValue.value < 4) {
        circle = redSVG.cloneNode(true)
    }
    else if (inputValue.value > 4) {
        circle = greenSVG.cloneNode(true)
    }
    else if (inputValue.value === 4 + ""){
        circle = orangeSVG.cloneNode(true)
    }

    newValue.appendChild(circle)
    newValue.appendChild(document.createTextNode(inputValue.value))
    console.log(circle)


    if (allGrades && inputValue.value >= 1 && inputValue.value <= 6) {
        allGrades.appendChild(newValue)
    }
})




