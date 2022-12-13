//Start of third challenge


//assign salary input tag
const salary = document.querySelector("#salary");

//assign button to submit gross salary
const salarySubmit = document.querySelector("#salarySubmit");

//output the gross salary, NSSF, NHIF, PAYEE and net Salary
const grossOutput = document.querySelector("#gross");
const nssfOutput = document.querySelector("#nssf");
const nhifOutput = document.querySelector("#nhif");
const netOutput = document.querySelector("#net");
const payeOutput = document.querySelector("#paye");


/**
 * salaryCal: calculates gross salary, NSSF, NHIF, PAYEE and net Salary
 * 
 * output: outputs the gross salary, NSSF, NHIF, PAYEE and net Salary
 */

function salaryCal(){
    let grossSalary = salary.value;
    let NHIF, PAYE, NSSF, netSalary;
    const personalRelief = 2400;


//calculates NHIFDeduction 
    if(grossSalary >= 0 && grossSalary <= 5999){
        NHIF = 150;
    }else if(grossSalary >= 6000 && grossSalary <= 7999){
        NHIF = 300;
    }else if(grossSalary >= 8000 && grossSalary <= 11999){
        NHIF = 400;
    }else if(grossSalary >= 12000 && grossSalary <= 14999){
        NHIF = 500;
    }else if(grossSalary >= 15000 && grossSalary <= 19999){
        NHIF = 600;
    }else if(grossSalary >= 20000 && grossSalary <= 24999){
        NHIF = 750;
    }else if(grossSalary >= 25000 && grossSalary <= 29999){
        NHIF = 850;
    }else if(grossSalary >= 30000 && grossSalary <= 34999){
        NHIF = 900;
    }else if(grossSalary >= 35000 && grossSalary <= 39999){
        NHIF = 950;
    }else if(grossSalary >= 40000 && grossSalary <= 44999){
        NHIF = 1000;
    }else if(grossSalary >= 45000 && grossSalary <= 49999){
        NHIF = 1100;
    }else if(grossSalary >= 50000 && grossSalary <= 59999){
        NHIF = 1200;
    }else if(grossSalary >= 60000 && grossSalary <= 69999){
        NHIF = 1300;
    }else if(grossSalary >= 70000 && grossSalary <= 79999){
        NHIF = 1400;
    }else if(grossSalary >= 80000 && grossSalary <= 89999){
        NHIF = 1500;
    }else if(grossSalary >= 90000 && grossSalary <= 99999){
        NHIF = 1600;
    }else if(grossSalary >= 100000){
        NHIF = 1700;
    }else{
        NHIF = "Enter a valid salary"
    }



//calculates NSSFDeductions
if(grossSalary > 0 && grossSalary <= 6000){
        NSSF = (grossSalary * 0.06);
    }else if(grossSalary > 6000 && grossSalary <= 18000){
        NSSF = (360 + (grossSalary-6000) * 0.06);
    }else if(grossSalary > 18000){
        NSSF = 1080;
    }

    const insuranceRelief = NHIF * 0.15;
    const taxablePay = grossSalary - NSSF



//calculates PAYEE i.e Taxs
    if(taxablePay >= 0 && taxablePay <= 24000){
        PAYE = ((taxablePay * 0.1) - personalRelief - insuranceRelief);
    }else if(taxablePay > 24000 && taxablePay <= 32333){
        PAYE = ((taxablePay-24000) * 0.25) + ((24000 * 0.1)) - personalRelief - insuranceRelief; 
    }else if(taxablePay > 32333){
        PAYE = ((24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3) - personalRelief - insuranceRelief);
    }else{
        PAYE = "Enter a valid Salary";
    }

    //makes sure PAYE is positive
    if (PAYE < 0){
        PAYE = 0;
    }


//calculates netSalary
    netSalary = Math.floor(grossSalary-PAYE-NSSF-NHIF);

//outputs the gross salary, NSSF, NHIF, PAYEE and net Salary
    grossOutput.textContent =  `Gross Salary: KSH ${grossSalary}`;
    nssfOutput.textContent =  `NSSFDeductions: KSH ${NSSF}`;
    nhifOutput.textContent =  `NHIFDeductions: KSH ${NHIF}`;
    payeOutput.textContent = `PAYEE: KSH ${Math.round(PAYE)}`
    netOutput.textContent   = `Net Salary: KSH ${netSalary}`;

}

//eventListener for submiting gross pay
salarySubmit.addEventListener("click",salaryCal);

//End of third challenge