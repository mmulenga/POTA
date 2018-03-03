<template>
  <div id="app">
    <h1> Pre-Opt Testing App </h1>
      <div class="row">
        <div class="col-3">
            <StatusComponent
             :resultArray="resultArray"/>
             <!-- This is the the bind to the child component-->
        </div>
        <div class="col-md-6">
<<<<<<< HEAD
            <ComoListComponent/>
            <ModalComponent/>
=======
            <ComoListComponent v-on:updateEvent="updateArray"/>
>>>>>>> cef11c470e5da586939b2d760f5289c65ec83a9a
        </div>
        <div class="col-md-3">
            <GlossaryComponent
            :glossaryEntry="glossaryEntry"/>
        </div>
    </div>
  </div>
</template>

<script>
import ComoListComponent from './components/ComoListComponent';
import GlossaryComponent from './components/GlossaryComponent';
import StatusComponent from './components/StatusComponent';
import ModalComponent from './components/ExamsOutputModal';

export default {
  name: 'App',
  components: {
    ComoListComponent,
    GlossaryComponent,
    StatusComponent,
    ModalComponent,
  },
  data() {
    return {
      framework_name: 'VueJS',
      resultArray: [],
      glossaryEntry: [],
    };
  },
  methods: {
    /**
    * Updates the resultArray with data recieved from
    * child ComoListComponent.
    */
    updateArray: function updateArray(comorbidity) {
      if (this.resultArray.includes(comorbidity.result)) {
        // Apparently there's no delete by index, so this is the best we can do. :(
        this.resultArray.splice(this.resultArray.indexOf(comorbidity.result), 1);
      } else {
        this.resultArray.push(comorbidity.result);
      }
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
