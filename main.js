const navigation = document.querySelector("nav")
const hamburgerToggle = document.getElementById("toggle-menu")

document.addEventListener("DOMContentLoaded", function () {
    hamburgerToggle.addEventListener("click", onHamburgerClick);

    function onHamburgerClick() {
        if (!navigation.classList.contains("open")) {
            navigation.classList.add("open")
            hamburgerToggle.classList.remove("fa-bars");
            hamburgerToggle.classList.add("fa-xmark");
        } else {
            navigation.classList.remove("open");
            hamburgerToggle.classList.remove("fa-xmark");
            hamburgerToggle.classList.add("fa-bars");
        }
    }
})