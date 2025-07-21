// alert("");
// change NabBar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle ('window-scroll', window.scrollY > 0)
})

// Show /hide faq answer

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change expendable icon + sign to -

        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus-circle') {
            icon.className = "uil uil-minus-circle"
        } else {
            icon.className = "uil uil-plus-circle"
        }
    })
});


// Show / Hide Nav Menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// Close Nav Menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)