<template id="status">
    <div class="status">
        <button v-on:click="addConditionsReceived()">
             Add Conditions </button>

        <button v-on:click="removeConditionsReceived()">
             Remove Conditions </button>
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
      ],
    };
  },
  /** @param Takes in an array of conditions, updates the list view of
   * the current patient status
   */
  methods: {
    addConditionsReceived: function addConditionsReceived() {
      this.conditionsReceived.push({ comorbidity: Condition.CAD });
    },
    removeConditionsReceived: function removeConditionsReceived() {
      this.conditionsReceived.pop();
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

