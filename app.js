// --------------- THIS IS FOR EXTRA LEARNING
// function chkPassword() {
//     let init = document.getElementById("initial")
//     let sec = document.getElementById("second")
//     if (init.value === "") {
//         alert("you did not enter a password")
//         init.focus();
//         return;
//     }
//     if (init.value !== sec.value) {
//         alert("The two passwords are not the same");
//         init.focus();
//         init.select();
//         return false;
//     } else
//         alert("Done!")
// }

// document.getElementById("second").onblur = chkPassword;
// document.getElementById("myForm").onsubmit = chkPassword;


// --------------- Selecting the elements
const heading = document.getElementById("h1")
const home = document.getElementById("home")
const button = document.createElement("button")
const resetBtn = document.createElement("button")

// --------------- styling the button
button.innerText = "Add +1"
button.style.padding = "12px 18px"
button.style.marginTop = "20px"
button.style.cursor = 'pointer'
button.style.backgroundColor = '#333'
button.style.border = "none"

// --------------- styling the reset button
resetBtn.innerText = "Reset"
resetBtn.style.padding = "12px 18px"
resetBtn.style.marginTop = "20px"
resetBtn.style.cursor = 'pointer'
resetBtn.style.backgroundColor = 'red'
resetBtn.style.border = "none"


// --------------- THIS IS JUST TO EXPLAIN HOW JS WORKS 
let toggle = false;

button.addEventListener('click', () => {
    if (toggle === false) {
        button.style.backgroundColor = '#fff'
        toggle = true
        console.log('1', toggle);
    } else {
        button.style.backgroundColor = '#333'
        toggle = false
        console.log('2', toggle);
    }
})

// --------------- [*** we can use this way to change the styles on the click ***]
// button.addEventListener('click', () => {
//      button.classList.toggle("CLASS-NAME")           // classList : it's mean the classes that the button has 
// })                                                   // toggle : when we click the first time it will add the class (that we assigned before in the css file)
//          and when we click second time it will remove the class.

// --------------- add attribute to BTN
// button.setAttribute('disabled', '') 
button.setAttribute('id', 'btn')

// --------------- Create a counter
const counter = document.createElement("p")

let count = 0;

// --------------- style the element
counter.innerText = `Count: ${count}`
counter.style.marginTop = '20px'


// --------------- add the elements to the section

// home.appendChild(button)     [*** This is the original way to append a child ***]
// home.appendChild(resetBtn)   [*** This is the original way to append a child ***]
// home.appendChild(counter)    [*** This is the original way to append a child ***]

// --------------- function  [*** This is an example about functions ***]
function addChild(parent, child) {
    parent.appendChild(child)
}

addChild(home, button)      //[*** This is an example about functions ***]
addChild(home, resetBtn)    //[*** This is an example about functions ***]
addChild(home, counter)     //[*** This is an example about functions ***]


button.addEventListener("click", function () { // *******
    count++                                    //      **
    counter.innerText = `Count: ${count}`      //      **

    // --------------- add item "P" every click //     **

    // every time i click the button it will create a new element 
    // [*** if we create the element outside the CLICK EVENT BLOCK it will be created just once ***]
    const newP = document.createElement("p")   //      **

    // style the new element                   //      **
    newP.style.color = "#fff"                  //      **
    newP.style.fontWeight = "600"              //      **
    newP.innerHTML = `item ${count}`           //      **

    // add the new element to the Document     //      **
    addChild(home, newP)                       //      **

    // Reset button                            //      **
    resetBtn.addEventListener('click', function () {
        newP.remove()                          //      **
        // reset the count                     //      **
        count = 0                              //      **
        // update the reset on the Document    //      **
        counter.innerText = `Count: ${count}`  //      **
    })                                         //      **
})                       // *****************************


// Back to top Button
const backToTop = document.querySelector('.toTop')

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// Pressing on burger [ ☰ ] menu to open the navbar

const icon = document.getElementById("icon")
const ul = document.getElementsByTagName("ul")[0] // [*** I prefer to use the (getElementById) selector or (querySelector) ***]
const items = document.getElementById("items")
const dorpDownMenu = document.getElementsByTagName("ul")[1] // [*** I prefer to use the (getElementById) selector or (querySelector) ***]

icon.addEventListener("click", () => {
    ul.classList.toggle("show-menu")  // classList : it's mean the classes that the ul has
})                                    // toggle : when we click the first time it will add the class (show-menu)
//          and when we click second time it will remove the class (show-menu).
items.addEventListener("click", () => {
    dorpDownMenu.classList.toggle("show-menu")
})