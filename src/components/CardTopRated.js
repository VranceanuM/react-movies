import React from "react";
import { Link } from "react-router-dom";
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

const CardTopRated = ({ topRated }) => {
  //   console.log(topRated);
  const cardOff = {
    maxWidth: 345
  };
  return (
    <React.Fragment>
      <Grid container direction='row' justify='center' alignItems='center'>
        {topRated &&
          topRated.map(item => {
            return (
              <Grid
                key={`${item.id}`}
                item
                md={4}
                lg={3}
                style={{ marginLeft: 5, marginBottom: 30, paddingLeft: 90 }}
              >
                <Link to={`/movie/${item.id}`}>
                  <Card style={cardOff}>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 440 }}
                        component='img'
                        height='140'
                        image={`https://image.tmdb.org/t/p/original/${
                          item.poster_path
                        }`}
                        title='Contemplative Reptile'
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {item.title}
                        </Typography>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
                        >
                          {item.overview.slice(0, 180)}
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
export default CardTopRated;
