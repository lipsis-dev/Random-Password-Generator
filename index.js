const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

const passOneEl = document.querySelector("#passwordOne-el");
const passTwoEl = document.querySelector("#passwordTwo-el");
const lengthEl = document.querySelector("#length");
const lengthTitleEl = document.querySelector("#lengthTitle");
const generateBtnEl = document.querySelector("#generateBtn");

lengthEl.addEventListener("input", () => {
    lengthTitleEl.textContent = `Password Length: ${lengthEl.value}`;
});

generateBtnEl.addEventListener("click", () => {
    const passwordLength = lengthEl.value;

    const password1 = generatePassword(passwordLength);
    const password2 = generatePassword(passwordLength);

    passOneEl.textContent = password1;
    passTwoEl.textContent = password2;
});

function generatePassword(passwordLength) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

