// 1. SELECT THE ELEMENT
// We are grabbing the H1 tag where it says "SYSTEM STATUS"
const titleElement = document.getElementById('user-name');

// 2. THE MESSAGE
// Change this to your actual name or gamertag!
const myName = "COMMANDER [Nathan]";

// 3. THE TYPING LOGIC
let index = 0;

function typeWriter() {
    if (index < myName.length) {
        // Add one letter at a time
        titleElement.innerHTML = myName.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        // Wait 100ms before doing it again (speed of typing)
        setTimeout(typeWriter, 100);
    } else {
        // When done, keep the blinking cursor
        titleElement.innerHTML = myName + '<span class="cursor">|</span>';
    }
}

// 4. START THE ENGINE
// Wait 1 second, then start typing
setTimeout(() => {
    titleElement.innerHTML = ""; // Clear the text first
    typeWriter();
}, 1000);