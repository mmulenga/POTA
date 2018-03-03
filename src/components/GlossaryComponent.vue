<template>
  <div>
    <h1>Glossary</h1>
      <p v-bind:glossaryEntry="glossaryEntry"
        v-for="item in glossaryEntry"
        :key="item">
        {{item}}
      </p>
  </div>
</template>

<script>
export default {
  name: 'GlossaryComponent',
  props: {
    glossaryEntry: String,
  },
};
</script>

<style>
p{
 text-align: left;
 word-wrap: normal;
}
</style>
