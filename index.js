const characters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
// const lengthOfPassword = 26; 

function generatePass(length = 26) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}


if(typeof document !== 'undefined'){
  
  function updatePss(){
    let passHtml = document.getElementById("pass");
    passHtml.textContent = generatePass();
  }
  
  let btn = document.getElementById("btn");
  btn.addEventListener("click", updatePss);

}
// console.log(passHtml);
module.exports =  { generatePass }
