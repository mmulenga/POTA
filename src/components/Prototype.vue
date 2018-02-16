<template>

    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <div class="row">
        <!-- This is the left side view -->
        <div class="col-6 col-md-4">
            <!-- TODO: actually make this do something - when menu button is clicked it should
            show/hide the options of home/glossary/help. If home is clicked, it should take you
            back to the main question page, if glossary is clicked it should take to you a page
            all terminology, if help is clicked, it will direct you to a page for help -->
            <h4 class="alert-heading"></h4>
                <button class="btn btn-primary" type="button" id="menu_btn">Menu</button>
                <hr>
                <div class="nav flex-column nav-pills py-5" id="v-pills-tab"
                role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="testing_btn"
                        data-toggle="pill" href="#v-pills-home"
                        role="tab" aria-controls="v-pills-home"
                        aria-selected="true">Testing</a>
                    <a class="nav-link" id="help_btn"
                        data-toggle="pill" href="#v-pills-profile"
                        role="tab" aria-controls="v-pills-profile"
                        aria-selected="false">Help</a>
                    <a class="nav-link" id="glossary_btn"
                        data-toggle="pill" href="#v-pills-settings"
                        role="tab" aria-controls="v-pills-settings"
                        aria-selected="false">Glossary</a>
                </div>
        </div>
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
                <button class="btn btn-primary" type="button" id="reset_btn">Restore</button>
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
