import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state,action) => {
    switch(action.type){
        case 'SEARCH_RESULTS':
            return {
                ...state,
                tvSerials:action.payload,
                heading:'Search Results TV Serials'
            }
        case 'SEARCH_RESULTS_MOVIE':
            return{
                ...state,
                topRatedMovies:action.payload,
                headingTopMovies:'Search Results Movies'
            }
            default:
                return state;
    }
}



export class Provider extends Component {
    state = {
        tvSerials:[],
        topRatedMovies:[],
        heading:'Top TV Serials',
        headingTopMovies:'The Movies',
        dispatch: action => this.setState(state => reducer(state,action))
    }
    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&page=1`)
            .then(res => {
                this.setState({
                    tvSerials:res.data.results 
                })
            })
        return(
        axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&page=1`)
            .then(res => {
                this.setState({
                    topRatedMovies:res.data.results
                })
            }))
            .catch(err => console.log(err))
    }
  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}

export const Consumer = Context.Consumer;