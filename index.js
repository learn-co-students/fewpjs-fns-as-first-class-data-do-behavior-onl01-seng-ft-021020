/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
    const timeArray = timeString.split(':')
    const hour = parseInt(timeArray[0])
    let greeting = ""
    if (hour < 12) {
        greeting = "Good Morning"
    } else if (hour < 17) {
        greeting = "Good Afternoon"
    } else {
        greeting = "Good Evening"
    }
    return greeting
}

function displayMessage(message) {
    document.getElementById('greeting').innerText = message
}