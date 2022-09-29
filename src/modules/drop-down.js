// nav bar
export const dropdownMenu = (() => {
    const openNav = document.querySelector(".openNav")
    const navMenu = document.querySelector(".navMenu")
    const closeNavBtn = document.querySelector(".closeNavBtn")

    openNav.addEventListener("click", () => {
        openNav.classList.add("invisible")
        navMenu.classList.add("visible")
    })

    closeNavBtn.addEventListener("click", () => {
        openNav.classList.remove("invisible")
        navMenu.classList.remove("visible")
    })
})()