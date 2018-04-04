<template>
  <!-- container -->
  <div class="vue-drawer">
    <div :style="{'transform': 'translate3d('+translateX+'px,0,0)'}"
    class="main">
    <!-- main body -->
    <slot></slot>
    <!-- mask -->
    <div class="mask" :class="show ? 'active' : ''" @click="hideMask()"></div>
  </div>
  <div class="drawer"
  :class="['drawer-left', show ? 'active' : '']" >
    <!-- drawer -->
    <slot name="drawer"></slot>
    <div class="submit">
      <button id="modal_submit" type="button" class="btn btn-success"
      @click="submitExams"> Submit </button>
    </div>
  </div>
</div>
</template>

<script >

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      translateX: 0,
    };
  },
  /**
   * Watch property used for asynchronous operation for displaying drawer.
   */
  watch: {
    /**
     * Emits a "on-show" event when the mask is clicked.
     * This will display the drawer.
     */
    show: function show() {
      if (this.show) {
        this.$emit('on-show');
      }
    },
  },
  methods: {
    /**
     * Emits a "on-hide" event when the mask is clicked.
     * This will hide the drawer.
     */
    hideMask() {
      this.$emit('on-hide');
    },
    submitExams: function submitExams() {
      this.$emit('submit-exams');
    },
  },
};
</script>

<style scoped>
 .vue-drawer {
   display: block;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
 }

 .vue-drawer > .main {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   transition: transform ease-in-out 0.38s, visibility 0.38s;
 }

 .vue-drawer > .main > .mask {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   visibility: hidden;
   opacity: 0;
   transition: opacity ease-in-out 0.38s, visibility ease-in-out 0.38s;
   background-color: rgba(0, 0, 0, 0.678);
 }

 .vue-drawer > .main > .active {
   visibility: visible;
   opacity: 1;
 }

 .vue-drawer > .drawer {
   background-color: #fff;
   position: fixed;
   top: 0;
   height:100%;
   overflow: hidden;
   pointer-events: none;
   visibility: hidden;
   transition: transform ease-in-out 0.38s, visibility 0.38s;
   will-change: none;
 }

 .vue-drawer > .drawer-left {
   left: 0;
   transform: translateX(-102%);
 }

 .vue-drawer > .active {
   pointer-events: inherit;
   visibility: visible;
   transform: translateX(0%);
 }

  .submit {
    position: fixed;
    left: 0;
    bottom: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
  }
</style>
