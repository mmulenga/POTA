<template>
  <div>
    <h1>Glossary</h1>
      <p> {{ glossaryEntry }} </p>
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
}
</style>
