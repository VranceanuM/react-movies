import React from 'react'
import Grid from '@material-ui/core/Grid';
import Spinner from '../../assets/loading.gif'

//Material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

};
const cardOff = {
  maxWidth: 545,
 
}

const CardComponent = ({tvSerials,heading} ) =>{
  
  // const { classes } = props;
  // console.log(tvSerials)
  // console.log(heading)
  
  return (
    <React.Fragment>
                      <Chip 
                      color="primary"
                      label={heading} style={{marginLeft:110,marginTop:40,marginBottom:40}}/>
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            > 
                {tvSerials && tvSerials.map(serial => {
                  if(serial.poster_path === null) {
                    return (null)
                  }else{
                      return(
                      <Grid item key={serial.id} xs={3}  style={{marginLeft:130,marginBottom:30}}>
                        <Card  style={cardOff}>
                        <CardActionArea>
                          
                              <CardMedia 
                              style={{height: 440}}
                              image={`https://image.tmdb.org/t/p/original/${serial.poster_path}`}
                              title="Contemplative Reptile"
                              />
                            
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {serial.name}
                            </Typography>
                            <Typography component="p">
                            {serial.overview.slice(0,180)}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Share
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                        </Card>
                        </Grid>
                      )
                      }
                })}
                </Grid>
      </React.Fragment>  
      )
}
CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);

