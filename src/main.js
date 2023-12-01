const button = document.querySelector('#button-1');
const buttonSemester = document.querySelector('#button-semester');

const inputValue = document.getElementById('sem1')
let allGrades = document.querySelector('#allGrades')


let semesterNumber = 1;




/*****************************add a grades to the semester**********************/

// add grade to the list
button.addEventListener('click', () => {

    //all the color for the circles before the grade
    const redSVG = document.querySelector('#redSVG').content.querySelector("svg")
    const orangeSVG = document.querySelector('#orangeSVG').content.querySelector("svg")
    const greenSVG = document.querySelector('#greenSVG').content.querySelector("svg")


    //take the number in input
    const newValue = document.createElement('span');
    newValue.className = 
    "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"

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

    if (allGrades && inputValue.value >= 1 && inputValue.value <= 6) {
        allGrades.appendChild(newValue)
    }
})

//average calculator


//border color change when input is focused
button.addEventListener('focus', () => {
    const border = document.querySelector('#input');
    button.sty
})

/******************************add a semester **********************************/

buttonSemester.addEventListener('click', () => {
    //create the additional semester div for look
    const newSemester = document.createElement('div')
    newSemester.className = "px-4 py-6 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0"

    //add 1 to the semester count
    if (semesterNumber <= 7) {
    //add 1 on the number of semester
        semesterNumber++;
        console.log(semesterNumber)
    } else if (semesterNumber > 7 ) {
        //remove button if 8 semester
        buttonSemester.remove();
        className.remove('px-4 py-6 sm:gap-4 sm:px-0')
        className.remove('px-4 py-6 sm:gap-4 sm:px-0')
    }
    
    //print the semester count on the page
    newSemester.textContent = "Semester " + semesterNumber;
    const semesterPlacement = document.querySelector('#semesterClass')

    //input option
    const inputCase = document.createElement('div');
    
    newSemester.appendChild = inputCase;

    semesterPlacement.appendChild(newSemester)
})







