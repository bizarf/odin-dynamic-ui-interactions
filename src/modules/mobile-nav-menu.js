// changes the tab highlight to show which tab is active
(() => {
    const navButtons = document.querySelectorAll(".navButtons")
    navButtons.forEach(button => {
        button.addEventListener("click", () => {
            navButtons.forEach(button => {
                button.classList.remove("navSelected")
            })
            button.classList.add("navSelected")
        })
    })
})()