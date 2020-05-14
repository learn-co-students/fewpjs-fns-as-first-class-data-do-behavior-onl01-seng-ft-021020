/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input) {
  let hour = input.split(':')[0];
  let result = parseInt(hour);

  if(result < 12){
    return "Good Morning";
  }
  else if(result >= 12 && result < 17){
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */

function displayMessage(input){
  document.getElementById("greeting").innerText = input;

}
