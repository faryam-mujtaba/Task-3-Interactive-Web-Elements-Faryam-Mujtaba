const themeToggle = document.getElementById("themeToggle");
const greetingBtn = document.getElementById("greetingBtn");
const greetingMessage = document.getElementById("greetingMessage");
const counterBtn = document.getElementById("counterBtn");
const clickCount = document.getElementById("clickCount");
const toggleContentBtn = document.getElementById("toggleContentBtn");
const toggleText = document.getElementById("toggleText");
const changeTextBtn = document.getElementById("changeTextBtn");
const changeText = document.getElementById("changeText");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

let count = 0;
let textChanged = false;

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});

greetingBtn.addEventListener("click", () => {
  greetingMessage.textContent =
    "Welcome! This message was updated dynamically using JavaScript.";
});

counterBtn.addEventListener("click", () => {
  count++;
  clickCount.textContent = count;
});

toggleContentBtn.addEventListener("click", () => {
  toggleText.classList.toggle("hide");

  if (toggleText.classList.contains("hide")) {
    toggleContentBtn.textContent = "Show Content";
  } else {
    toggleContentBtn.textContent = "Hide Content";
  }
});

changeTextBtn.addEventListener("click", () => {
  if (textChanged === false) {
    changeText.textContent =
      "The text has been changed using JavaScript DOM manipulation.";
    changeTextBtn.textContent = "Reset Text";
    textChanged = true;
  } else {
    changeText.textContent =
      "This text will change when you click the button.";
    changeTextBtn.textContent = "Change Text";
    textChanged = false;
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.getAttribute("data-category");

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});