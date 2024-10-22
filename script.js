const colorinput = document.querySelectorAll(".colors input");
const gradientbox = document.querySelector(".gradient-box");
const selectmenu = document.querySelector(".select-box select");
const refreshbtn = document.querySelector(".refresh");
const textarea = document.querySelector("textarea");
const copybtn = document.querySelector(".copy");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        colorinput[0].value = getRandomColor();
        colorinput[1].value = getRandomColor();
    }
    
    const gradient = `linear-gradient(${selectmenu.value}, ${colorinput[0].value}, ${colorinput[1].value})`;
    gradientbox.style.background = gradient; // Set the background of the gradient box
    textarea.value = `background: ${gradient};`;
}

colorinput.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});

const copyCode = () => {
    navigator.clipboard.writeText(textarea.value);
    copybtn.innerText = "Code Copied!";
    setTimeout(() => copybtn.innerText = "Copy Code", 1600);
}

selectmenu.addEventListener("change", () => generateGradient(false));
refreshbtn.addEventListener("click", () => generateGradient(true));
copybtn.addEventListener("click", copyCode);
