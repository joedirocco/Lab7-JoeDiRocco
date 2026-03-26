const defaultBtn = document.getElementById("default");
const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");

function clearThemes() {
    document.body.classList.remove("dark", "light");
}

defaultBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearThemes();
});

darkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearThemes();
    document.body.classList.add("dark");
});

lightBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearThemes();
    document.body.classList.add("light");
});