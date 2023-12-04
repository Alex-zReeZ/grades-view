const button = document.querySelector('#button-1');
const buttonSemester = document.querySelector('#button-semester');
const inputValue = document.getElementById('sem1')

let allGrades = document.querySelector('#allGrades')
let semesterNumber = 1;



/*****************************add a grades to the semester**********************/
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
        grades.push(inputValue.value)
    }
    else if (inputValue.value > 4) {
        circle = greenSVG.cloneNode(true)
        grades.push(inputValue.value)
    }
    else if (inputValue.value === 4 + ""){
        circle = orangeSVG.cloneNode(true)
        grades.push(inputValue.value)
    }

    newValue.appendChild(circle)
    newValue.appendChild(document.createTextNode(inputValue.value))

    if (allGrades && inputValue.value >= 1 && inputValue.value <= 6) {
        allGrades.appendChild(newValue)
    }
})

/**************************** calculate the average ******************************/
document.addEventListener('DOMContentLoaded', function () {
    const divElements = document.querySelectorAll('#allGrades');

    let somme = 0;

    divElements.forEach(div => {

        const gradeValue = parseFloat(div.getAttribute('data-valeur')) || 0;

        somme += gradeValue;
    });
});

/*************************** Hover when focused ********************************/
button.addEventListener('focus', (event) => {
    const buttonClassList = button.classList;
    const classSVG = button.querySelector("#uploadSVG");

    buttonClassList.remove("ring-gray-300");

    classSVG.classList.remove("mx-auto h-8 w-8 text-gray-400");
    classSVG.classList.add("mx-auto h-8 w-8 text-blue-400");
  });
button.addEventListener("blur", (event) => {
    const buttonClass = button.classList;
    const svgClassList = button.querySelector("#uploadSVG");

    buttonClass.remove("ring-blue-300");
    buttonClass.add("ring-gray-300");

    svgClassList.classList.remove("text-blue-400");
    svgClassList.classList.add("text-gray-400");
  });


/******************************add a semester **********************************/
buttonSemester.addEventListener('click', () => {
    const newSemester = document.querySelector('#semester-template').content.cloneNode(true);
    const semesterPlacement = document.querySelector('#semesterClass');
    semesterPlacement.appendChild(newSemester)

    const Semester = semesterPlacement.lastElementChild

    //print the semester count on the page
    Semester.querySelector("dt").textContent = "Semester " + semesterNumber;

    //add 1 to the semester count
    if (semesterNumber <= 7) {
        //add 1 on the number of semester
        semesterNumber++;
    } else if (semesterNumber > 7 ) {
        //remove button if 8 semester
        buttonSemester.remove();
    }

})







