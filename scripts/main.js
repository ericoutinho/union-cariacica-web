var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-main',
    offset: 70
})

// lazzy load para as imagens
const lazzyLoad = () => {
    document.querySelectorAll('.lazzy').forEach(function (element, index) {
        if (element.getBoundingClientRect().top < window.innerHeight - 150) {
            element.classList.add('play');
        }
    });
}

window.addEventListener('load', lazzyLoad);
window.addEventListener('scroll', lazzyLoad);