const viewerName = document.getElementById("enter-name");
const viewerMsg = document.getElementById("message");
const viewerImg = document.getElementById("message-img");
const submitBtn = document.getElementById("submit-name-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const messageScreen = document.getElementById("message-screen");
const resetButton = document.getElementById("reset-btn");

submitBtn.addEventListener("click", viewMsg);

resetButton.addEventListener("click", resetPage);

function viewMsg() {
    welcomeScreen.classList.remove("active");
    messageScreen.classList.add("active");
    if (["Vamshi", "Bhisma", "Vamshi Mudrakolla"].includes(viewerName.value)) {
        viewerMsg.textContent = "Hi Vamshi bro🤣";
        viewerImg.style.backgroundImage = "url('img/kalki_KH.jpg')";
        viewerImg.style.backgroundPosition = "center";
        viewerImg.style.backgroundSize = "cover";
        viewerImg.style.width = "300px";
        viewerImg.style.height = "300px";
    } else {
        viewerMsg.textContent = "Idi meeke pani chestundi bro, vere name pani cheyadu😂";
    }
}

function resetPage() {
    messageScreen.classList.remove("active");    
    welcomeScreen.classList.add("active");

}