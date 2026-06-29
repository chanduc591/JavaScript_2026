//1. Credit Score:
// If the credit score is above 750, the loan is automatically approved.
//If the credit score is between 650 and 750, additional checks are performed.
//If the credit score is below 650, the loan is denied.


let creditscore:number=650;

if(creditscore>750){
console.log(`Loan is automatically approved.`);
}
else if(creditscore>=650 &&creditscore<=750){

console.log(` Additional checks are performed`);
}
else if(creditscore<=650){
   
    console.log(`The loan is denied.`);

}else{
console.log(`invalid credit score.`);
}

//Income:
// For credit scores between 650 and 750, the customer’s income must be at least $50,000 for the loan to be considered.

let income:number=60000;

 if(creditscore>=650 &&creditscore<=750){

    if(income>=50000){
    
    console.log(`The customers income must be at least $50,000 for the loan to be considered`);
    }
}

//Employment Status:
// If the customer’s income is at least 50,000, the system checks whether the customer is employed.
// If the customer is unemployed, the loan is denied.

let EmploymentStatus:string="employed";
if(creditscore>=650 &&creditscore<=750  && income>=50000){
 if(EmploymentStatus=="employed"){
    console.log(`customer is employed,the loan is considered`);

 }else if(EmploymentStatus=="unemployed"){
    console.log(`customer is unemployed,the loan is denied`);

 }

}


//Create common function and then based on below details, print whether user is eligible to get the loan or not
//customerName = "John Doe";
//creditScore = 720;
//income = 55000.0;
//isEmployed = true;
//debtToIncomeRatio = 35.0;

function checkLoanEligibility(customerName:string="John Doe", creditScore:number=720, income:number=55000, isEmployed:boolean=true, debtToIncomeRatio:number=35.0):void{
    if(creditScore>750){
        console.log(`${customerName} is eligible for the loan.`);
    }
    else if(creditScore>=650 && creditScore<=750){
        if(income>=50000){
            if(isEmployed){
                if(debtToIncomeRatio<40){
                    console.log(`${customerName} is eligible for the loan.`);
                }else{
                    console.log(`${customerName} is not eligible for the loan due to high debt-to-income ratio.`);
                }
            }else{
                console.log(`${customerName} is not eligible for the loan due to unemployment.`);
            }
        }else{
            console.log(`${customerName} is not eligible for the loan due to insufficient income.`);
        }
    }else{
        console.log(`${customerName} is not eligible for the loan due to low credit score.`);
    }
}

//Debt-to-Income Ratio:
// If the customer is employed, the system checks the debt-to-income (DTI) ratio.
//If the DTI ratio is less than 40%, the loan is approved.
//If the DTI ratio is 40% or greater, the loan is denied.
 let debtToIncomeRatio:number=35.0;
 checkLoanEligibility();
 if(debtToIncomeRatio<40){
    console.log(`The loan is approved.`);
 }else if(debtToIncomeRatio>=40){
    console.log(`The loan is denied.`);
 }