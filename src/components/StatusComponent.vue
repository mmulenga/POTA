<template id="status">
    <div class="status">
        <h1>Patient Status</h1>
        <div class="list">
            <!-- this is the other place binding for the props is being used -->
            <ul v-bind:resultArray="resultArray"
                v-for="item in resultArray"
                :key="item">
                <li> {{item}} </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
  name: 'StatusComponent',
  // this is the prop in the child component
  props: {
    resultArray: Array,
  },
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
    addConditionsReceived: function addConditionsReceived(conditions) {
      let i;
      for (i = 0; i <= this.conditionsReceived.length; i += 1) {
        this.removeConditionsReceived();
      }
      this.conditionsReceived = this.conditionsReceived.concat(conditions);
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
        height: 500px;
        overflow: auto;
        text-align: left;
        /* font-family:'Comic Sans MS'; */
    }
</style>

