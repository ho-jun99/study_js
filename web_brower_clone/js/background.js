const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]

const randomBgIdx = Math.floor(Math.random()* images.length);
const chosenImage = images[randomBgIdx]

const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`

body = document.body.appendChild(bgImage)