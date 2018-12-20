<template>
  <div id="app">
    <div class="ui inverted segment">
      <div class="ui inverted secondary pointing menu">
        <a class="item">
          <b-nav-item to="/#"><i class="home icon"></i>Home</b-nav-item>
        </a>
          <b-nav-item to="/movies"><i class="video camera icon"></i> Movies</b-nav-item>
        <div class="right menu">
          <a class="item">
            <b-nav-item to="/AboutUs">About Us</b-nav-item>
          </a>
          <a class="item">
            <b-nav-item to="/ContactUs">Contact Us</b-nav-item>
          </a>
          <div class="item">
            <b-nav-item to="/Signup">
              <div class="ui primary button">Sign Up</div>
            </b-nav-item>
          </div>
          <div class="item">
              <b-nav-item to="/Login">
            <div class="ui primary button">Log In</div>
              </b-nav-item>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.VueTables__sortable {
  cursor: pointer;
}
</style>
