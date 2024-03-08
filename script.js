document.getElementById("searchButton").addEventListener("click", searchMovies)
let api_key = "b338b0c0d282fb2f25cf87d534b09a7e";
let url = "https://api.themoviedb.org/3/search/movie"
let poster = "https://image.tmdb.org/t/p/w500"

let resultContainer = document.getElementById("results")
    

function searchMovies(){
    resultContainer.innerHTML = "Cargando..."
    let searchInput = document.getElementById("searchInput").value

    fetch(`${url}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    resultContainer.innerHTML = ""

    if(movies.length === 0){
        resultContainer.innerHTML = "<p>No se encontraron resultados</p>"
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie")

        let title = document.createElement("h2")
        title.textContent = movie.title

        let releaseDate = document.createElement("p")
        releaseDate.textContent = "La fechad de lanzamiento fue "+movie.release_date

        let description = document.createElement("p")
        description.textContent = movie.overview

        let image = poster + movie.poster_path
        let imagenPoster = document.createElement("img")
        imagenPoster.src = image

        movieDiv.appendChild(imagenPoster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(description)

        resultContainer.appendChild(movieDiv)

    });
}