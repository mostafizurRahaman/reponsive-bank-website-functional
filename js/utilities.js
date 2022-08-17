function getUserInformation(inputId){
   const inputField =  document.getElementById(inputId); 
   const userValue = inputField.value ; 
   inputField.value = ""; 
   return userValue; 
}


function getInputValue(inputId){
   const inputField = document.getElementById(inputId); 
   const inputValueString = inputField.value; 
   inputField.value = ""; 
   const inputValue = parseFloat(inputValueString);    
   if(isNaN(inputValue) === true){
      alert('Please enter valid number of input.')
      return 0; 
   }
   return inputValue; 
}

function getElementValue(inputId){
   const element = document.getElementById(inputId); 
   const elementValueString = element.innerText; 
   const elementValue = parseFloat(elementValueString); 
   return elementValue; 
}

function setElementValue(inputId , newValue){
   const element = document.getElementById(inputId); 
   element.innerText = newValue; 
}