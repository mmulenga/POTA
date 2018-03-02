<template>
    <div id="status">
    <h1>Patient Status</h1>
    <ol class="list">
        <status-item
        v-for="item in conditionsReceived"
        v-bind:status="item"
        v-bind:key="item.id">
        </status-item>
    </ol>
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

