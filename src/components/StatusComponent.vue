<template id="StatusComponent">
    <div class="group realtimedb">
        <h1>Co-morbidities</h1>
        <div class="list">
            <ul id="conditions-received"
                v-for="item in conditionsReceived"
                :key="item.conditionsReceived">
                    <li> {{item.comorbidity}} </li>
            </ul>
        </div>
    </div>
</template>

<script>
// import Vue from 'vue';
import { Condition } from '@/constants';

/*
const status = new Vue({
  el: '#status',
  data: {
    conditionsReceived: [
      { comorbidity: Condition.CAD },
    ],
  },
});

status.conditionsReceived.push({ comorbidity: Condition.AtrialFib });
*/

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

