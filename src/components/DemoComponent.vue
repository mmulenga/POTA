<template>
  <div class="container">
    <div class="testcss">
      This has component-scoped css!
    </div>
    <div class="row justify-content-md-center" id="Test">
      This is a simple webapp written in {{framework_name}}
    </div>
    <div class="row justify-content-md-center">
      <div class="col-2">
        <button type="button" class="btn" v-on:click="show_alert = !show_alert">
          Toggle alert
        </button>
        <div class="alert alert-info" v-if="show_alert">
          This is an alert
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      Current time is {{current_time[0] | pad2}}:
      {{current_time[1] | pad2}}:
      {{current_time[2] | pad2}}
    </div>
    <button type="button" class="btn" v-on:click="current_time=time()">
      Reload time
    </button>
  </div>
</template>

<script>
function pad2(n) {
  return (n < 10 ? '0' : '') + n;
}

// NOTE: This is a pattern I like for Vue, it breaks out functions.
// Normally you would define these directly in "methods"
function time() {
  const d = new Date();
  return [pad2(d.getHours()), pad2(d.getMinutes()), pad2(d.getSeconds())];
}

export default {
  name: 'DemoComponent',
  data() {
    return {
      framework_name: 'VueJS',
      show_alert: false,
      current_time: this.time(),
    };
  },
  methods: {
    time: () => time(),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.testcss {
  color: red;
}
</style>
