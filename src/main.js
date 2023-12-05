const buttonSemester = document.querySelector('#button-semester');
const redSVG = document.querySelector('#redSVG').content.querySelector("svg")
const orangeSVG = document.querySelector('#orangeSVG').content.querySelector("svg")
const greenSVG = document.querySelector('#greenSVG').content.querySelector("svg")

let semesterNumber = 1;

/******************************add a semester **********************************/
buttonSemester.addEventListener('click', () => {
    let allGrades = [];
    const newSemester = document.querySelector('#semester-template').content.cloneNode(true);
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

            let circle = document.createElement("svg");

            if (inputValue.value > 4) {
                circle = greenSVG.cloneNode(true);
            } else if (inputValue.value < 4) {
                circle = redSVG.cloneNode(true);
            } else {
                circle = orangeSVG.cloneNode(true);
            }

            newValue.appendChild(circle);
            newValue.appendChild(document.createTextNode(inputValue.value));
            allGrades.push(parseFloat(inputValue.value))

            if (gradesList) {
                gradesList.appendChild(newValue);
            }
        }
    })

    /************************************** show the average *********************************/
    document.addEventListener('click', function () {
        const rightAverageElement = document.querySelector('#rightAverage');

        let sum = 0;
        for (const Grades of allGrades) {
            sum += Grades
        }
        rightAverageElement.innerHTML = sum/ allGrades.length;

        let averagebig = rightAverageElement.createElement("svg");
        if (rightAverageElement <= 6 && rightAverageElement % 0.5 === 0 && rightAverageElement > 0.5) {

            if (rightAverageElement.value > 4) {
                averagebig = greenSVG.cloneNode(true);
            } else if (rightAverageElement.value < 4) {
                averagebig = redSVG.cloneNode(true);
            } else {
                averagebig = orangeSVG.cloneNode(true);
                }
            }
            rightAverageElement.appendChild(averagebig)

    });

});

/************************************** Hover when focus *****************************/
/*
button.addEventListener('focus', () => {
    const border = document.querySelector('#input');
})
*/
