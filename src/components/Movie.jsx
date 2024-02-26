const Movie = ({movie}) => {
    const imageUrl = (movie) => {
        const baseUrl = "https://image.tmdb.org/t/p/";
        const size = "w300";
        return `${baseUrl}${size}${movie.poster_path}`;
    }

    const movieLink = (movie) => {
        const baseUrl = "https://www.themoviedb.org/movie/";
        return `${baseUrl}${movie.id}-${encodeURI(movie.title.replace(/\s+/g, '-'))}?language=en-US`;
    }

    return (
        <div className="movie-card"
        >
            <h3>{movie.title}</h3>
            <a href={movieLink(movie)}>
                <img src={imageUrl(movie)} alt={movie.title} />
            </a>
        </div>
    )
}

export default Movie