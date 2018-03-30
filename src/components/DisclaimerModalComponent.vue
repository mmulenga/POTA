<template>
<div id="modal_box" class="modal fade" :class="{ 'show': isVisible, 'd-block': isVisible }"
 tabindex="-1">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"> Disclaimer </h5>
      </div>
      <div class="modal-body">
        <p>* For patients having ultra-low risk surgery (i.e., GI endoscopy and cataracts
          under local/topical anesthesia), available evidence states there is no need
          for testing.
          <br>
          * For patients with complex or uncommon surgical or medical conditions,
          tests beyond what is suggested in this grid may be appropriate based on the
          clinical judgement of the health care provider.</p>
        <button type="button" class="btn btn-primary" id="understanding" v-on:click="hideModal()">
          I Understand
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DisclaimerModalComponent',
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    /**
    * Hides the modal.
    */
    hideModal: function hideModal() {
      this.isVisible = false;
    },
  },
};
</script>

<style>
  #modal_box {
    background: rgba(0,0,0, 0.9);
    overflow: scroll;
    font-size: 19px;
  }
</style>
