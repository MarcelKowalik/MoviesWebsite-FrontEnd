<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
  </div>
</template>

<script>
import MovieService from '@/services/MovieService'
export default {
  name: 'Movies',
  data () {
    return {
      messagetitle: ' Movies List ',
      movies: [],
      errors: []
    }
  },
  // Fetches Movies when the component is created.
  created () {
    this.loadMovies()
  },
  methods: {
    loadMovies: function () {
      MovieService.fetchMovies()
        .then(response => {
          // JSON responses are automatically parsed.
          this.movies = response.data
          console.log(this.movies)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
