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
      <div @ontouch="prevent">
      <!-- side drawer that contains the list of comos selected -->
        <drawer :show="drawerShow"
        @on-hide="drawerToggle(), buttonsToggle()">
          <div class="layout" slot="drawer" >
            <button id="drawer_close" type="button" class="close"
            v-on:click="drawerToggle(), buttonsToggle() ">
                <span> &times; </span>
              </button>
            <!-- list component -->
            <StatusComponent
              :resultArray="resultArray"/>
          </div>
          <h1 class="my-4 bg-light"> Pre-Op Testing App </h1>
          <div class="col-md-12">
            <MobileComoListComponent
            v-on:clickEvent="updateArray"
            v-on:update-glossary="updateDescription"
            v-on:clear-glossary="clearDescription"
            v-on:toggle-buttons="buttonsToggle"/>
          </div>
          </drawer>
        <ResultModalComponent class="navbar navbar-expand-lg navbar-light bg-light results"
          :hiddenButtons="buttonsHidden"
          :resultArray="resultArray"
          v-on:drawer-toggle="drawerToggle"
          v-on:hide-buttons="buttonsToggle"/>
      </div>
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
      buttonsHidden: false,
    };
  },
  methods: {

    prevent: function prevent(event) {
      event.preventDefault();
      event.stopPropagation();
    },

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
     * Displays and hides the drawer.
     */
    drawerToggle: function drawerToggle() {
      this.drawerShow = !this.drawerShow;
    },

    buttonsToggle: function buttonsToggle() {
      this.buttonsHidden = !this.buttonsHidden;
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

.my-4 {
  margin-bottom: 0px !important;
  margin-top: 0px !important;
}
.layout {
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
