let passwordElement = document.getElementById("password");
let length = 14;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*()_+-=[]{}<>/|";

const allCharacters = upperCase + lowerCase + number + symbol

function generatePassword(){
    let password= "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
    
    while(length > password.length){
        password += allCharacters[Math.floor(Math.random()*allCharacters.length)];

    }
    passwordElement.value = password;


}

function copyPassword(){
    passwordElement.select();
    document.execCommand("copy");

}
