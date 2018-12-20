<template>
  <div class="hero">
    <h2 class="ui icon header">
      <i class="video icon"></i>
      <div class="content">
        Movies List
        <div class="sub header"> Here you can see all the Movies stored on the Website!</div>
      </div>
      <div class="ui centered card">
      <button class="ui basic button">
        <b-nav-item to="/AddMovie">
        <i class="icon save"></i>
        Add Movie
        </b-nav-item>
      </button>
      </div>
    </h2>
    <div id="app1">
      <v-client-table :columns="columns" :data="movies" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editMovie(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteMovie(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import MovieService from '@/services/MovieService'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Movies',
  data () {
    return {
      movies: [],
      props: ['_id'],
      errors: [],
      columns: ['title', 'genre', 'duration', 'year', 'upvotes', 'upvote', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['genre', 'year'],
        sortable: ['upvotes'],
        headings: {
          _id: 'ID',
          title: 'Title',
          genre: 'Genre',
          upvotes: 'Upvotes',
          duration: 'Duration',
          year: 'year'
        }
      }
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
    },
    upvote: function (id) {
      MovieService.upvoteMovie(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadMovies()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editMovie: function (id) {
      this.$router.params = id
      this.$router.push('editmovie')
    },
    reviews: function (id) {
      this.$router.params = id
      this.$router.push('reviews')
    },
    deleteMovie: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result.value)
        if (result.value === true) {
          MovieService.deleteMovie(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadMovies()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Donation ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          console.log('SWAL Else Result : ' + result.value)
          this.$swal('Cancelled', 'Your Donation still Counts!', 'info')
        }
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
