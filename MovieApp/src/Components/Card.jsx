import React from 'react'
import '../Components/Card.css'

const Card = (movie,key) => {
    const imgurl = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className="card" key={key}>
            <img src={imgurl + movie.info.poster_path} alt="card image cap" className='card-img-top w-100 h-75 ' />
            <div className="card-body">
                <div className='card-title d-flex justify-content-around align-items-center'>
                    <h5 className='text-muted'><b>{movie.info.title}</b></h5>
                    <p>{movie.info.vote_average.toFixed(1)}</p>
                </div>
                <div className='card-text Overview pt-2 text-center'>
                    <h4 className='text-dark'><b>OverView</b></h4>
                    <p>{movie.info.overview}</p>
                </div>
            </div>
        </div>

    )
}

export default Card
