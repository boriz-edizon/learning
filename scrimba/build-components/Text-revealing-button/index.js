const btn = documnet.querySelector(".btn");
const text = document.querySelector(".text");

let shown = true;

function toggleText(){
    if(shown) {
        btn.innerText = "Show Text";
        text.style.opacity = 0;
    }
    else {
        btn.innerText = "Hide Text";
        text.style.opacity = 1;
    }
    shown = !shown;
}

btn.addEventListener("click", () => {
    toggleText();
})