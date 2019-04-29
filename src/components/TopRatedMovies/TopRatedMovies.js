import React from 'react'
import {Consumer} from '../../context'
import Card from './CardComponent'
import Grid from '@material-ui/core/Grid';

 const  TopRatedMovies = () => {
  return (
    <Consumer>
        {value => {
            const {headingTopMovies,topRatedMovies} = value;
            if (topRatedMovies === undefined || topRatedMovies.length === 0){
                return <Grid container><Grid item xs={12}></Grid></Grid>
            }
            else{
                return (
                  <Card 
                  headingTopMovies={headingTopMovies}
                  topRatedMovies={topRatedMovies}
                    />
                    )
            }
        }}
    </Consumer>
  )
}
export default TopRatedMovies