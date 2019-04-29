import React, { Component } from 'react'
import Coverflow from 'react-coverflow';

const  Carusel =({favMovies}) =>{
   
      // console.log(favMovies)

  return (
    <React.Fragment>
        
          <Coverflow
            width={960}
            height={680}
            displayQuantityOfSide={4}
            navigation={false}
            enableHeading={true}
        >
    {favMovies && favMovies.map(movie => {
        return(
            <img key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}  alt="On the air today" data-action="http://andyyou.github.io/react-coverflow/" style={{ display: 'block', width: '100%'}}/>
            )
    })}
    
  </Coverflow>
    </React.Fragment>
  )
}
export default Carusel