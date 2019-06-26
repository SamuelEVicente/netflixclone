import React from 'react'
import { MovieCard } from '../components'

export const MovieList = ({ movies, favorites, title, onAddListClicked }) => (
    <div className="movie-list-container">
        <h1>{title}</h1>
        <ol className="movie-list-grid">
            {movies.map(movie => (
                <li key={movie.id}>
                    <MovieCard
                        movie={movie}
                        favorites={favorites}
                        onAddListClicked={movie => onAddListClicked(movie)}
                    />
                </li>
            ))}
        </ol>
    </div>
)