//Start of first challenge

//assign the studentMarksPrompt button.
const studentPrompt = document.getElementById("studentMarksPrompt");

//assign the value input from the prompt.
const result = document.getElementById("result");


/**
 * grading: Takes value from prompt and converts to grade.
 *
 * Output: Outputs the grade equivalent to the marks input from prompt.
*/
function grading(){
    let marks = prompt("Please input student marks between 0 and 100","");
    let grade;

// Takes in marks and outputs depending on condition
    if (marks > 79 && marks <= 100){
        grade = "A";
        alert(`Student grade is: ${grade}`);
        result.textContent = `Student grade is: ${grade}`;
    }else if(marks >= 60 && marks <= 79){
        grade = "B";
        alert(`Student grade is: ${grade}`);
        result.textContent = `Student grade is: ${grade}`;
    }else if(marks >= 49 && marks <= 59){
        grade = "C";
        alert(`Student grade is: ${grade}`);
        result.textContent = `Student grade is: ${grade}`;
    }else if(marks >= 40 && marks <= 49){
        grade = "D";
        alert(`Student grade is: ${grade}`);
        result.textContent = `Student grade is: ${grade}`;
    }else if(marks < 40 && marks >= 0){
        grade = "E";
        alert(`Student grade is: ${grade}`);
        result.textContent = `Student grade is: ${grade}`;
    }else{
        grading();
    }
}

//calls function grading when studenMarksPrompt button is clicked
studentPrompt.addEventListener("click",grading);

//End of first challenge