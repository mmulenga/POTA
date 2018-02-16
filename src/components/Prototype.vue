<template>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row">
        <!-- This is the left side view -->
        <div class="col-6 col-md-4">To Do the left side UI</div>
        <!-- This is the mid side view -->
        <div class="col-6 col-md-4">To Do the Mid side UI</div>
        <!-- This is the right side view (UI) -->
        <div class="col-6 col-md-4">
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
                <button class="btn btn-primary" type="button">Restore</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Prototype',
  data() {
    return {
      framework_name: 'VueJS',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    red-text{
        color:red;
    }
</style>
