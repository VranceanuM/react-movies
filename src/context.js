import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext()

export class Provider extends Component {
    state = {
        tvSerials:[],
        heading:'Top TV Serials'
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