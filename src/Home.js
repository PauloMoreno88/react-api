import { Container, Movie, MovieList } from "./styles"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"



function Home() {
  
  
  const [movies, setMovies] = useState([])

  const  image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=fffad7303f475e72a46ca726e768bbb9&language=en-US&page=1')
    .then(response => response.json())
    .then(data => console.log(setMovies(data.results)))
  }, [])
  
  return (
    
    <Container>
      <h1>Catálogo Top 20 Filmes Populares!</h1>
      <MovieList>
      {movies.map(movie=>{
        return(
          <Movie key={movie.id}>
            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`}/></Link>

            
            <span>{movie.title}</span>
            </Movie>
          )
        })}
        
        </MovieList>
    </Container>)}

      export default Home