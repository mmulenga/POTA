<template>
    <div class="row">
<<<<<<< HEAD
        <div class="col-3">
            <StatusComponent/>
=======
        <div class="col-md-3">
            <NavComponent/>
>>>>>>> origin/matt/como_list_component
        </div>
        <div class="col-md-6">
            <ComoListComponent/>
        </div>
        <div class="col-md-3">
            <OutputComponent/>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import NavComponent from '../components/NavComponent';
import ComoListComponent from '../components/ComoListComponent';
import OutputComponent from '../components/OutputComponent';
import StatusComponent from '../components/StatusComponent';

=======
import NavComponent from '@/components/NavComponent';
import ComoListComponent from '@/components/ComoListComponent';
import OutputComponent from '@/components/OutputComponent';
>>>>>>> origin/matt/como_list_component

export default {
  name: 'Prototype',
  components: {
    NavComponent,
    ComoListComponent,
    OutputComponent,
    StatusComponent,
  },
  data() {
    return {
      framework_name: 'VueJS',
    };
  },
};
</script>
