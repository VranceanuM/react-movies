import React from "react";
import { Link } from "react-router-dom";
//Material ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    maxWidth: 345
  }
};
const cardOff = {
  maxWidth: 345
};
const CardNowPlaying = ({ nowPlaying }) => {
  //   console.log(nowPlaying);
  //   console.log(nowPlaying);

  return (
    <React.Fragment>
      <Grid container direction='row' justify='center' alignItems='center'>
        {nowPlaying &&
          nowPlaying.map(movie => {
            return (
              <Grid
                item
                md={4}
                lg={3}
                style={{ marginLeft: 5, marginBottom: 30, paddingLeft: 90 }}
              >
                <Link to={`/movie/${movie.id}`}>
                  <Card style={cardOff} key={movie.id}>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 440 }}
                        component='img'
                        height='140'
                        image={`https://image.tmdb.org/t/p/original/${
                          movie.poster_path
                        }`}
                        title='Contemplative Reptile'
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {movie.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
                        >
                          {movie.overview.slice(0, 180)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size='small' color='primary'>
                        Share
                      </Button>
                      <Button size='small' color='primary'>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};
CardNowPlaying.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardNowPlaying);
