const slides = document.querySelectorAll('.slide')



for (const slide of slides) {
    slide.addEventListener('click', () => {
        deactivator()
        slide.classList.add('active')
    }
)}


function deactivator() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}