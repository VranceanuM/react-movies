import React, { Component } from "react";
import axios from "axios";
//material-ui
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import classnames from "classnames";

import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Collapse from "@material-ui/core/Collapse";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//import movie player
import YouTube from "react-youtube";

const styles = theme => ({
  parallax: {
    width: "100%",
    height: 500,
    marginTop: 10,
    objectFit: "fill"
  },
  card: {
    maxWidth: 345,
    position: "relative",
    top: -150,
    right: -250
  },
  media: {
    height: 180,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class Serial extends Component {
  state = {
    expanded: false,
    poster_path: null,
    name: null,
    first_air_date: null,
    overview: null,
    triller: null
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`
      )
      .then(res => {
        this.setState({
          name: res.data["name"],
          poster_path: res.data["poster_path"],
          first_air_date: res.data["first_air_date"],
          overview: res.data["overview"]
        });
      });
    return axios
      .get(
        `https://api.themoviedb.org/3/tv/${
          this.props.match.params.id
        }/videos?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US`
      )
      .then(res => {
        //    console.log(res.data.results[0].key)
        this.setState({
          triller: res.data.results[0].key
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const opts = {
      height: "490",
      width: "700",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const { classes } = this.props;
    const {
      backdrop_path,
      poster_path,
      first_air_date,
      triller,
      release_date,
      tagline,
      overview,
      name
    } = this.state;
    return (
      <React.Fragment>
        <div className='background'>
          <img
            className={classes.parallax}
            src='https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'
          />
        </div>
        <Grid container direction='row' justify='flex-start'>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar aria-label='Recipe' className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={name}
                subheader={`Release Date:${first_air_date}`}
              />
              <CardMedia
                className={classes.media}
                image={`https://image.tmdb.org/t/p/original${poster_path}`}
                title='Paella dish'
              />
              <CardContent>
                <Typography component='p'>{tagline}</Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label='Add to favorites'>
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label='Share'>
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                  })}
                  onClick={this.handleExpandClick}
                  aria-expanded={this.state.expanded}
                  aria-label='Show more'
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography paragraph>Overview:</Typography>
                  <Typography paragraph>{overview}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <YouTube videoId={triller} opts={opts} onReady={this._onReady} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
Serial.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Serial);
