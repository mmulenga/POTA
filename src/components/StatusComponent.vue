<template id="status">
    <div class="status">
        <h1>Patient Status:</h1>
        <div id="list" class="list">
            <!-- this is the other place binding for the props is being used -->
            <ul v-bind:resultArray="resultArray"
                v-for="item in resultArray"
                :key="item">
                <li>{{item}}</li>
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
};

</script>

<style>
    h1{
        font-size: 2em;
        padding: 15px;
    }
    .list{
        height: 500px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        text-align: left;
        /* font-family:'Comic Sans MS'; */
    }

    /* ----------- Galaxy S4, S5 and Note 3 ----------- */
    /* Portrait and Landscape */
    @media screen
    and (min-device-width: 320px)
    and (max-device-height: 640px) {
    .list {
        left: 0px;
        top: 70px;
        bottom: 0px;
        width: 100%;
        position: absolute;
        height: 80%;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        padding: 10px;
    }
    }
</style>

