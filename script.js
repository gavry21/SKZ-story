const cont_img = document.querySelectorAll(".cont_main, .text_cont")
const apperOptions = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
}

const apperOnScrol = new IntersectionObserver(function(entries, apperOnScrol) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear')
            apperOnScrol.unobserve(entry.target); //stop looking
        }
    })
}, apperOptions);

cont_img.forEach(cont_im => {
    apperOnScrol.observe(cont_im)
});