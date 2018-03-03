<template>
  <div id="app">
    <template>
    <div class="row">
        <div class="col-3">
            <StatusComponent/>
        </div>
        <div class="col-md-6">
            <ComoListComponent/>
            <ModalComponent/>
        </div>
        <div class="col-md-3">
            <OutputComponent/>
        </div>
    </div>
</template>
  </div>
</template>

<script>
import ComoListComponent from './components/ComoListComponent';
import OutputComponent from './components/OutputComponent';
import StatusComponent from './components/StatusComponent';
import ModalComponent from './components/ExamsOutputModal';

export default {
  name: 'App',
  components: {
    ComoListComponent,
    OutputComponent,
    StatusComponent,
    ModalComponent,
  },
  data() {
    return {
      framework_name: 'VueJS',
    };
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
