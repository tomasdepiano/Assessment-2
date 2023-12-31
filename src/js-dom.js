// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

// 1. when someone clicks the button it should update and say "Log Out" - done

// 2. If it's clicked again, the text should switch from Log Out to Log In

const myButton = document.querySelector("#auth");
// console.log(myButton);
// console.dir(myButton);
myButton.addEventListener("click", () => {
  if (myButton.innerText === "Log in") {
    myButton.innerText = "Log out";
  } else {
    myButton.innerText = "Log in";
  }
});
// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

document
  .querySelector("#send-alert")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const alerText = document.querySelector("#alert-message").value;
    alert(alerText);
  });

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-ulick to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

document.querySelector("#item-adder").addEventListener("dblclick", () => {
  const list = document.querySelector("#list");
  const newItem = document.createElement("li");
  newItem.textContent = "Item";
  list.appendChild(newItem);
});

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

// use an event listener to change the color of the class to blue and red

document.getElementById("red").addEventListener("click", () => {
  const elements = document.getElementsByClassName("changes-colors");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
});

document.getElementById("blue").addEventListener("click", () => {
  const elements = document.getElementsByClassName("changes-colors");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "blue";
  }
});

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span
// console.log(document);
document
  .getElementById("factorial-calculator")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const number = document.getElementById("factorial-input").value;
    const factorial = getFactorial(number);
    document.getElementById("result").textContent = factorial;
  });

function getFactorial(num) {
  let factorial = 1;
  for (let i = num; i > 1; i--) {
    factorial *= i;
    console.log(factorial);
  }
  return factorial;
}

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

document.addEventListener("DOMContentLoaded", function () {
  const wordForm = document.getElementById("recommend-word");
  const wordInput = document.getElementById("word");
  const feedback = document.getElementById("submit");

  wordForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally

    const enteredText = wordInput.value.trim(); // Remove leading/trailing white spaces

    if (enteredText.length >= 4) {
      feedback.textContent = "Thanks for your submission!";
      feedback.style.color = "green";
    } else if (enteredText.length >= 3) {
      feedback.textContent = "The word must be at least 4 characters long.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "The word is too short.";
      feedback.style.color = "red";
    }
  });
});
