/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time){
  let currentTime = time.split(':');
  let hour = parseInt(currentTime[0]);
  if (hour<12){
    return "Good Morning";
  } else if (hour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}


/* Write your implementation of displayMessage() */	/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  const element = document.getElementById("greeting");
  element.innerText = msg;
  return msg;
}