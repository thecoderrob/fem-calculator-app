const toggleBtn = document.getElementById("toggle-btn");
let currentTheme = 1;

const toggleTheme = () => {
  if (currentTheme < 3) {
    currentTheme += 1;
  } else {
    currentTheme = 1;
  }
  switchTheme();
};

const switchTheme = () => {
  const body = document.body;
  if (currentTheme === 1) {
    body.className = "theme-1";
    toggleBtn.style.marginLeft = "0%";
  }
  if (currentTheme === 2) {
    body.className = "theme-2";
    toggleBtn.style.marginLeft = "38%";
  }
  if (currentTheme === 3) {
    body.className = "theme-3";
    toggleBtn.style.marginLeft = "78%";
  }
};
