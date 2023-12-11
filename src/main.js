const buttonSemester = document.querySelector('#button-semester');
const redSVG = document.querySelector('#redSVG').content.querySelector("svg")
const orangeSVG = document.querySelector('#orangeSVG').content.querySelector("svg")
const greenSVG = document.querySelector('#greenSVG').content.querySelector("svg")

let allOfAverage = [];
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
        const rightAverageElement = Semester.querySelector('.rightAverage');
    
        // adds up every number in grade array
        let sum = 0;
        for (const grade of allGrades) {
            sum += grade;
        }

        // round the average to X.0 (X) and X.5 
        let average = sum / allGrades.length;
        average = Math.round(average*2)/2;
        // Clear previous content
        rightAverageElement.innerHTML = ''; 
    
        // create svg for average color
        let semesterAverage = document.createElement('svg');
    
        //verify wich color to show to average
    
        if (average <= 6 && average % 0.5 === 0 && average > 0.5) {
            if (average > 4) {
                semesterAverage = greenSVG.cloneNode(true);
            } else if (average < 4) {
                semesterAverage = redSVG.cloneNode(true);
            } else if (average === 4) {
                semesterAverage = orangeSVG.cloneNode(true);
            }
        allOfAverage.push(average)
/*         console.log(allOfAverage)
 */    
        rightAverageElement.appendChild(semesterAverage);
        }
        console.log(average)

        rightAverageElement.appendChild(document.createTextNode(average));

        /*********************************average of average ************************************/
        const averageOfAverage = document.querySelector('.averageOfAverage');

        let sum2 = 0;
        for (const average2 of allOfAverage) {
            sum2 += average2;
        }
    
        let average3 = sum2 / allOfAverage.length;
        average3 = Math.round(average3 * 2) / 2;
    
        let average4 = document.createElement('svg');
    
        if (average3 <= 6 && average3 % 0.5 === 0 && average3 > 0.5) {
            if (average3 > 4) {
                average4 = greenSVG.cloneNode(true);
            } else if (average3 < 4) {
                average4 = redSVG.cloneNode(true);
            } else if (average3 === 4) {
                average4 = orangeSVG.cloneNode(true);
            }

        // Clear previous average of averages
        averageOfAverage.innerHTML = ''; 
        averageOfAverage.appendChild(average4);
        }
        averageOfAverage.appendChild(document.createTextNode(average3));

    });



    
    /************************************** Hover when focus *****************************/
    const borderButtonColor = Semester.querySelector('#borderColorButton')
    const uploadSvg = Semester.querySelector('svg');

    // change the border and the svg color to blue when input in focused
    inputValue.addEventListener("focus", () => {
        // change the svg to blue when input focused
        uploadSvg.classList.remove("text-gray-400");
        uploadSvg.classList.add("text-blue-400");   
        
        // change the button border to blue when input focused
        borderButtonColor.classList.remove("ring-gray-300")
        borderButtonColor.classList.add("ring-blue-300")
    });
    
    // change the border and the svg color back to blue when input focus is loosed
    inputValue.addEventListener("blur", function() {
        // change the svg back to gray when input focused
        uploadSvg.classList.remove("text-blue-400");
        uploadSvg.classList.add("text-gray-400");   
        
        // change the button border back to gray when input isn't focus
        borderButtonColor.classList.remove("ring-blue-300")
        borderButtonColor.classList.add("ring-gray-300")
    });


});

