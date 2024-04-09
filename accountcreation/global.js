function changeText() {
    const paragraph = document.getElementById("paragraph");
    const usernameInput = document.getElementById("username");
    paragraph.textContent = usernameInput.value;
}  