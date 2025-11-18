let buttonIndex = 9;
let stack = [];
let ans = 0;


const operate = (seq) => {

    let size = seq.length;
    let nextNum = "";
    let nums = [];
    let ops = [];

    // STEP 1 → Combine digits & separate into nums[] and ops[]
    for (let i = 0; i < size; i++) {

        if (!isNaN(seq[i])) {
            nextNum += seq[i]; 
        } 
        else {
            nums.push(Number(nextNum));
            ops.push(seq[i]);
            nextNum = "";
        }
    }

    // push last number
    if (nextNum !== "") nums.push(Number(nextNum));

    console.log("nums =", nums);
    console.log("ops  =", ops);

    // STEP 2 → Handle * and / first
    let i = 0;
    while (i < ops.length) {
        if (ops[i] === "*") {
            nums[i] = nums[i] * nums[i + 1];
            nums.splice(i + 1, 1);
            ops.splice(i, 1);
        }
        else if (ops[i] === "/") {
            nums[i] = nums[i] / nums[i + 1];
            nums.splice(i + 1, 1);
            ops.splice(i, 1);
        }
        else {
            i++;
        }
    }

    // STEP 3 → Now handle + and -
    i = 0;
    while (i < ops.length) {
        if (ops[i] === "+") {
            nums[i] = nums[i] + nums[i + 1];
        }
        else if (ops[i] === "-") {
            nums[i] = nums[i] - nums[i + 1];
        }

        nums.splice(i + 1, 1);
        ops.splice(i, 1);
    }

    // Final answer
    console.log("ANSWER =", nums[0]);
    const screen = document.querySelector(".mainContainer .screen");
    screen.innerHTML = ""
    let screenText = document.createElement("h1");
    screenText.classList.add("textData");
    screen.appendChild(screenText)
    screenText.innerHTML = nums[0];
    

    
};



window.onload = () => {
    //numericalButtons
    while(buttonIndex>-3){
        let numberButton = document.createElement("button");
        numberButton.classList.add(`btn-index${buttonIndex}`,"numberButton"); //indexing the button
        const numberContainer = document.querySelector(".mainContainer .rowContainer .numberContainer")
        numberContainer.appendChild(numberButton);
        if(buttonIndex==0){
            numberButton.innerHTML = "=";
        }
        else if(buttonIndex ==-1){
            numberButton.innerHTML = 0;
        }
        else if(buttonIndex ==-2){
            numberButton.innerHTML = ".";
        }
        else{
            numberButton.innerHTML = buttonIndex;
        }
        

        numberButton.addEventListener("click",()=>{
            if(numberButton.innerHTML == "="){
                operate(stack);
            }
            else{
                stack.push(numberButton.innerHTML)
                let screenText = document.createElement("h1");
                screenText.classList.add("textData");
                const screen = document.querySelector(".mainContainer .screen")
                screen.appendChild(screenText)
                screenText.innerHTML = numberButton.innerHTML;
                console.log(stack)
            }
            
        })
        
        buttonIndex--; 
    }
    //buttonIndex is at -3 at the last index here

    while(buttonIndex>-7){
        const operatorButton = document.createElement("button");
        operatorButton.classList.add(`btn-index${buttonIndex}`,"operatorButton");
        const operatorContainer=document.querySelector(".mainContainer .rowContainer .operatorContainer")
        operatorContainer.appendChild(operatorButton);

        switch(buttonIndex){
            case -3:
                operatorButton.innerHTML = "-";
                break;
            case -4:
                operatorButton.innerHTML = "+";
                break;
            case -5:
                operatorButton.innerHTML = "*";
                break;
            case -6:
                operatorButton.innerHTML = "/";
                break;
            
        }
        operatorButton.addEventListener("click",()=>{
            stack.push(operatorButton.innerHTML)
            screenText=document.createElement("h1");
            screenText.classList.add("textData");
            screen = document.querySelector(".mainContainer .screen");
            screen.appendChild(screenText);
            screenText.innerHTML = operatorButton.innerHTML;
            console.log(stack)
        })

        buttonIndex--;
    }
}