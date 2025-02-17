document.addEventListener('DOMContentLoaded', () => {
    const userName = prompt('Please enter your name:', 'Guest');
    const userNameSpan = document.getElementById('user-name');
    userNameSpan.textContent = userName || 'Guest';

    const changeColorButton = document.getElementById('change-color');
    changeColorButton.addEventListener('click', changeBackgroundColor);
});

function changeBackgroundColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}