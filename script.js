"use strict"

function main() {
    const hamburger = document.querySelector("img.header__hamburger")
    const modal = document.querySelector("dialog.modal")
    
    let modalOpen = false

    hamburger.addEventListener("click", () => {
        if (modalOpen === false) {
            modal.classList.toggle("modal--hidden")
            hamburger.setAttribute("src", "./images/icon-close.svg")
            modalOpen = true
        }
        else {
            modal.classList.toggle("modal--hidden")
            hamburger.setAttribute("src", "./images/icon-hamburger.svg")
            modalOpen = false
        }
    })
}

main()