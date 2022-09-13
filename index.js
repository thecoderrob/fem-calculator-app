const root = document.documentElement;
const themes = [
  //Theme 0
  {
    bodyBg: getComputedStyle(root).getPropertyValue(
      "--clr-main-bg-very-dark-des-blue"
    ),
    toggleContainerBg: getComputedStyle(root).getPropertyValue(
      "--clr-keypad-bg-very-dark-des-blue"
    ),
    toggleBtnBg: getComputedStyle(root).getPropertyValue("--clr-key-bg-red"),
    screenBg: getComputedStyle(root).getPropertyValue(
      "--clr-screen-bg-very-dark-des-blue"
    ),
    keypadBg: getComputedStyle(root).getPropertyValue(
      "--clr-keypad-bg-very-dark-des-blue"
    ),
    keyBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-light-grayish-orange"
    ),
    keyPrimaryBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-des-dark-blue"
    ),
    keyAccentBg: getComputedStyle(root).getPropertyValue("--clr-key-bg-red"),
    keyHoverBg: getComputedStyle(root).getPropertyValue(
      "--clr-light-light-grayish-orange"
    ),
    keyPrimaryHoverBg: getComputedStyle(root).getPropertyValue(
      "--clr-light-des-blue"
    ),
    keyAccentHoverBg:
      getComputedStyle(root).getPropertyValue("--clr-light-red"),

    calcHeaderText: "white",
    themeTitleText: "white",
    themeLabelText: "white",
    screenText: "white",
    keyText: getComputedStyle(root).getPropertyValue(
      "  --clr-txt-very-dark-grayish-blue"
    ),
    keyPrimaryText: "white",
    keyAccentText: "white",

    keyShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-shadow-grayish-orange"
    ),
    keyPrimaryShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-shadow-des-dark-blue"
    ),
    keyAccentShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-shadow-dark-red"
    ),
  },
  //Theme 1
  {
    bodyBg: getComputedStyle(root).getPropertyValue("--clr-main-bg-light-gray"),
    toggleContainerBg: getComputedStyle(root).getPropertyValue(
      "--clr-keypad-bg-grayish-red"
    ),
    toggleBtnBg: getComputedStyle(root).getPropertyValue("--clr-key-bg-orange"),
    screenBg: getComputedStyle(root).getPropertyValue(
      "--clr-screen-bg-very-light-gray"
    ),
    keypadBg: getComputedStyle(root).getPropertyValue(
      "--clr-keypad-bg-grayish-red"
    ),
    keyBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-light-grayish-yellow"
    ),
    keyPrimaryBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-dark-moderate-cyan"
    ),
    keyAccentBg: getComputedStyle(root).getPropertyValue("--clr-key-bg-orange"),

    calcHeaderText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-very-dark-grayish-yellow"
    ),
    themeTitleText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-very-dark-grayish-yellow"
    ),
    themeLabelText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-very-dark-grayish-yellow"
    ),
    screenText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-very-dark-grayish-yellow"
    ),
    keyText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-very-dark-grayish-yellow"
    ),
    keyPrimaryText: "white",
    keyAccentText: "white",

    keyShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-dark-grayish-orange"
    ),
    keyPrimaryShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-very-dark-cyan"
    ),
    keyAccentShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-dark-orange"
    ),
  },
  //Theme 2
  {
    bodyBg: getComputedStyle(root).getPropertyValue(
      "--clr-main-bg-very-dark-violet"
    ),
    toggleContainerBg: getComputedStyle(root).getPropertyValue(
      "--clr-screen-bg-very-dark-violet"
    ),
    toggleBtnBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-pure-cyan"
    ),
    screenBg: getComputedStyle(root).getPropertyValue(
      "--clr-screen-bg-very-dark-violet"
    ),
    keypadBg: getComputedStyle(root).getPropertyValue(
      "--clr-screen-bg-very-dark-violet"
    ),
    keyBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-very-dark-violet"
    ),
    keyPrimaryBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-dark-violet"
    ),
    keyAccentBg: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-pure-cyan"
    ),

    calcHeaderText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-light-yellow"
    ),
    themeTitleText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-light-yellow"
    ),
    themeLabelText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-light-yellow"
    ),
    screenText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-light-yellow"
    ),
    keyText: getComputedStyle(root).getPropertyValue("--clr-txt-light-yellow"),
    keyPrimaryText: "white",
    keyAccentText: getComputedStyle(root).getPropertyValue(
      "--clr-txt-very-dark-blue"
    ),

    keyShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-dark-magenta"
    ),
    keyPrimaryShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-vivid-magenta"
    ),
    keyAccentShadow: getComputedStyle(root).getPropertyValue(
      "--clr-key-bg-soft-cyan"
    ),
  },
];
const body = document.body;
const calcTitle = document.querySelector(".calc__header-title");
const screen = document.querySelector(".calc__screen");
const screenText = document.querySelector(".calc__screen-text");
const themeLabels = document.querySelectorAll(".toggle-label");
const themeTitle = document.querySelector(".title-container");
const toggleContainer = document.querySelector(".toggle-container");
const toggleBtn = document.querySelector("#toggle-btn");

const keypad = document.querySelector(".calc__keypad");
const keys = document.querySelectorAll(".keys");
const keyPrimary = document.querySelectorAll(".primary");
const keyAccent = document.querySelector(".accent");

let currentTheme = 0;

const toggleTheme = () => {
  if (currentTheme < 2) {
    currentTheme += 1;
  } else {
    currentTheme = 0;
  }
  changeThemeColors();
  moveToggleBtn();
};

const changeThemeColors = () => {
  const themeObj = themes[currentTheme];
  body.style.backgroundColor = themeObj.bodyBg;

  calcTitle.style.color = themeObj.calcHeaderText;
  screen.style.backgroundColor = themeObj.screenBg;
  screenText.style.color = themeObj.screenText;
  themeLabels.forEach((label) => {
    label.style.color = themeObj.themeLabelText;
  });
  themeTitle.style.color = themeObj.themeTitleText;
  toggleContainer.style.backgroundColor = themeObj.toggleContainerBg;
  toggleBtn.style.backgroundColor = themeObj.toggleBtnBg;

  keypad.style.backgroundColor = themeObj.keypadBg;
  keys.forEach((key) => {
    key.style.backgroundColor = themeObj.keyBg;
    key.style.boxShadow = `0px 3px 1px ${themeObj.keyShadow}`;
    key.style.color = themeObj.keyText;
  });
  keyAccent.style.backgroundColor = themeObj.keyAccentBg;
  keyAccent.style.boxShadow = `0px 3px 1px ${themeObj.keyAccentShadow}`;
  keyAccent.style.color = themeObj.keyAccentText;
  keyPrimary.forEach((key) => {
    key.style.backgroundColor = themeObj.keyPrimaryBg;
    key.style.boxShadow = `0px 3px 1px ${themeObj.keyPrimaryShadow}`;
    key.style.color = themeObj.keyPrimaryText;
  });
};

const moveToggleBtn = () => {
  if (currentTheme === 0) {
    toggleBtn.style.left = "8%";
  }
  if (currentTheme === 1) toggleBtn.style.left = "40%";
  if (currentTheme === 2) toggleBtn.style.left = "74%";
  console.log(toggleContainer, currentTheme);
};

// const handleHover = () => {
//   const themeObj = themes[currentTheme];
//   keys.forEach((key) => {
//     key.addEventListener("mouseover", () => {
//       if (key.classList.contains("primary")) {
//         key.style.backgroundColor = themeObj.keyPrimaryHoverBg;
//       } else if (key.classList.contains("accent")) {
//         key.style.backgroundColor = themeObj.keyAccentHoverBg;
//       } else {
//         key.style.backgroundColor = themeObj.keyHoverBg;
//       }
//     });
//     key.addEventListener("mouseleave", () => {
//       if (key.classList.contains("primary")) {
//         key.style.backgroundColor = themeObj.keyPrimaryBg;
//       } else if (key.classList.contains("accent")) {
//         key.style.backgroundColor = themeObj.keyAccentBg;
//       } else {
//         key.style.backgroundColor = themeObj.keyBg;
//       }
//     });
//   });
// };

// handleHover();
