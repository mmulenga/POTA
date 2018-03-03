<template>
  <div>
    <button v-on:click="getExams()">Algorithm!</button>
    <p id="exams"
      v-for="item in exams"
      :key="item" >
      {{item}}
      </p>
  </div>
</template>

<script>
import { PatientExamsNeeded } from '../PreopRecommendation';


export default {
  name: 'NavComponent',
  props: {
    resultArray: Array,
  },
  data() {
    return {
      exams: [
      ],
    };
  },
  methods: {
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
