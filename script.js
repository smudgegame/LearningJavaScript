let my_element = document.createElement("h1");
let my_span = document.createElement("span");

my_span.innerText = "Heading from JS file";

my_element.appendChild(my_span);
my_element.classList.add("myclass");

document.body.appendChild(my_element);
