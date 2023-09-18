// Fundamentals Part 1 - Assignment

// 1. 
  function add7(number){
    return number + 7
  }
  console.log("ADD: ", add7(10))

// 2.
  function multiply(x,y){
    return x * y
  }
  console.log("MULTIPLY: ",multiply(9,9))
  
// 3.
  function capitalize(caps){
    return caps.toUpperCase()
  }
  function decapitalize(decaps){
    return decaps.toLowerCase()
  }
  console.log(capitalize("uppercase"), decapitalize("LOWERCASE"))

 // 4.
 function lastLetter(returnLastLetter){
  return returnLastLetter.charAt(returnLastLetter.length - 1)
 }
 function firstLetter(returnFirsttLetter){
  return returnFirsttLetter.charAt(0)
 }

 let lastname = "Encinares"
 console.log("Lastname: ", lastname)
 console.log("First Letter: ", firstLetter(lastname))
 console.log("Last Letter: ", lastLetter(lastname))