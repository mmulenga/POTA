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
    };
  },
  methods: {
    showModal: function showModal() {
      if (this.isVisible === false) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
    getExams: function getExams() {
      const exams = PatientExamsNeeded(this.resultArray);
      for (let i = 0; i < this.exams.length; i += 1) {
        this.exams.pop();
      }
      this.exams.push(exams);
    },
  },
};
</script>
