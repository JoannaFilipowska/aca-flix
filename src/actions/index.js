import axios from "axios";

export function myMovieListLoaded(movies) {
  return {
    type: "MY_MOVIE_LIST_LOADED",
    value: movies
  };
}

export function searchLoaded(movies) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: movies
  };
}

export const loadMyMovieList = () => dispatch => {
  axios
    .get("/movies")
    .then(result => dispatch(myMovieListLoaded(result.data)))
    .catch(error => console.log(error));
};

export const loadSearch = searchTerm => dispatch => {
  return {
    type: "LOAD_SEARCH",
    value: axios
      .get(
        "https://api.themoviedb.org/3/search/multi?query=" +
          searchTerm +
          "&api_key=f17eee69ce01ace1c6e4c77f028c40ae"
      )
      .then(result => dispatch(searchLoaded(result.data.results)))
      .catch(error => console.log(error))
  };
};

export const saveMyMovie = movie => dispatch => {
  axios
    .post("/movies", movie)
    .then(result => dispatch(loadMyMovieList()))
    .catch(error => console.log(error));
};

export const removeMyMovie = id => dispatch => {
  axios
    .delete("/movies/" + id)
    .then(result => dispatch(loadMyMovieList()))
    .catch(error => console.log(error));
};
