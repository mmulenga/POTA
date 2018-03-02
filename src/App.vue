<template>
  <div id="app">
    <template>
    <div class="row">
        <div class="col-3">
            <StatusComponent
             :resultArray="resultArray"/>
             <!-- This is the the bind to the child component-->
        </div>
        <div class="col-md-6">
            <ComoListComponent/>
        </div>
        <div class="col-md-3">
            <OutputComponent/>
        </div>
    </div>
</template>
  </div>
</template>

<script>
import { Condition } from '@/constants';
import ComoListComponent from './components/ComoListComponent';
import OutputComponent from './components/OutputComponent';
import StatusComponent from './components/StatusComponent';

export default {
  name: 'App',
  components: {
    ComoListComponent,
    OutputComponent,
    StatusComponent,
  },
  data() {
    return {
      framework_name: 'VueJS',
      // this is the data tied to the prop
      resultArray: [{ comorbidity: Condition.CAD }, { comorbidity: Condition.Defib },
        { comorbidity: Condition.AtrialFib }],
      template: '<span>{{ resultArray }}</span>',
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
