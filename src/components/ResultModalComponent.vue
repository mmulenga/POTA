<template>
  <div class="container pt-3" :class="hiddenButtons ? 'inactive' : ''">
    <button id="modal_submit" type="button" class="btn btn-success"
     v-on:click="getExams(); showModal();"> Submit </button>
     <!-- For Mobile -->
     <div v-if="isMobile()">
      <button type="button" class="btn btn-primary"
        v-on:click="drawerToggle(), hideButtons()">
        Patient Status
        </button>
     </div>
    <button id="reset" type="button" class="btn btn-danger"
     v-on:click="clearResultArray(), toggleReset() ;"> Reset </button>
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
            v-on:click="showModal(), resetScrollPosition()">
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
    };
  },
  methods: {
    /**
     * Displays or hides the modal depending on whether or not it is
     * already hidden.
     */
    showModal: function showModal() {
      if (this.isVisible === false) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
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
      * Clears the result array in App.vue
      * TODO: should also uncheck all the checkboxed
      * when method is called
     */
    clearResultArray: function clearResultArray() {
      this.$parent.resultArray = [];
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
    * Emits a "reset-scroll-position" event to the parent component to reset
    * the scroll position of the exam modal.
    */
    resetScrollPosition: function resetScrollPosition() {
      this.$emit('reset-scroll-position');
    },
    isMobile: function isMobile() {
      return (navigator.userAgent.indexOf('Mobile') !== -1);
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
