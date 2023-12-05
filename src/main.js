const buttonSemester = document.querySelector('#button-semester');
const redSVG = document.querySelector('#redSVG').content.querySelector("svg")
const orangeSVG = document.querySelector('#orangeSVG').content.querySelector("svg")
const greenSVG = document.querySelector('#greenSVG').content.querySelector("svg")


let semesterNumber = 1;

/******************************add a semester **********************************/
buttonSemester.addEventListener('click', () => {
    let allGrades = [];



    /*const newSemester = document.querySelector('#semester-template').content.cloneNode(true);
    const semesterPlacement = document.querySelector('#semesterGrid');
    semesterPlacement.appendChild(newSemester)

    const Semester = semesterPlacement.lastElementChild

    //print the semester count on the page
    Semester.querySelector("dt").textContent = "Semester " + semesterNumber;

    //add 1 to the semester count
    if (semesterNumber <= 7) {
        //add 1 on the number of semester
        semesterNumber++;
    } else if (semesterNumber > 7) {
        //remove button if 8 semester
        buttonSemester.remove();
    }

*/
    /*****************************add a grades to the semester**********************/
    const button = Semester.querySelector('button');
    const inputValue = Semester.querySelector('input')
    const gradesList = Semester.querySelector('dd').querySelector("div")


    button.addEventListener('click', () => {
        //take the number in input
        if (inputValue.value <= 6 && inputValue.value % 0.5 === 0 && inputValue.value > 0.5) {
            const newValue = document.createElement("span");
            newValue.className =
                "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200";

            let newSvg = document.createElement("svg");

            if (inputValue.value > 4) {
                newSvg = greenSVG.cloneNode(true);
            } else if (inputValue.value < 4) {
                newSvg = redSVG.cloneNode(true);
            } else {
                newSvg = orangeSVG.cloneNode(true);
            }
            newValue.appendChild(newSvg);
            newValue.appendChild(document.createTextNode(inputValue.value));

            if (gradesList) {
                gradesList.appendChild(newValue);
            }
        }
    })

    /************************************** show the average *********************************/
    document.addEventListener('DOMContentLoaded', function () {
        const divElements = document.querySelectorAll('#rightAverage');
        let sum = 0;

        divElements.forEach(div => {
            const gradeValue = parseFloat(div.textContent);
            sum += gradeValue;


            if (gradeValue <= 6 && gradeValue % 0.5 === 0 && gradeValue > 0.5) {
                let averageSvg;

                if (gradeValue > 4) {
                    averageSvg = greenSVG.cloneNode(true);
                } else if (gradeValue < 4) {
                    averageSvg = redSVG.cloneNode(true);
                } else {
                    averageSvg = orangeSVG.cloneNode(true);
                }

            }
        });
    });
})
/************************************** Hover when focus *****************************/
/*
button.addEventListener('focus', () => {
    const border = document.querySelector('#input');
})
*/
