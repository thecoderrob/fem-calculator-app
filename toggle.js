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
  moveToggleBtn();
  const themeEl = document.getElementById("theme");
  theme.href = `theme-${currentTheme}.css`;
};

const moveToggleBtn = () => {
  if (currentTheme === 1) {
    toggleBtn.style.marginLeft = "0%";
  }
  if (currentTheme === 2) toggleBtn.style.marginLeft = "38%";
  if (currentTheme === 3) toggleBtn.style.marginLeft = "78%";
};
