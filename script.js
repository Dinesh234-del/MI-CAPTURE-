function validateLoginForm() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }

  // Simple dummy login
  if (email === "test@taskflow.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // redirect
    return false;
  } else {
    alert("Invalid credentials.");
    return false;
  }
}
function validateRegisterForm() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Registration successful!");
  window.location.href = "login.html";
  return false;
}
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  displayTasks();
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

window.onload = displayTasks;
let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === slideIndex) slide.classList.add("active");
  });

  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000);
}

window.onload = function () {
  if (slides.length > 0) showSlides();
  displayTasks?.(); // Optional for gallery/dashboard
};
function validateLoginForm() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("Please enter both email and password.");
    return false;
  }

  if (email === "micaptures@test.com" && password === "123456") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // redirect
    return false;
  } else {
    alert("Invalid credentials.");
    return false;
  }
}
function validateRegisterForm() {
  const name = document.getElementById("registerName").value.trim();
  const email = document.getElementById("registerEmail").value.trim();
  const password = document.getElementById("registerPassword").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    alert("Please fill in all fields.");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  alert("Registration successful!");
  window.location.href = "login.html";
  return false;
}

