let cal_button = document.querySelector('.cal_button')
//variable to store cal_button class children elements in an array  
let new_buttons = [...cal_button.children]
// define an empty variable call problem(math problems to be solved)
var problems = '';
//new variable to hold .display class attributes
let display = document.querySelector('.display')

// map function to add onclick event to each element in new_button and return an arrow function that does a specific task
new_buttons.map(new_button=>{
    // simple function to do stuff on the calculator after the click event 
    new_button.addEventListener('click', ()=>{
        let interVal = new_button.textContent;
        if (interVal == "clear") {
            display.textContent = ""

        }
        else if(interVal == '='){
            let ans = eval(display.textContent)
            display.textContent = ans
            console.log(display.textContent)
        }
        else {
            
            problems += interVal
            display.textContent += problems
            problems = ''
        }
    })
})
