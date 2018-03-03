<template>
  <div class="container pt-3">
    <button type="button" class="btn btn-primary" v-on:click="print()"> Submit </button>

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
            <div class="container">
            </div>
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
    print: function print() {
      const results = PatientExamsNeeded(this.resultArray);
      // eslint-disable-next-line
      console.log(results);
    },
  },
};
</script>
