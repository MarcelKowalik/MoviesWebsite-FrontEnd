import Api from '@/services/api'

export default {
  fetchMovies () {
    return Api().get('/movies')
  }
}
