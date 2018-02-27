<template>
  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <!-- This is the left side view -->
    <div class="col-12 col-md-12">
      <!-- TODO: actually make this do something - when menu button is clicked it should
      show/hide the options of home/glossary/help. If home is clicked, it should take you
      back to the main question page, if glossary is clicked it should take to you a page
      all terminology, if help is clicked, it will direct you to a page for help -->
      <h4 class="alert-heading"></h4>
      <button class="btn btn-primary" type="button" id="menu_btn">Menu</button>
      <hr>
      <div class="nav flex-column nav-pills py-5" id="v-pills-tab"
      role="tablist" aria-orientation="vertical">
      <a class="nav-link active" id="testing_btn" data-toggle="pill" href="#v-pills-home"
        role="tab" aria-controls="v-pills-home" aria-selected="true">Testing</a>
      <a class="nav-link" id="help_btn" data-toggle="pill" href="#v-pills-profile"
        role="tab" aria-controls="v-pills-profile" aria-selected="false">Help</a>
      <a class="nav-link" id="glossary_btn" data-toggle="pill" href="#v-pills-settings"
        role="tab" aria-controls="v-pills-settings" aria-selected="false">Glossary</a>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
};
</script>
