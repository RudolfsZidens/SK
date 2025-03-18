const poga = document.querySelector('button');
let count = 10;

poga.textContent = `Surprise in: ${count}`

poga.addEventListener('click', () => {
    count = count - 1

    poga.textContent = `Surprise in: ${count}`

    if(count === 0){
       
        alert('Vi tu esi gatavs?')

        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank')

        // Reset the count
        count = 10;
        poga.textContent = `Surprise in: ${count}`
    }
})
