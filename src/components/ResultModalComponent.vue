<template>
  <div class="pt-3" :class="hiddenButtons ? 'inactive' : ''">
    <button :id="generateSubmitID()" type="button" class="btn btn-success"
     v-on:click="getExams(); showModal();"> Submit </button>
     <!-- For Mobile -->
     <div v-if="isMobile() || (this.windowWidth < 1024)">
      <button id="mobile_status_button" type="button" class="btn btn-primary"
        v-on:click="drawerToggle(), hideButtons()">
        Patient Status
        </button>
     </div>
    <button :id="generateResetID()" type="button" class="btn btn-danger"
     v-on:click="clearResultArray(), toggleReset()"> Reset </button>
    <!-- Modal -->
    <div id="modal_box" class="modal fade" :class="{ 'show': isVisible, 'd-block': isVisible }"
     tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> Required Tests </h5>
          </div>
          <div class="modal-body">
            <p id="exams"
            v-for="item in exams"
            :key="item" >
              <b>{{ item }}</b>
              {{ getValidity(item)}}
            </p>
            <div id="conditional-exams" class="text-left"
            v-for="item in conditionalExams"
            :key="item">
              <br/>
              <p>
              <b>{{ item.conditionPhrase }}</b>
              <b>If so:</b>
              </p>
              <p v-for="examName in item.exams" :key=examName>
                <b>{{ examName }}</b>
                {{ getValidity(examName) }}
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button id="modal_okay" type="button" class="btn btn-primary"
            v-on:click="showModal()">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PatientExamsNeeded, ExamValidity } from '@/PreopRecommendation';

export default {
  name: 'ResultModalComponent',
  props: {
    resultArray: Array,
    hiddenButtons: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: false,
      exams: [],
      conditionalExams: [],
      windowWidth: 0,
    };
  },
  methods: {
    /**
     * Displays or hides the modal depending on whether or not it is
     * already hidden.
     */
    showModal: function showModal() {
      this.isVisible = !this.isVisible;
    },
    /**
     * Emits a "hide-buttons" event to the parent component.
     */
    hideButtons: function hideButtons() {
      this.$emit('hide-buttons');
    },
    /**
     * Populates the exams array using the resultArray passed down
     * from the parent. Clearing the previous exams each time it is called
     * and then pushing the new values.
     */
    getExams: function getExams() {
      const examSummary = PatientExamsNeeded(this.resultArray);
      this.exams = examSummary.exams;
      this.conditionalExams = examSummary.conditionalExams;
    },

    /**
     * Gets a validity period
     * @param String exam
     * @returns validity period for that exam
     */
    getValidity: function getValidity(exam) {
      return ExamValidity(exam);
    },
    /**
     * Emits a "clear-results" event to the parent component to
     * clear the resultsArray.
     */
    clearResultArray: function clearResultArray() {
      this.$emit('clear-results');
    },
    /**
     * Emits a "drawer-toggle" event to the parent component to
     * toggle the patient status drawer.
     */
    drawerToggle: function drawerToggle() {
      this.$emit('drawer-toggle');
    },
    /**
     * Emits a "reset-toggle" event to the parent component to reset
     * the ComoListComponent's data
     */
    toggleReset: function toggleReset() {
      this.$emit('reset-toggle');
    },
    /**
     * Determines if the user is viewing from a mobile device.
     */
    isMobile: function isMobile() {
      return (navigator.userAgent.indexOf('Mobile') !== -1);
    },
    /**
    * Generates a unique ID for a submit button if the
    * user is viewing from a mobile device.
    */
    generateSubmitID: function generateSubmitID() {
      if (this.isMobile()) {
        return 'mobile_submit_button';
      }
      return 'submit_button';
    },
    /**
    * Generates a unique ID for a rest button if the
    * user is viewing from a mobile device.
    */
    generateResetID: function generateResetID() {
      if (this.isMobile()) {
        return 'mobile_reset_button';
      }

      return 'reset_button';
    },
  },
};

</script>

<style scoped>
  #modal_box {
    background: rgba(0,0,0, 0.8);
  }

  .pt-3 {
    background: rgba(0, 0, 0, 0);
    bottom: 0px;
    width: 100%;
    padding-bottom: 15px;
  }

  .inactive {
    visibility: hidden;
  }

</style>
