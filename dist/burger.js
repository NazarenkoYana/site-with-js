function myFunction(e) {
    e.classList.toggle("change");

    open();
}

function open() {
    document.querySelector(".menu-burger").classList.toggle("show");
}

