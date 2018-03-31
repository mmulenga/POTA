<template>
  <div class="container pt-3" :class="hiddenButtons ? 'inactive' : ''">
    <button id="modal_submit" type="button" class="btn btn-success"
     v-on:click="getExams(); showModal();"> Submit </button>
     <!-- For Mobile -->
     <div class="d-md-none d-lg-none d-xl-none">
      <button type="button" class="btn btn-primary"
        v-on:click="drawerToggle(), hideButtons()">
        Patient Status
        </button>
     </div>
    <button id="reset" type="button" class="btn btn-danger"
     v-on:click="clearResultArray();"> Reset </button>
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
      * Clears the result array in App.vue
      * TODO: should also uncheck all the checkboxed
      * when method is called
     */
    clearResultArray: function clearResultArray() {
      this.$parent.resultArray = [];
    },

    drawerToggle: function drawerToggle() {
      this.$emit('drawer-toggle');
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
