import React, { Component } from 'react'
import {Consumer} from '../../context'
import Spinner from '../../assets/loading.gif'
import Card from './CardComponent'
import Grid from '@material-ui/core/Grid';


class TopTvSerials extends Component {
    
  render() {
    return (
        <Consumer>
            {value => {
                const {tvSerials,heading} = value
                if (tvSerials === undefined || tvSerials.length === 0){
                    return <Grid container><Grid item xs={12}><img src={Spinner} alt=""/></Grid></Grid>
                }
                else{
                    return (
                      <Card 
                        tvSerials={tvSerials}
                        heading={heading}
                        />
                        )
                }
            }}
        </Consumer>

    )
  }
}

  
  export default TopTvSerials
  
  