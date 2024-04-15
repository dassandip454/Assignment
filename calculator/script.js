document.getElementById("calculateBtn").addEventListener("click", function() {
   
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
      return;
    }
    
   
    let result;
    
    switch(operator) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if(num2 !== 0) {
          result = num1 / num2;
        } else {
          result = "Cannot divide by zero";
        }
        break;
      default:
        result = "Invalid operator";
    }
    

    document.getElementById("result").innerHTML = "Result: " + result;
  });
  