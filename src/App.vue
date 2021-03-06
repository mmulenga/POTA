<template>
  <div id="app">
    <DisclaimerModalComponent></DisclaimerModalComponent>
      <h5 class="my-4"
        style="padding: 20px;"
        v-if="(( !isMobile() && windowWidth > 912))">
        Saskatchewan Preoperative Lab Test Guidelines
        For Adult Patients Undergoing Elective Non-Cardiac Surgeries (Draft)
      </h5>
      <div v-if="!isMobile() && (windowWidth > 912)" class="row">
        <!-- hide the status component when screen is smaller than md-->
        <div class="col-md-3 d-block">
            <StatusComponent
            :resultArray="resultArray"
            v-if="(( !isMobile() && windowWidth > 912))"/>
             <!-- This is the the bind to the child component-->
        </div>
        <!-- hide desktop como list when screen is smaller than md-->
        <div class="col-md-6 d-block">
          <keep-alive>
            <ComoListComponent
            ref="ComoListComponent"
            v-if="(( !isMobile() && windowWidth > 912))"
            v-on:clickEvent="updateArray"
            v-on:hoverEvent="updateDescription"
            v-on:comoList-deactivated="mobileUpdate"
            />
          </keep-alive>
          <ResultModalComponent
          ref="ResultModalComponent"
          v-if="(( !isMobile() && windowWidth >= 912))"
          :resultArray="resultArray"
          :mobile="false"
          v-on:reset-toggle="resetComoList"
          v-on:clear-results="clearResults"/>
        </div>
        <!-- hide desktop glossary when screen is smaller than md-->
        <div class="col-md-3 d-block">
            <GlossaryComponent
            :glossaryEntry="glossaryEntry"
            v-if="(( !isMobile() && windowWidth > 912))"/>
        </div>
    </div>
    <!-- visible-sm and down  (or hidden-md and up) -->
    <div>
      <div>
      <!-- side drawer that contains the list of comos selected -->
        <keep-alive>
        <drawer v-if="isMobile() || (windowWidth <= 912)"
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
          <h5 class="my-4 bg-light" style="width: 100%; padding: 20px;">
            Saskatchewan Preoperative Lab Test Guidelines
            For Adult Patients Undergoing Elective Non-Cardiac Surgeries (Draft)
          </h5>
          <div class="col-md-12" style="overflow: auto">
            <MobileComoListComponent
            ref="MobileComoListComponent"
            v-on:clickEvent="updateArray"
            v-on:update-glossary="updateDescription"
            v-on:clear-glossary="clearDescription"
            v-on:toggle-buttons="buttonsToggle"
            v-on:reset-scroll-position="resetScrollPosition"
            v-on:mobileComoList-deactivated="desktopUpdate"
            />
          </div>
          </drawer>
        </keep-alive>
        </div>
      <ResultModalComponent
      v-if="isMobile() || ( !isMobile() && windowWidth <= 912)"
      ref="MobileResultModalComponent"
      class="navbar navbar-expand-lg navbar-light bg-light results"
      :hiddenButtons="buttonsHidden"
      :resultArray="resultArray"
      :mobile="true"
      :windowWidth="windowWidth"
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
    // this.getWindowWidth();
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
      // eslint-disable-next-line
      if (this.$refs.MobileComoListComponent._inactive === false) {
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
    desktopUpdate: function desktopUpdate(data) {
      this.$refs.ComoListComponent.updateData(data);
    },
    mobileUpdate: function mobileUpdate(data) {
      this.$refs.MobileComoListComponent.updateData(data);
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
