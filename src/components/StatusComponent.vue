<template id="status">
    <div class="status">
        <button v-on:click="updateConditionsReceived()">
             Update Conditions </button>
        <h1>Patient Status</h1>
        <div class="list">
            <ul id="status"
                v-for="item in conditionsReceived"
                :key="item.comorbidity">
                <li> {{item.comorbidity}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
import { Condition } from '@/constants';

export default {
  name: 'StatusComponent',
  data() {
    return {
      conditionsReceived: [
        { comorbidity: Condition.Defib },
      ],
    };
  },
  /** @param Takes in an array of conditions, updates the list view of
   * the current patient status
   */
  methods: {
    updateConditionsReceived: function updateConditionsReceived() {
      this.conditionsReceived.push({ comorbidity: Condition.CAD });
    },
  },
};

</script>


<style>
    h1{
        font-size: 2em;
    }
    .list{
        overflow: auto;
        text-align: left;
    }
</style>

