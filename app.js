function createNote(){
    const note = document.createElement('div');
    note.classList.add('note');

    note.style.right = Math.random() * 100 + "vw";
    note.style.animationDuration = Math.random() * 2 + 3 + "s";

    note.innerHTML = '🎵';

    document.body.appendChild(note);
}

setInterval(createNote, 300)