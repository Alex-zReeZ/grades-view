const button = document.querySelector('#button-1');
const inputValue = document.getElementById('sem1')
let allGrades = document.querySelector('#allGrades')

//all the color for the circles
const redSVG = document.querySelector('#')



button.addEventListener('click', () => {
    const newValue = document.createElement('span');
    newValue.className = "inline-flex items-center gap-x-1.5 rounded-md px-2 py-2 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200"
    console.log(newValue)

    let circle = document.createElement('svg')




    newValue.appendChild(document.createTextNode(inputValue.value))

    if (allGrades) {
        allGrades.appendChild(newValue)
    }
})




