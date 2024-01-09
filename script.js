let output = document.getElementById("text")
const text = "Hello, I'm Aftab Hossain Shakib"
let index = 0

function typeText() {
    if(index < text.length) {
        output.textContent += text.charAt(index)
        index++
        setTimeout(typeText, 100)
    }
}

typeText()