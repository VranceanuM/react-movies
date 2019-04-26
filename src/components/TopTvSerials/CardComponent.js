import React from 'react'
import Grid from '@material-ui/core/Grid';
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


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

const CardComponent = ({tvSerials,heading} ) =>{
  
  // const { classes } = props;
  console.log(tvSerials)
  console.log(heading)
  
  return (
    <React.Fragment>
      <h1>{heading}</h1>
            <Grid 
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={16}
            > 
                {tvSerials && tvSerials.map(serial => {
                      return(
                      <Grid item key={serial.id} xs={3}  style={{margin:20}}>
                        <Card  style={ {maxWidth: 545}}>
                        <CardActionArea>
                            <CardMedia
                            style={{height: 440,}}
                            image={`https://image.tmdb.org/t/p/original/${serial.poster_path}`}
                            title="Contemplative Reptile"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {serial.name}
                            </Typography>
                            <Typography component="p">
                            {serial.overview}
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
                })}
                </Grid>
      </React.Fragment>  
      )
}
CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardComponent);

