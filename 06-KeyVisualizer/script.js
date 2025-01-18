const keyDisplay = document.getElementById("keyDisplay");
const keyCodeDisplay = document.getElementById("keyCodeDisplay");

document.addEventListener("keydown", (event) => {
    keyDisplay.textContent = `Key: ${event.key}`;
    keyCodeDisplay.textContent = `KeyCode: ${event.keyCode}`;

    if (event.key === " ") {
        keyDisplay.textContent = "Key: Space";
    }
});
