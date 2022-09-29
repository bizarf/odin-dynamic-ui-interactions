(() => {
    const nextImage = document.querySelector("#nextImage")
    const previousImage = document.querySelector("#previousImage")
    const image = document.querySelectorAll(".image")
    const dot = document.querySelectorAll(".dot")
    const playBtn = document.querySelector(".playBtn")
    const stopBtn = document.querySelector(".stopBtn")
    let photo = 0

    // next image button
    nextImage.addEventListener("click", () => {
        image.forEach(images => {
            images.classList.remove("active")
        })

        dot.forEach(dots => {
            dots.classList.remove("selected")
        })

        if (photo === image.length - 1) {
            photo = -1;
        }
        photo++
        image[photo].classList.add("active")
        dot[photo].classList.add("selected")
    })

    // previous image button
    previousImage.addEventListener("click", () => {
        image.forEach(images => {
            images.classList.remove("active")
        })

        dot.forEach(dots => {
            dots.classList.remove("selected")
        })

        if (photo === 0) {
            photo = image.length;
        }
        photo--
        image[photo].classList.add("active")
        dot[photo].classList.add("selected")
    })

    // navigation dots
    dot.forEach(dots => {
        dots.addEventListener("click", () => {
            dot.forEach(dots => {
                dots.classList.remove("selected")
            })
            dot[dots.dataset.id].classList.add("selected")

            image.forEach(images => {
                images.classList.remove("active")
            })
            image[dots.dataset.id].classList.add("active")
            photo = [dots.dataset.id]
        })
    })

    let auto = false;

    function autoSlider() {
        const image = document.querySelectorAll(".image")
        const dot = document.querySelectorAll(".dot")

        image.forEach(images => {
            images.classList.remove("active")
        })

        dot.forEach(dots => {
            dots.classList.remove("selected")
        })

        if (photo === image.length - 1) {
            photo = -1;
        }
        photo++
        image[photo].classList.add("active")
        dot[photo].classList.add("selected")
        console.log(photo)
        setTimeout(autoSlider, 5000)
    }

    playBtn.addEventListener("click", () => {
        if (auto === false) {
            playBtn.classList.add("pressed")
            stopBtn.classList.remove("pressed")
            auto = true
            autoSlider()
        }
    })

    stopBtn.addEventListener("click", () => {
        stopBtn.classList.add("pressed")
        playBtn.classList.remove("pressed")
        auto = false
        clearTimeout(autoSlider)
    })
})()