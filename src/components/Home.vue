<template>
  <div class="hero">
    <h1 class="vue-title">Website for Movie Fanatics!</h1>

    <table align="center">
      <tr>
        <td>
          <div class="ui message">
            <div class="header">
              This Website enables you to store your favourite movies, edit and rate them!
            </div>
            <p>Click <a href ="#/movies">here</a> to view the movie collection.</p>
          </div>
        </td>
        <img class="ui centered large image" src="https://boygeniusreport.files.wordpress.com/2016/03/movies-tiles.jpg?quality=98&strip=all">
      </tr>
    </table>

  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
