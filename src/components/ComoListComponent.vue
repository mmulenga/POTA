<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <h1> Test </h1>
            </div>
            <div class="col-md-8">
                <ul class="list-group">
                    <li class="list-group-item" v-for="item in items" :key="item.title">
                        {{ item.title }}
                    </li>
                </ul>
            </div>
            <div class="col-md-2">
                <h1> Test </h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ComoListComponent',
  data() {
    return {
      items: [
        { title: 'test1' },
        { title: 'test2' },
        { title: 'test3' },
        { title: 'test4' },
      ],
    };
  },
};
</script>
