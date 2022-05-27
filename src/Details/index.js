import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Container } from "./styles"


function Details(){

  const { id } = useParams()
  
  const [movie, setMovie] = useState({})
  const  image_path = 'https://image.tmdb.org/t/p/w500'

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fffad7303f475e72a46ca726e768bbb9&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        
          console.log(data)

        const movie = {
          id, 
          title: data.title,
          sinopse: data.overview,
          image: `${image_path}${data.poster_path}`,
          releaseDate: data.release_date,
          homepage: data.homepage

        }


        setMovie(movie)
        console.log(movie)
      })
}, [id])
  

  return( 
    
    <Container>
      <div className="movie">
        <img src={movie.image}></img>
        <div className="details"><h1>{movie.title}</h1>
        <span>{movie.sinopse}</span>
        <span className="release-date">{movie.releaseDate}</span>
        <Link to="/">
        <button>Go back</button></Link>
        </div>
      </div>
    </Container>
  )
}

export default Details 