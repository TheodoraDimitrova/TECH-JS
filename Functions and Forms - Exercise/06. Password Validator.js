function validatePass(password) {
  let length = validateLength(password);
  let lettersAndDigits = validateLetters(password);
  let digits = validateDigits(password);
  let output = [];

  if (!length) {
    console.log("Password must be between 6 and 10 characters");
  }
   if(!lettersAndDigits) {
       console.log( "Password must consist only of letters and digits");
   }
   if(!digits) {
      console.log( "Password must have at least 2 digits");
   }
   if(length && lettersAndDigits && digits) {
       console.log("Password is valid");
   }
  
  function validateLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
      return true;
    } else {
      return false;
    }
  }
  function validateLetters(pass) {
    if (pass.match("/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/")) {
      return true;
    } else {
      return false;
    }
  }
  function validateDigits(pass) {
    if (pass.match("/(?=(.*d){2})/")) {
      return true;
    } else {
      return false;
    }
  }
}
validatePass("logIn");
