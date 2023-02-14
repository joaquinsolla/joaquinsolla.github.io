const albums = [
    "https://open.spotify.com/embed/album/1h6QGKzD4kzEZDzojyXeoM?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/3HnZ8f1qXz3I9XrLAxOnSv?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/4gR3h0hcpE1iJH0v5bVv78?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/3mH6qwIy9crq0I9YQbOuDf?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/7bvmGyFDwpHNRRRZJ0AHvn?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/6dtDTbVBQ9QwsNaqEnjsOT?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/6KQa2rAuOS2rX18xyA9eru?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/6Q2rUMVAKj1DaDh3xB0IEU?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/1atjqOZTCdrjxjMyCPZc2g?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/1KrTC1K1M7kMAMDWlH1coX?utm_source=generator&theme=0",
    "https://open.spotify.com/embed/album/5vP0fNictdWyU48o83Q7ob?utm_source=generator&theme=0"
]

function randomIntFromInterval(max) { // min and max included
    return Math.floor(Math.random() * (max))
}

function loadRandomAlbum(){

    let albumIndex = randomIntFromInterval(albums.length);

    document.getElementById("spotify_big").setAttribute("src", albums[albumIndex]);
    document.getElementById("spotify_small").setAttribute("src", albums[albumIndex]);

}


