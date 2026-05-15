// set up consts
const cover = document.getElementById('cover');
const inside = document.getElementById('inside');
const openBtn = document.getElementById('open-btn');
const yearSpan = document.getElementById('year');

// set current year in footer
yearSpan.textContent = new Date().getFullYear();

// open the book
openBtn.addEventListener('click', () => {
    
    // add flipped class to hide text
    cover.classList.add('flipped');
    
    // this is my required animate

    // disables my animations on mobile so it looks cleaner

    if (window.innerWidth > 768) {
    cover.animate([
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(-180deg)' }
    ], {
        duration: 800,
        easing: 'ease-in-out',
        fill: 'forwards'
    });
}
    
    // show inside pages after flip starts
    setTimeout(() => {
        inside.classList.add('visible');
        document.body.classList.add('book-open');
    }, 100); // time out so it doesn't appear too early
    
    // this is my required history object
    history.pushState({ bookOpen: true }, '', '#open');

});

