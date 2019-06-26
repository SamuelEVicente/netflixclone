import React from 'react'

import { MovieCard, Jumbotron, Carousel } from '../components'

export const Home = ({ movieJumbo, favorites, onAddListClicked, movies }) => (
    <div className='home-container'>
        <Jumbotron
            movie={movieJumbo}
            favorites={favorites}
            onAddListClicked={onAddListClicked}
        />
        <Carousel title='In Theaters'>
            {movies.latest.map(movie => (
                <MovieCard key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    onAddListClicked={movie => onAddListClicked(movie)}
                />
            ))}
        </Carousel>

        <Carousel title='The Best of Horror Movies'>
            {movies.horror.map(movie => (
                <MovieCard key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    onAddListClicked={movie => onAddListClicked(movie)}
                />
            ))}
        </Carousel>

        <Carousel title='Cry of laughter'>
            {movies.comedy.map(movie => (
                <MovieCard key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    onAddListClicked={movie => onAddListClicked(movie)}
                />
            ))}
        </Carousel>

        <Carousel title='Science Fiction'>
            {movies.scifi.map(movie => (
                <MovieCard key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    onAddListClicked={movie => onAddListClicked(movie)}
                />
            ))}
        </Carousel>

        <Carousel title='Animated Films'>
            {movies.animated.map(movie => (
                <MovieCard key={movie.id}
                    movie={movie}
                    favorites={favorites}
                    onAddListClicked={movie => onAddListClicked(movie)}
                />
            ))}
        </Carousel>
    </div>
)