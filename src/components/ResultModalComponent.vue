<template>
  <div class="container pt-3">
    <button id="modal_submit" type="button" class="btn btn-primary"
     v-on:click="getExams(); showModal();"> Submit </button>
    <!-- Modal -->
    <div id="modal_box" class="modal fade" :class="{ 'show': isVisible, 'd-block': isVisible }"
     tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> Tests </h5>
            <button id="modal_close" type="button" class="close" v-on:click="showModal()">
              <span> &times; </span>
            </button>
          </div>
          <div class="modal-body">
            <p id="exams"
            v-for="item in exams"
            :key="item" >
              {{ item }}
            </p>
            <div id="conditional-exams" class="text-left"
            v-for="item in conditionalExams"
            :key="item">
              <br/>
              <p>
              {{ item.conditionPhrase }}
              If so:
              </p>
              <p v-for="examName in item.exams" :key=examName>
                {{ examName }}
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button id="modal_okay" type="button" class="btn btn-primary" v-on:click="showModal">
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PatientExamsNeeded } from '@/PreopRecommendation';

export default {
  name: 'ResultModalComponent',
  props: {
    resultArray: Array,
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
     * Populates the exams array using the resultArray passed down
     * from the parent. Clearing the previous exams each time it is called
     * and then pushing the new values.
     */
    getExams: function getExams() {
      const examSummary = PatientExamsNeeded(this.resultArray);
      this.exams = examSummary.exams;
      this.conditionalExams = examSummary.conditionalExams;
    },
  },
};
</script>

<style scoped>
  #modal_box {
    background: rgba(0,0,0, 0.8);
  }
</style>
