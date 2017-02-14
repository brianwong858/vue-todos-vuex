<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Vue-Dos w/ Vuex</h1>
    <hr>
    <router-link to='/'>Active</router-link>
    <router-link to='/completed'>Completed</router-link>
    <hr>
    <router-view @addItem="itemsRef.push($event)"></router-view>
  </div>
</template>

<script>
import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBpmUJDWnLBN-OdaILmNgRPSy-wrGlqH4w",
  authDomain: "vue-dos.firebaseapp.com",
  databaseURL: "https://vue-dos.firebaseio.com",
  storageBucket: "vue-dos.appspot.com",
  messagingSenderId: "292488943430"
}

const itemsRef = Firebase.initializeApp(config).database().ref('items')

itemsRef.push({
  task: 'Fuck this',
  completed: false,
  due: 'Right fucking now'
})

export default {
  name: 'app',
  firebase: {
    items: itemsRef
  },
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
