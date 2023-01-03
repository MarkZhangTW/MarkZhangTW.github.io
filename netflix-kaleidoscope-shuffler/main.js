let episodes = [].slice.call(document.getElementById('episodes').children);
let currentIndex = episodes.length,  randomIndex;
while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [episodes[currentIndex], episodes[randomIndex]] = [episodes[randomIndex], episodes[currentIndex]];
}
let episodesTag = document.getElementById('episodes');
episodes.forEach(element => {
    episodesTag.appendChild(element);
});