import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { NavBar } from './components'
import { Home } from './views/Home'
import { MovieList } from './views/MovieList'
import * as Movies from './movie-api/MovieDB'

import './App.css'

export class App extends React.Component {
  state = {
    movieJumbotron: {},
    movies: {
      comedy: [],
      animated: [],
      scifi: [],
      horror: [],
      latest: []
    },
    favoriteList: [],
    fetchedMovies: [],
    isInputClosed: true,
    avatarPhoto: ''
  }

  componentDidMount() {
    Movies.getMostPopular().then(res => this.setState({ movieJumbotron: res }))
    Movies.getInTheater().then(res => this.setState({ movies: { ...this.state.movies, latest: res } }))
    Movies.getByGenrer('Comedy').then(res => this.setState({ movies: { ...this.state.movies, comedy: res } }))
    Movies.getByGenrer('Animation').then(res => this.setState({ movies: { ...this.state.movies, animated: res } }))
    Movies.getByGenrer('Science Ficton').then(res => this.setState({ movies: { ...this.state.movies, scifi: res } }))
    Movies.getByGenrer('Horror').then(res => this.setState({ movies: { ...this.state.movies, horror: res } }))
  }

  toggleMovieInFavoriteList = movie => {
    const { favoriteList } = this.state
    let index = favoriteList.map(l => l.id).indexOf(movie.id)

    if (index === -1) {
      this.setState({ favoriteList: [...favoriteList, movie] })
    } else {
      this.setState({
        favoriteList: [
          ...favoriteList.slice(0, index),
          ...favoriteList.slice(index + 1)
        ]
      })
    }
  }

  doSearch = query => {
    Movies.search(query).then(res => this.setState({ fetchedMovies: res }))
  }

  render() {
    return (
      <div className="app">
        <NavBar
          onSearchMovies={query => this.doSearch(query)}
          onCollapseInputHandler={() => this.setState({ isInputClosed: true })}
          onExpandInputHandler={() => this.setState({ isInputClosed: false })}
        />
        <Route exact path='/' render={() => (
          !this.state.isInputClosed && this.state.fetchedMovies.length
            ? <Redirect to="/search" />
            : <Home
              movies={this.state.movies}
              movieJumbo={this.state.movieJumbotron}
              favorites={this.state.favoriteList}
              onAddListClicked={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
        <Route path='/favorites' render={() => (
          !this.state.isInputClosed && this.state.fetchedMovies.length
            ? <Redirect to="/search" />
            : <MovieList
              title="My List"
              movieJumbo={this.state.movieJumbotron}
              favorites={this.state.favoriteList}
              onAddListClicked={movie => this.toggleMovieInFavoriteList(movie)}
            />
        )} />
        <Route path='/search' render={() => (
          <MovieList
            title="Search Results"
            movieJumbo={this.state.movieJumbotron}
            favorites={this.state.favoriteList}
            onAddListClicked={movie => this.toggleMovieInFavoriteList(movie)}
          />
        )} />
      </div>
    )
  }
}