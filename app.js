function chkPassword() {
    let init = document.getElementById("initial")
    let sec = document.getElementById("second")
    if (init.value === "") {
        alert("you did not enter a password")
        init.focus();
        return;
    }
    if (init.value !== sec.value) {
        alert("The two passwords are not the same");
        init.focus();
        init.select();
        return false;
    } else
        alert("Done!")
}

document.getElementById("second").onblur = chkPassword;
document.getElementById("myForm").onsubmit = chkPassword;

const heading = document.getElementById("h1")
const home = document.getElementById("home")
const button = document.createElement("button")
const resetBtn = document.createElement("button")

// --------------- style the element
button.innerText = "Add +1"
button.style.padding = "12px 18px"
button.style.marginTop = "20px"
button.style.cursor = 'pointer'
button.style.backgroundColor = '#333'

// --------------- style the element
resetBtn.innerText = "Reset"
resetBtn.style.padding = "12px 18px"
resetBtn.style.marginTop = "20px"
resetBtn.style.cursor = 'pointer'
resetBtn.style.backgroundColor = 'red'


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

// home.appendChild(button)
// home.appendChild(resetBtn)
// home.appendChild(counter)

// --------------- function 
function addChild(parent, child) {
    parent.appendChild(child)
}

addChild(home, button)
addChild(home, resetBtn)
addChild(home, counter)




button.addEventListener("click", function () {
    count++
    counter.innerText = `Count: ${count}`

    // --------------- add item "P" every click

    // create a new element
    const newP = document.createElement("p")

    // style the new element
    newP.style.color = "#fff"
    newP.style.fontWeight = "600"
    newP.innerHTML = `item ${count}`

    // add the new element to the Document
    addChild(home, newP)

    // Reset button
    resetBtn.addEventListener('click', function () {
        newP.remove()
        // reset the count
        count = 0
        // update the reset on the Document
        counter.innerText = `Count: ${count}`
    })
})



const backToTop = document.querySelector('.toTop')

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

