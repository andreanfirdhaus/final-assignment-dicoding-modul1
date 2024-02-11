const hamburgerToggle = document.querySelector("#toggle-menu")
const navigation = document.querySelector("nav")

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
    if (!navigation.classList.contains("open")) {
        navigation.classList.add("open")
    } else {
        navigation.classList.remove("open")
    }
}