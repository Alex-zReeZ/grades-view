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
    button.addEventListener('click', function () {
        const rightAverageElement = document.querySelector('#rightAverage');
    
        let sum = 0;
        for (const grade of allGrades) {
            sum += grade;
        }
        let average = sum / allGrades.length;
        average = Math.round(average*2)/2;
        rightAverageElement.innerHTML = ''; // Clear previous content
    
        let averagebig = document.createElement('svg');
    
        if (average <= 6 && average % 0.5 === 0 && average > 0.5) {
            if (average > 4) {
                averagebig = greenSVG.cloneNode(true);
            } else if (average < 4) {
                averagebig = redSVG.cloneNode(true);
            } else if (average === 4) {
                averagebig = orangeSVG.cloneNode(true);
            }
    
            rightAverageElement.appendChild(averagebig);
        }
    
        rightAverageElement.appendChild(document.createTextNode(average));
    });
    

});

/************************************** Hover when focus *****************************/
/*
button.addEventListener('focus', () => {
    const border = document.querySelector('#input');
})
*/