<template>
  <div>
    <h1 class="mb-0">Glossary</h1>
      <pre class="pt-0">
      <p>{{ glossaryEntry }}</p>
      </pre>
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

pre{
  -webkit-padding-start: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 16px;
  margin-right: 12px;
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>
