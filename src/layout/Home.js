import React, { Component } from 'react'
import Carusel from '../components/Carusel'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios'
import TopTvSerials from '../components/TopTvSerials/TopTvSerials'


const styles = theme =>({
    sizeTop:{
        marginTop:230
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
      }
})

class Home extends Component {

    state = {
        favMovies:[]
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&page=1`)
            .then(res => {
                this.setState({
                    favMovies:res.data.results 
                })
            })
            .catch(err => console.log(err))
    }

  render() {
    const {favMovies} = this.state

    return (
            <React.Fragment>

                    <Carusel favMovies={favMovies}/>
                    <TopTvSerials/>
            </React.Fragment>   
            
    )
  }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);