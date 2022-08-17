document.getElementById('login-button').addEventListener('click', function(){
   const userEmail = getUserInformation('emailField'); 
   const userPassword = getUserInformation("passwordField"); 
   if(userEmail === "mostafiz@bank.com" && userPassword==="takanebo"){
         window.location.href = "bank.html"; 
   }else{
      alert("Tui password vul diyecis tore tk devo na. "); 
   }
})