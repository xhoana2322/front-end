import React, { useState } from 'react'
import { Row, Col, Image } from "react-bootstrap"

export default function HomePage() {

    const [movie, setMovie] = useState([]);
    

    useEffect(() => {
    
    fetch('https://www.omdbapi.com/?apikey=d18e5237&s=toast')
        .then(resp => resp.json())
        .then(json => console.log(json))
        .catch(error => console.error(error))
    }, [])
    

  return (
    <>
    <h4 className='text-white mt-4 mb-3'>Toast of the day</h4>
    <Row>
      {this.state.toastFilm.slice(0, 6).map(u => (
        <Col xs={6} md={2} key={u.imdbID} className='d-flex mb-5'>
          <Image className='film-image img-fluid' style={{ width: "" }} src={u.Poster} alt={u.Title} />
        </Col>
      ))}
    </Row>
    </>
  )
}

