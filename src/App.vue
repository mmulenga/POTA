<template>
  <div id="app">
    <DisclaimerModalComponent></DisclaimerModalComponent>
    <h1 class="my-4"> Pre-Op Testing App </h1>
      <div v-if="!isMobile() || (windowWidth > 767)" class="row">
        <!-- hide the status component when screen is smaller than md-->
        <div class="col-md-3 d-block">
            <StatusComponent
            :resultArray="resultArray"
            v-if="(windowWidth > 767)"/>
             <!-- This is the the bind to the child component-->
        </div>
        <!-- hide desktop como list when screen is smaller than md-->
        <div class="col-md-6 d-block">
            <ComoListComponent
            ref="ComoListComponent"
            v-if="(windowWidth > 767)"
            v-on:clickEvent="updateArray"
            v-on:hoverEvent="updateDescription"/>
            <ResultModalComponent
            ref="ResultModalComponent"
            v-if="(windowWidth > 767)"
            :resultArray="resultArray"
            v-on:reset-toggle="resetComoList"
            v-on:clear-results="clearResults"/>
        </div>
        <!-- hide desktop glossary when screen is smaller than md-->
        <div class="col-md-3 d-block">
            <GlossaryComponent
            :glossaryEntry="glossaryEntry"
            v-if="(windowWidth > 767)"/>
        </div>
    </div>
    <!-- visible-sm and down  (or hidden-md and up) -->
    <div v-if="isMobile() || (windowWidth <= 767)">
      <div>
      <!-- side drawer that contains the list of comos selected -->
        <drawer v-if="isMobile() || (windowWidth <= 767)"
        :show="drawerShow "
        v-on:on-hide="drawerToggle(), buttonsToggle(), resetScrollPosition()"
        v-on:submit-exams="submitExams">
          <div class="layout" slot="drawer" >
            <button id="drawer_close" type="button" class="close"
            v-on:click="drawerToggle(), buttonsToggle()">
                <span> &times; </span>
              </button>
            <!-- list component -->
            <StatusComponent
              :resultArray="resultArray"/>
          </div>
          <h1 class="my-4 bg-light" style="width: 100%"> Pre-Op Testing App </h1>
          <div class="col-md-12" style="overflow: auto">
            <MobileComoListComponent ref="MobileComoListComponent"
            v-on:clickEvent="updateArray"
            v-on:update-glossary="updateDescription"
            v-on:clear-glossary="clearDescription"
            v-on:toggle-buttons="buttonsToggle"
            v-on:reset-scroll-position="resetScrollPosition"/>
          </div>
          </drawer>
      </div>
      <ResultModalComponent
      v-if="isMobile() || (windowWidth <= 767)"
      ref="MobileResultModalComponent"
      class="navbar navbar-expand-lg navbar-light bg-light results"
      :hiddenButtons="buttonsHidden"
      :resultArray="resultArray"
      v-on:drawer-toggle="drawerToggle"
      v-on:hide-buttons="buttonsToggle"
      v-on:reset-toggle="resetMobileComoList"
      v-on:clear-results="clearResults"/>
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
      windowWidth: 0,
    };
  },
  mounted() {
    this.getWindowWidth();
    // eslint-disable-next-line
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth();
    });
  },
  methods: {
    /**
     *
     */
    // eslint-disable-next-line
    getWindowWidth: function getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.$refs.ResultModalComponent !== undefined) {
        this.$refs.ResultModalComponent.windowWidth = document.documentElement.clientWidth;
      } else {
        this.$refs.MobileResultModalComponent.windowWidth = document.documentElement.clientWidth;
      }
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
      if (this.$refs.MobileComoListComponent !== undefined) {
        this.$refs.MobileComoListComponent.currentComorbidityDescription
       = comorbidity.currentComorbiditySelection;
      }
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

    /**
     * Displays and hides the ResultsModalComponent
     * when the drawer or glossary is displayed.
     */
    buttonsToggle: function buttonsToggle() {
      this.buttonsHidden = !this.buttonsHidden;
    },

    /**
     * Resets the data of ComoListComponent.
     */
    resetComoList: function resetComoList() {
      this.$refs.ComoListComponent.resetData();
    },
    /**
     * Resets the data of MobileComoListComponent.
     */
    resetMobileComoList: function resetMobileComoList() {
      this.$refs.MobileComoListComponent.resetData();
    },
    /**
     * Sets the scroll position of the exam modal to 0,
     * which resets it to the top if user previously
     * scrolled down.
     */
    resetScrollPosition: function resetScrollPosition() {
      const tests = this.$el.querySelector('.show');
      if (tests !== null) {
        tests.scrollTop = 0;
      }
    },
    /**
    * This function is for the patient status drawer's submit button.
    * After recieving a "submit-exams" from the child, exams modal will
    * pop up showing all the required exams.
    */
    submitExams: function submitExams() {
      this.drawerToggle();
      this.buttonsToggle();
      if (this.$refs.ResultModalComponent !== undefined) {
        this.$refs.ResultModalComponent.getExams();
        this.$refs.ResultModalComponent.showModal();
      } else {
        this.$refs.MobileResultModalComponent.getExams();
        this.$refs.MobileResultModalComponent.showModal();
      }
    },
    /**
     * Clears the resultArray when the reset button is pressed.
     */
    clearResults: function clearResults() {
      this.resultArray = [];
    },
    /**
     * Checks to see if the user is viewing on a mobile device.
     */
    isMobile: function isMobile() {
      return (navigator.userAgent.indexOf('Mobile') !== -1);
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
