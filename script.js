"use strict"

function main() {
    const hamburger = document.querySelector("img.header__hamburger")
    const modal = document.querySelector("dialog.header__fade")
    
    let modalOpen = false

    hamburger.addEventListener("click", () => {
        if (modalOpen === false) {
            // modal.setAttribute("open", true)
            modal.classList.toggle("header__fade--hidden")
            hamburger.setAttribute("src", "./images/icon-close.svg")
            modalOpen = true
        }
        else {
            // modal.removeAttribute("open")
            modal.classList.toggle("header__fade--hidden")
            hamburger.setAttribute("src", "./images/icon-hamburger.svg")
            modalOpen = false
        }
    })
}

main()