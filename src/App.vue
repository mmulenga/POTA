<template>
  <div id="app">
    <Prototype/>
  </div>
</template>

<script>
import Prototype from './components/Prototype';

export default {
  name: 'App',
  components: {
    Prototype,
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
</style>
