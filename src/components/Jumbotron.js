import React from 'react'
import { Button } from './index'

const imageUrl = 'https://image.tmdb.org/t/p/'
const size = 'original'

export const Jumbotron = ({ movie, favorites, onAddListClicked }) => (
    <div
        className="jumbotron-container"
        style={{
            backgroundColor: '#202020',
            backgroundImage: `url(${imageUrl}${size}${movie.backdrop_path})`
        }}>
        <div className="jumbotron-info-container">
            <div className="jumbotron-info">
                <span className="jumbotron-title">{movie.title}</span>
                <span className="jumbotron-description">{movie.overview ? movie.overview : 'This film does not contain a description yet'}</span>
                <div className="jumbotron-sub-info">
                    <div className="jumbotron-year" style={{ fontSize: '23px' }}>{movie.release_date ? movie.release_date.split('-')[0] : null}</div>
                    <div className="jumbotron-rating">{movie.vote_average}</div>
                </div>
                <div className="jumbotron-buttons">
                    <Button type="play" icon="play" onButtonPressed={() => console.log('Assistir!')}>
                        Play
                    </Button>
                    <Button
                        icon={favorites.filter(l => l.id === movie.id).length ? 'check' : 'plus'}
                        onButtonPressed={() => onAddListClicked(movie)}>
                        Add to Favorites
                    </Button>
                </div>
            </div>
        </div>
    </div>
)