document.getElementById('dipositeBtn').addEventListener('click', function(){
     const newDiposite  = getInputValue("dipositeField"); 
     const previousDiposite = getElementValue('dipositeTotal'); 
     const dipositeTotal = newDiposite + previousDiposite; 
     setElementValue("dipositeTotal", dipositeTotal); 
     const previousBalance = getElementValue('totalBalance'); 
     const totalBalance = newDiposite + previousBalance;
     setElementValue('totalBalance', totalBalance); 

}); 


document.getElementById('withdrawBtn').addEventListener('click', function(){
   const newWithdraw = getInputValue('withdrawField'); 
   const previousWithdraw = getElementValue('withdrawTotal'); 
   const previousBalance = getElementValue('totalBalance'); 
   if(previousBalance < newWithdraw){
      alert(`You have no enough balance. You have only $ ${previousBalance}`); 
      return 0; 
   }
   const totalWithdraw = newWithdraw + previousWithdraw; 
   setElementValue("withdrawTotal", totalWithdraw); 
   const newBalance = previousBalance - newWithdraw; 
   setElementValue('totalBalance', newBalance); 
}); 
