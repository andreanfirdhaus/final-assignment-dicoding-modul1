function toggleSidebar() {
    const sidebar = document.getElementById("sidebar_menu");
    const layer = document.getElementById("layer_overlay")
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768 && !sidebar.classList.contains("active")) {
        sidebar.classList.toggle("active");
        layer.classList.add("layer_overlay")
    } else {
        sidebar.classList.remove("active");
        layer.classList.remove("layer_overlay")
    }
};

const dropdown = document.querySelectorAll(".dropdown");
dropdown.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("dropdown-active");
        const dropdownBody = dropdown.querySelector(".dropdown-body");

        // cek "dropdown-active" class in dropdown element
        const isActive = dropdown.classList.contains("dropdown-active");

        // set height maksimum (max-height) sesuai kondisi dropdown aktif atau tidak
        dropdownBody.style.maxHeight = isActive ? dropdownBody.scrollHeight + "px" : "0";
    });
});

// scrolled navbar
const header = document.querySelector('header.container-fluid');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
