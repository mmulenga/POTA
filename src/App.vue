<template>
  <div id="app">
    <ComoListComponent/>
  </div>
</template>

<script>
import DemoComponent from './components/DemoComponent';
import ComoListComponent from './components/ComoListComponent';

export default {
  name: 'App',
  components: {
    DemoComponent,
    ComoListComponent,
  },
};
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

/* This will center any column, even if they don't add up to 12 */
.col-centered{
    float: none;
    margin: 0 auto;
}
</style>
