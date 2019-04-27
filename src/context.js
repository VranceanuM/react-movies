import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

const reducer = (state,action) => {
    switch(action.type){
        case 'SEARCH_RESULTS':
            return {
                ...state,
                tvSerials:action.payload,
                heading:'Search Results'
            }
            default:
                return state;
    }
}



export class Provider extends Component {
    state = {
        tvSerials:[],
        heading:'Top TV Serials',
        dispatch: action => this.setState(state => reducer(state,action))
    }
    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&page=1`)
            .then(res => {
                this.setState({
                    tvSerials:res.data.results 
                })
            })
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