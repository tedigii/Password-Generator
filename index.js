const characters =
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
const lengthOfPassword = 26; // length of password

function generatePass() {
  let password = "";
  for (let i = 0; i < lengthOfPassword; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function updatePss(){
  let passHtml = document.getElementById("pass");
  passHtml.textContent = generatePass();
}

let btn = document.getElementById("btn");
btn.addEventListener("click", updatePss);
// console.log(passHtml);
