<template>
  <div id="app">
    <div class="row">
        <div class="col-3">
            <StatusComponent
             :resultArray="resultArray"/>
             <!-- This is the the bind to the child component-->
        </div>
        <div class="col-md-6">
            <ComoListComponent
            v-on:clickEvent="updateArray"
            v-on:hoverEvent="updateDescription"/>
        </div>
        <div class="col-md-3">
            <OutputComponent/>
        </div>
    </div>
  </div>
</template>

<script>
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
      resultArray: [],
      resultString: '',
    };
  },
  methods: {
    /**
    * Updates the resultArray with data recieved from
    * child ComoListComponent.
    */
    updateArray: function updateArray(comorbidity) {
      if (this.resultArray.includes(comorbidity.currentComorbiditySelection)) {
        // Apparently there's no delete by index, so this is the best we can do. :(
        this.resultArray.splice(this.resultArray.indexOf(comorbidity.currentComorbiditySelection),
          1);
      } else {
        this.resultArray.push(comorbidity.currentComorbiditySelection);
      }
    },
    /**
     *
     */
    updateDescription: function updateDescription(comorbidity) {
      this.resultString = comorbidity.currentComorbiditySelection;

      // eslint-disable-next-line
      console.log(this.resultString);
    },
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
