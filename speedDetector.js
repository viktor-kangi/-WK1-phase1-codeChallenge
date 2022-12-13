//Start of second challenge

//assign to the speed input tag
const speed = document.querySelector("#speed");

//assigning the submit button
const submitSpeed = document.querySelector("#speedSubmit");

//assign paragraph taking the output from the speedDetector
const speedReview = document.querySelector("#speedReview");


/** 
* speedDetector: takes in speed and outputs depending on speed.
*  
* Output: if speed is < 70, 'OK' is output,
*                  is > 70, gives 1 demerit point,
*                  if demerit points is more than 12 License suspended
*/
function speedDetector(){
    let driverSpeed = speed.value;


// Checks speed and outputs depending with condition met.
    if(driverSpeed <= 70 && driverSpeed >= 0){
        speedReview.textContent = "Ok";
    }else if(driverSpeed > 70){
        let demerit = Math.ceil((driverSpeed - 70)/5);       
        if(demerit >= 12){
            speedReview.textContent = "License suspended";
        }else{
            speedReview.textContent = `Points: ${demerit}`
        }
    }else{
        speedReview.textContent = "Please Enter a Valid speed";
    }
}

//calls speedDetector function when submit button is clicked
submitSpeed.addEventListener("click",speedDetector);


//End of second challenge