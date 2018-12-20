import Api from '@/services/api'

export default {
  fetchMovies () {
    return Api().get('/movies')
  },
  upvoteMovie (id) {
    return Api().put(`/movies/${id}/Uvote`)
  },
  deleteMovie (id) {
    return Api().delete(`/movies/${id}`)
  },
  putEditMovie (id, movie) {
    console.log('REQUESTING ' + movie._id + ' ' +
      JSON.stringify(movie, null, 5))
    return Api().put(`/movies/${id}/edit`, movie,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchEditMovies (id) {
    return Api().get(`/movies/${id}`)
  },
  postMovie (movie) {
    return Api().post('/movies', movie,
      { headers: {'Content-type': 'application/json'} })
  }
}
