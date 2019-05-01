import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
//Material-ui
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};
const cardOff = {
  maxWidth: 345
};
const CardComponent = ({ headingTopMovies, topRatedMovies }) => {
  // console.log(topRatedMovies)
  return (
    <React.Fragment>
      <Chip
        color='primary'
        label={headingTopMovies}
        style={{ marginLeft: 110, marginTop: 40, marginBottom: 40 }}
      />
      <Grid container direction='row' justify='center' alignItems='center'>
        {topRatedMovies &&
          topRatedMovies.map(movie => {
            if (movie.poster_path === null) {
              return null;
            } else {
              return (
                <Grid
                  item
                  key={movie.id}
                  md={4}
                  lg={3}
                  style={{ marginLeft: 5, marginBottom: 30, paddingLeft: 90 }}
                >
                  <Link to={`/movie/${movie.id}`} replace>
                    <Card style={cardOff}>
                      <CardActionArea>
                        <CardMedia
                          style={{ height: 440 }}
                          image={`https://image.tmdb.org/t/p/original/${
                            movie.poster_path
                          }`}
                          title='Contemplative Reptile'
                        />

                        <CardContent>
                          <Typography gutterBottom variant='h5' component='h2'>
                            {movie.name}
                          </Typography>
                          <Typography component='p'>
                            {movie.overview.slice(0, 180)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>

                      <Chip
                        color='secondary'
                        label={`Average Vote  ${movie.vote_average}`}
                      />
                      <Chip
                        style={{ background: "lightseagreen", color: "white" }}
                        label={`Popularity  ${movie.popularity}`}
                      />
                      <Chip
                        color='primary'
                        label={`Release Date  ${movie.release_date}`}
                      />
                      <CardActions />
                    </Card>
                  </Link>
                </Grid>
              );
            }
          })}
      </Grid>
    </React.Fragment>
  );
};
CardComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);
