let body = document.getElementsByTagName('body')[0]; 
body.style.backgroundColor = "pink";
let h1 = document.createElement('h1');

h1.textContent = "Welcome to my website!";

h1.style.color = "blue";

body.appendChild(h1);

let name = prompt("Enter your name")
let h3 = document.createElement('h3');

h3.textContent = "Hello, " + name + "!";

body.appendChild(h3);