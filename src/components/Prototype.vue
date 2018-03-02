<template>
    <div class="row">
        <div class="col-md-3">
            <NavComponent/>
        </div>
        <div class="col-md-6">
            <ComoListComponent v-on:updateEvent="updateArray"/>
        </div>
        <div class="col-md-3">
            <OutputComponent/>
        </div>
    </div>
</template>

<script>
import NavComponent from '@/components/NavComponent';
import ComoListComponent from '@/components/ComoListComponent';
import OutputComponent from '@/components/OutputComponent';

export default {
  name: 'Prototype',
  components: {
    NavComponent,
    ComoListComponent,
    OutputComponent,
  },
  data() {
    return {
      framework_name: 'VueJS',
      resultArray: [],
    };
  },
  methods: {
    /**
     * Updates the resultArray with data recieved from
     * child ComoListComponent.
     */
    updateArray: function updateArray(comorbidity) {
      if (this.resultArray.includes(comorbidity.result)) {
        this.resultArray.pop(comorbidity.result);
      } else {
        this.resultArray.push(comorbidity.result);
      }
    },
  },
};
</script>
