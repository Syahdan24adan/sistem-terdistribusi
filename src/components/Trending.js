import { useEffect, useState } from "react"
import { Container, Row, Card, Col, Image } from "react-bootstrap";
import axios from "axios";

const Trending = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=da9c4514e37d4cd238d6e0205a120ed9").then(response =>(
      setMovies(response.data.results)
    )).catch(err=>{console.log(err)})
  }, [])

  const getPosterURL =(posterpath) => {
    return `https://image.tmdb.org/t/p/w500${posterpath}`
  }

  return (
    <div>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <div className="movieImage">
            {movies.map((movie, index) => {
              return (
                <Col md={3} className="movieWrapper movieImage" id="trending" key={index} {...movie}>
                  <Card className="movieImage">
                    <Image src={getPosterURL(movie.poster_path)} alt="test" className="images" />
                    <div className="bg-dark">
                      <div className="p-1 m-1 text-white">
                        <Card.Title className="text-center">{movie.title}</Card.Title>
                        <Card.Text className="text-left">
                          {movie.overview}
                        </Card.Text>
                        <Card.Text className="text-left">
                          {movie.first_air_date}
                        </Card.Text>
                      </div>
                    </div>
                  </Card>
                </Col>
              )
            })}
          </div>
        </Row>
    </div>
  )
}
export default Trending;