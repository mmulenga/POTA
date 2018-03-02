<template id="status">
    <div class="status">
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
import Vue from 'vue';
import { Condition } from '@/constants';

Vue.component('status', {
  props: ['status'],
  template: '<li>{{ status.item }}</li>',
  conditionsReceived: [
    { id: 0, comorbidity: Condition.CAD },
  ],
});

export default {
  name: 'StatusComponent',
  data() {
    return {
      conditionsReceived: [
        { comorbidity: Condition.CAD },
      ],
    };
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

