function menuIcon(){
    const btn = document.querySelector('#nav-toggler');
    const collapse = document.querySelector('.nav-collapse');

    collapse.classList.toggle('show-nav');
}








/* :::: animation && transition while window resizing :::: */
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400)
});