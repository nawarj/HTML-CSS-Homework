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
    // return true;

}

document.getElementById("second").onblur = chkPassword;
document.getElementById("myForm").onsubmit = chkPassword;

// let a = 20;
// let b = "10";
// let c = true;
// console.log();

const heading = document.getElementById("h1")
const home = document.getElementById("home")
const button = document.createElement("button")

// style the element
button.innerText = "Add +1"
button.style.padding = "12px 18px"
button.style.marginTop = "20px"
button.style.cursor = 'pointer'
button.style.backgroundColor = '#333'

// onclick change style
// button.addEventListener('mouseenter', () => {
//     button.style.backgroundColor = '#fff'
// })

// button.addEventListener('mouseleave', () => {
//     button.style.backgroundColor = '#333'
// })

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

// add attribute to BTN
// button.setAttribute('disabled', '')
button.setAttribute('id', 'btn')

// Create a counter
const counter = document.createElement("p")

let count = 0;

// style the element
counter.innerText = count
counter.style.marginTop = '20px'

// add the element to the section
home.appendChild(button)
home.appendChild(counter)

button.addEventListener("click", function () {
    count++
    counter.innerText = count
})


const backToTop = document.querySelector('.toTop')

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})


