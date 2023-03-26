window.onload = function () { document.body.classList.remove('is-preload') }
window.ontouchmove = function () { return false }
window.onorientationchange = function () { document.body.scrollTop = 0 }
// Get all the li elements
const navLinks = document.querySelectorAll('nav ul li')

// Get the h1 element
const heading = document.querySelector('header h1')

// Add an event listener to each li element
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    // Get the span element inside the a element
    const label = link.querySelector('a span')
    // Set the text content of the h1 element to the text content of the span element
    heading.textContent = label.textContent
  })
  link.addEventListener('mouseout', () => {
    // Set the text content of the h1 element back to its original value
    heading.textContent = 'Hello, Erm'
  })
})

const date = new Date()
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function updateTime() {
  const date = new Date()
  const dayOfWeek = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = date.getDate()

  let hour = date.getHours()
  const ampm = hour >= 12 ? 'pm' : 'am'
  hour %= 12
  hour = hour ? hour : 12
  const minute = date.getMinutes().toString().padStart(2, '0')

  const datetimeOutput = `${dayOfWeek}, ${month} ${dayOfMonth}
  <br>
  <br>
  <span style="display: block">${hour}:${minute} ${ampm}</span>`

  document.getElementById("datetime").innerHTML = datetimeOutput
}

updateTime() // Call the function once to display the initial date and time

setInterval(updateTime, 1000) // Call the function every second to update the time

//To-Do List
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("todoInput");
  const task = taskInput.value.trim();
  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    updateList();
  }
}

function updateList() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);
  });
}


