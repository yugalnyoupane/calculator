let buttonIndex = 12;

window.onload = () => {
    while(buttonIndex>=0){
        const numberButton = document.createElement("button");
        numberButton.classList.add(buttonIndex); //indexing the button
        const numberContainer = document.querySelector(".mainContainer .rowContainer .numberContainer")
        numberContainer.appendChild(numberButton);
        if(buttonIndex<=9){
            numberButton.innerHTML = buttonIndex;
        }
        else{
            
        }

        buttonIndex--;

    }
}