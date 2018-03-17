<template>
  <div id="app">
    <DisclaimerModalComponent></DisclaimerModalComponent>
    <h1 class="my-4"> Pre-Opt Testing App </h1>
      <div class="row">
        <!-- hide the status component when screen is smaller than md-->
        <div class="col-md-3 d-none d-md-block">
            <StatusComponent
             :resultArray="resultArray"/>
             <!-- This is the the bind to the child component-->
        </div>
        <!-- hide desktop como list when screen is smaller than md-->
        <div class="col-md-6 d-none d-md-block">
            <ComoListComponent
            v-on:clickEvent="updateArray"
            v-on:hoverEvent="updateDescription"/>
            <ResultModalComponent
             :resultArray="resultArray"/>
        </div>
        <!-- hide desktop glossary when screen is smaller than md-->
        <div class="col-md-3 d-none d-md-block">
            <GlossaryComponent
             :glossaryEntry="glossaryEntry"/>
        </div>
    </div>
    <!-- visible-sm and down  (or hidden-md and up) -->
    <div class="d-md-none d-lg-none d-xl-none">
      <div class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="btn btn-primary float-right"
              type="button" data-toggle="collapse" data-target="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Glossary</button>
            <button class="btn btn-primary float-left"
              type="button" data-toggle="collapse" data-target="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              Patient Status</button>
      </div>
      <div class="col-md-12">
            <ComoListComponent
            v-on:clickEvent="updateArray"
            v-on:hoverEvent="updateDescription"/>
            <ResultModalComponent
             :resultArray="resultArray"/>
        </div>
    </div>
  </div>
</template>

<script>
import DisclaimerModalComponent from '@/components/DisclaimerModalComponent';
import ComoListComponent from '@/components/ComoListComponent';
import GlossaryComponent from '@/components/GlossaryComponent';
import StatusComponent from '@/components/StatusComponent';
import ResultModalComponent from '@/components/ResultModalComponent';

export default {
  name: 'App',
  components: {
    DisclaimerModalComponent,
    ComoListComponent,
    GlossaryComponent,
    StatusComponent,
    ResultModalComponent,
  },
  data() {
    return {
      framework_name: 'VueJS',
      resultArray: [],
      glossaryEntry: '',
    };
  },
  methods: {
    /**
    * Updates the resultArray used by the Patient Status window with data
    * recieved from child ComoListComponent.
    * @param comorbidity - The data emitted by the child component.
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
     * Updates the glossaryEntry used by the Glossary Window with data
     * recieved from child ComoListComponent.
     * @param comorbidity - The data emitted by the child component.
     */
    updateDescription: function updateDescription(comorbidity) {
      this.glossaryEntry = comorbidity.currentComorbiditySelection;
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
}
</style>
