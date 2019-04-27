import React, { Component } from 'react'
import {Consumer} from '../context'
import axios from 'axios'
//material-ui
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  appBackground:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #58aeef 90%)'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

 class Navbar extends Component {
   state ={
     searchTitle:''
   }

   onChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    })
}
findSearch = (dispatch,e) =>{
  e.preventDefault();
  axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MM_KEY}&language=en-US&query=${this.state.searchTitle}&page=1&include_adult=false`)
   .then(res=>{
      dispatch({
          type:'SEARCH_RESULTS',
          payload:res.data.results
      })
  })
}
  render() {
    const { classes } = this.props;

    return (
  <Consumer>
    {value => {
        const {dispatch} = value
        return(
                  <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBackground}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                  Material-UI
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <form onSubmit={this.findSearch.bind(this,dispatch)}>
                      <InputBase
                        placeholder="Searchh…"
                        name="searchTitle"
                        value={this.state.searchTitle}
                        onChange={this.onChange}
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                      />
                  </form>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )
    }}
  </Consumer>

    )
  }
}
Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar);