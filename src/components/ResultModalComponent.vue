<template>
  <div class="container pt-3">
    <button type="button" class="btn btn-primary"
     v-on:click="getExams(); showModal();"> Submit </button>
    <!-- Modal -->
    <div class="modal fade" :class="{ 'show': isVisible, 'd-block': isVisible }">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"> Tests </h5>
            <button type="button" class="close" v-on:click="showModal()">
              <span> &times; </span>
            </button>
          </div>
          <div class="modal-body">
            <p id="exams"
            v-for="item in exams"
            :key="item" >
              {{ item }}
            </p>
            <p id="conditional-exams"
            v-for="item in conditionalExams"
            :key="item">
              {{ item.conditionPhrase }}
              If so:
              <span v-for="examName in item.exams" :key=examName>
                {{ examName }}
              </span>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" v-on:click="showModal">Okay</button>
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
