<template>
    <div class="row">
        <div class="col-3">
            <NavComponent/>
        </div>
        <div class="col-6">
            <ComoListComponent/>
        </div>
        <div class="col-3">
            <OutputComponent/>
        </div>
    </div>
</template>

<script>
import NavComponent from '../components/NavComponent';
import ComoListComponent from '../components/ComoListComponent';
import OutputComponent from '../components/OutputComponent';

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
    };
  },
};
</script>
