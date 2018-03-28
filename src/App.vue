<template>
  <div id="app">
    <DisclaimerModalComponent></DisclaimerModalComponent>
    <h1 class="my-4"> Pre-Op Testing App </h1>
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
      <!-- side drawer that contains the list of comos selected -->
      <drawer :show="drawerShow"
      @on-hide="hideDrawer">
        <div class="layout" slot="drawer" >
          <button id="drawer_close" type="button" class="close" v-on:click="hideDrawer">
              <span> &times; </span>
            </button>
          <!-- list component -->
          <StatusComponent
             :resultArray="resultArray"/>
        </div>
        <h1 class="my-4"> Pre-Op Testing App </h1>
        <div class="navbar navbar-expand-lg navbar-light bg-light">
          <button type="button" class="btn btn-primary status" v-on:click="drawerToggle">
            Patient Status</button>
        </div>
        <div class="col-md-12">
          <MobileComoListComponent
          v-on:clickEvent="updateArray"
          v-on:update-glossary="updateDescription"
          v-on:clear-glossary="clearDescription"/>
        </div>
        <ResultModalComponent class="results navbar navbar-expand-lg navbar-light bg-light"
          :resultArray="resultArray"/>
        </drawer>
    </div>
  </div>
</template>

<script>
import DisclaimerModalComponent from '@/components/DisclaimerModalComponent';
import ComoListComponent from '@/components/ComoListComponent';
import MobileComoListComponent from '@/components/MobileComoListComponent';
import GlossaryComponent from '@/components/GlossaryComponent';
import StatusComponent from '@/components/StatusComponent';
import ResultModalComponent from '@/components/ResultModalComponent';
import Drawer from '@/components/Drawer';

export default {
  name: 'App',
  components: {
    DisclaimerModalComponent,
    ComoListComponent,
    MobileComoListComponent,
    GlossaryComponent,
    StatusComponent,
    ResultModalComponent,
    Drawer,
  },
  data() {
    return {
      framework_name: 'VueJS',
      resultArray: [],
      glossaryEntry: '',
      drawerShow: false,
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
    /**
    * Clears the glossaryEntry used by the Glossary Window data
    * received from child ComoListComponent.
    */
    clearDescription: function clearDescription() {
      this.glossaryEntry = '';
    },

    /**
     * displays the drawer.
     */
    drawerToggle: function drawerToggle() {
      this.drawerShow = !this.drawerShow;
    },

    /**
     * hides the drawer.
     */
    hideDrawer: function hideDrawer() {
      this.drawerShow = false;
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
.layout{
    width: 300px;
  }
.results {
  position: fixed;
}

button.close {
  padding-right: 10px;
  font-size: 50px;
}
</style>
