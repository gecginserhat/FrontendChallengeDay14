// Select by element id

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Select by element class

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("card-header");

// Select by element tag

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("form");

// Query Selector - Css Selector - Just 1 element

element = document.querySelector("#todo-form");
element = document.querySelector(".list-group-item");
element = document.querySelector("#tasks-title");

element = document.querySelector("li")
element = document.querySelector("div")

// QuerySelector - Select all element 

element = document.querySelectorAll(".list-group-item");
/*
element.forEach(function(el) {
    console.log(el);
};
*/
console.log(element);