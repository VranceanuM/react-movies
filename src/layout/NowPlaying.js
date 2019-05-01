import React, { Component } from "react";
import axios from "axios";
import CardNowPlaying from "../components/CardNowPlaying";

class NowPlaying extends Component {
  state = {
    nowPlaying: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          process.env.REACT_APP_MM_KEY
        }&language=en-US&page=1`
      )
      .then(res => {
        this.setState({
          nowPlaying: res.data.results
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const paralax = {
      width: "100%",
      height: 500,
      marginTop: 10,
      objectFit: "fill"
    };
    // const { classes } = this.props;
    const { nowPlaying } = this.state;
    return (
      <React.Fragment>
        <div className='background'>
          <img
            style={paralax}
            src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
          />
          <h1>Now Playing</h1>
        </div>{" "}
        <CardNowPlaying nowPlaying={nowPlaying} />
      </React.Fragment>
    );
  }
}

export default NowPlaying;
