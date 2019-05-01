import React, { Component } from "react";
import axios from "axios";
import CardTopRated from "../components/CardTopRated";
import InfinteScroll from "react-infinite-scroll-component";

class TopRated extends Component {
  state = {
    topRated: [],
    count: 19,
    start: 1
  };
  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          process.env.REACT_APP_MM_KEY
        }&language=en-US&page=${this.state.start}`
      )
      .then(res => {
        this.setState({
          topRated: res.data.results
        });
      })
      .catch(err => console.log(err));
  }
  fetchData = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          process.env.REACT_APP_MM_KEY
        }&language=en-US&page=${start}`
      )
      .then(res => {
        this.setState({
          topRated: this.state.topRated.concat(res.data.results)
        });
      });
  };
  render() {
    const paralax = {
      width: "100%",
      height: 500,
      marginTop: 10,
      objectFit: "fill"
    };
    const { topRated } = this.state;
    return (
      <React.Fragment>
        <div className='background'>
          <img
            style={paralax}
            src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg'
          />
          <h1>Top Rated</h1>
        </div>{" "}
        <InfinteScroll
          dataLength={topRated.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <CardTopRated topRated={topRated} />
        </InfinteScroll>
      </React.Fragment>
    );
  }
}
export default TopRated;
