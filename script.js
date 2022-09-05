const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generatePassword = document.getElementById("abc");

let password1 = document.getElementById("password1");

let password2 = document.getElementById("password2");

let passwordLength = 16;
// when the user clicks the button - on click function
// generate two random passwords - render text in html with function

let randomChar = "";
// when user clicks on the "generate passwords" button,
// generate two random passwords
// display them in in the "passwords" <div>
function generateRandomPassword() {
  let randomPassword = Math.floor(Math.random() * characters.length);
  randomChar = characters[randomPassword];
  return randomChar;
}

function createPassword() {
  let randomPasswords = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPasswords += generateRandomPassword();
  }
  console.log(randomPasswords);
  return randomPasswords;
}

function displayPassword() {
  password1.textContent = createPassword();
  password2.textContent = createPassword();
}

