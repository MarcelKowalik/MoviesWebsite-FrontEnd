<template>
  <div class="hero">
  <form @submit.prevent="submit">
    <div class="form-group" :class="{ 'form-group--error': $v.title.$error }">
      <label class="form__label">Title of the Movie</label>
      <input class="form__input" placeholder="Enter the Title of the Movie here" v-model.trim="$v.title.$model"/>
    </div>
      <div class="error" v-if="!$v.title.required">Title is Required</div>
      <div class="error" v-if="!$v.title.minLength">Title must have at least {{$v.title.$params.minLength.min}} letter.</div>
      <div class="form-group">
      <label class="form-label">Movie Genre</label>
      <select id="genre" name="genre" class="form-control"
              type="text" v-model="genre">
        <option value="null" selected disabled hidden>Choose Movie Genre </option>
        <option value="Comedy">Comedy</option>
        <option value="Horror">Horror</option>
        <option value="Thriller">Thriller</option>
        <option value="Western">Western</option>
        <option value="Fiction">Fiction</option>
        <option value="Romance">Romance</option>
        <option value="Action">Action</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.year.$error }">
      <label class="form-control-label" name="year">Year of Release</label>
      <input class="form__input" type="decimal" v-model.trim="year"/>
    </div>
    <div class="error" v-if="!$v.year.between"> Must be between 1800 and 2050 minutes</div>
    <div class="form-group" :class="{ 'form-group--error': $v.duration.$error }">
      <label class="form-control-label" name="duration">Movie duration in minutes</label>
      <input class="form__input" type="decimal" v-model.trim="duration"/>
    </div>
    <div class="error" v-if="!$v.duration.between"> Durantion must be between 1 and 500minutes</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ movieBtnTitle }}</button>
    </p>
    <p>
      <a href="#/movies" class="btn btn-primary btn1" role="button">Manage Movies</a>

    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Adding Movie...</p>
  </form>
  </div>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  name: 'FormData',
  props: ['movieBtnTitle', 'movie'],
  data () {
    return {
      messagetitle: ' Movie ',
      title: this.movie.title,
      genre: this.movie.genre,
      year: this.movie.year,
      duration: this.movie.duration,
      upvotes: 0,
      submitStatus: null
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(1)
    },
    year: {
      required,
      between: between(1800, 2050)
    },
    duration: {
      required,
      between: between(1, 500)
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var movie = {
            title: this.title,
            year: this.year,
            genre: this.genre,
            duration: this.duration,
            upvotes: this.upvotes
          }
          this.movie = movie
          console.log('Submitting in new Movie : ' +
            JSON.stringify(this.movie, null, 5))
          this.$emit('movie-is-created-updated', this.movie)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .movie-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }

</style>
