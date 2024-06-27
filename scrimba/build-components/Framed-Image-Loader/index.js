const urlInput = document.querySelector("input[name='url']")
const widthInput = document.querySelector("input[name='width']")
const colorInput = document.querySelector("input[name='color']")
const image = document.querySelector(".image")

let url = "";
let width = 10;
let color = "#000000";

function hideImageOnLoad() {
    image.style.display = "none"
}

function setImage(url, width, color) {
    image.style.display = "block";
    image.style.borderStyle = "solid";
    image.style.backgroundImage = "url(" + url + ")";
    image.style.borderWidth = width + "px";
    image.style.bordercolor = color
}

urlImage.addEventListener("change", () => {
    url = urlInput.value;
    setImage(url, width, color);
})

urlImage.addEventListener("change", () => {
    width = widthInput.value;
    setImage(url, width, color);
})

urlImage.addEventListener("change", () => {
    color = colorInput.value;
    setImage(url, width, color);
})

hideImageOnLoad()