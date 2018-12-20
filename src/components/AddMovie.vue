<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <movie-form :movie="movie" movieBtnTitle="Add Movie"
                         @movie-is-created-updated="submitMovie"></movie-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import MovieService from '@/services/movieservice'
import MoviesForm from '@/components/MoviesForm'

export default {
  data () {
    return {
      movie: {},
      messagetitle: ' Add Movie '
    }
  },
  components: {
    'movie-form': MoviesForm
  },
  methods: {
    submitMovie: function (movie) {
      MovieService.postMovie(movie)
        .then(response => {
          console.log(response)
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
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
