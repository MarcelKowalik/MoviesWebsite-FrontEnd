<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
          <movie-form :movie="movie" movieBtnTitle="Edit Movie"
                         @movie-is-created-updated="updateMovie"></movie-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import MovieService from '@/services/MovieService'
import MovieForm from '@/components/MoviesForm'

export default {
  data () {
    return {
      movie: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Edit Movie! '
    }
  },
  components: {
    'movie-form': MovieForm
  },
  created () {
    this.getMovie()
  },
  methods: {
    getMovie: function () {
      MovieService.fetchEditMovies(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.movie = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Donation in Edit: ' + JSON.stringify(this.movie, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateMovie: function (movie) {
      console.log('Before PUT ' + JSON.stringify(movie, null, 5))
      MovieService.putEditMovie(this.$router.params, movie)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(movie, null, 5))
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
