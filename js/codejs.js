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

/* mixes js code */
var song_list = {
    "01": {
        title: "Shit",
        artist: "Híbrido Sombra",
        genere: "Rep",
        duration: "2:14",
        track: "Híbrido Sombra - Shit.mp3"
    },
    "02": {
        title: "Rockstar",
        artista: "Post Malone",
        genero: "Hipop",
        duration: "3:38",
        track: "Post Malone - Rockstar.mp3"
    },
    "03": {
        title: "ShSunflowerit",
        artista: "Post Malone",
        genero: "Hipop",
        duration: "2:38",
        track: "Post Malone - Sunflower.mp3"
    },
    "04": {
        title: "human",
        artista: "Rag'n'Bone Man",
        genero: "Pop",
        duration: "3:37",
        track: "Rag'n'Bone Man - Human.mp3"
    },
    "05": {
        title: "Skin",
        artista: "Rag'n'Bone Man",
        genero: "Pop",
        duration: "4:27",
        track: "Rag'n'Bone Man - Skint.mp3"
    },
    "06": {
        title: "Moonlight",
        artista: "XXXTentaction",
        genero: "Hipop",
        duration: "2:17",
        track: "XXXTentaction - Moonlight.mp3"
    }
}