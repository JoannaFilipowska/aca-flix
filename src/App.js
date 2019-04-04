import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Logo from "./Logo.js";
import TitleList from "./components/TitleList";
import Hero from "./components/Hero";
import ListToggle from "./components/ListToggle";
import SearchBox from "./components/SearchBox";
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import Item from "./components/Item";
import { connect } from "react-redux";
import { loadMyMovieList } from "./actions";
class App extends Component {
  componentDidMount() {
    this.props.loadMyMovieList();
  }

  render() {
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />

          <SearchBox />
          <UserProfile />
        </header>
        <Hero />
        <TitleList title="Search Results" movies={this.props.searchResults} />
        <TitleList title="My Movies" movies={this.props.myMovieList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { myMovieList: state.myMovieList, searchResults: state.searchResults };
};

export default connect(
  mapStateToProps,
  { loadMyMovieList }
)(App);
