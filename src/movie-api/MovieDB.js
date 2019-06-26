const api = "https://api.themoviedb.org/3"
const apiKey = 'd2d0230e5f27e49b090cf4ed22886123'
const defaultOptions= 'language=en-US'

export const getByGenre = (genre) =>
  fetch(`${api}/genre/movie/list?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(res => res.genres)
    .then(genresArray => {
      let id = genresArray.filter(g => g.name === genre).map(g => g.id).join(',')
      return fetch(`${api}/discover/movie?api_key=${apiKey}&${defaultOptions}&sort_by=popularity.desc&with_genres=${id}`)
        .then(res => res.json())
        .then(data => data.results)
    })

export const getInTheater = () =>
  fetch(`${api}/movie/now_playing?api_key=${apiKey}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => data.results)

export const getMostPopular = () =>
fetch(`${api}/movie/popular?api_key=${apiKey}&${defaultOptions}`)
  .then(res => res.json())
  .then(data => data.results[Math.floor(Math.random() * (data.results.length - 1))])

export const search = query =>
  fetch(`${api}/search/movie?api_key=${apiKey}&query=${query}&${defaultOptions}`)
    .then(res => res.json())
    .then(data => {
      if (!data.total_results) {
        return fetch(`${api}/search/person?api_key=${apiKey}&query=${query}&${defaultOptions}`)
          .then(res => res.json())
          .then(data => {
            if (!data.total_results) {
              return []
            }            
            let movies = data.results
              .map(result => result.known_for)
              .reduce((a, b) => [...a, ...b]) 

            return movies
          })
      }
      return data.results
    })
