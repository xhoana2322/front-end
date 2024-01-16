import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function MovieDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
      
        fetch("https://www.omdbapi.com/?apikey=d18e5237&s=", id)
        .then(response => response.json())
        .then(json => setMovieDetail(json.Search))
        .catch(error => console.error(error))

    }, [third])
    

  return (
    <div>MovieDetails</div>
  )
}
