<template>
<div class="col-12">
  <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Recommend Test:</h4>
    <red-text>
      Showing what test should be done
    </red-text>
    <hr>
    <red-text>
      Showing what test should be done
    </red-text>
    <hr>
    <red-text>
      Showing what test should be done
    </red-text>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Status of Patient:</h4>
    <red-text>
      Showing patient's status
    </red-text>
    <br/>
    <hr>
    <button class="btn btn-primary" type="button" id="reset_btn">Restore</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutputComponent',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  red-text{
    color:red;
  }
</style>
