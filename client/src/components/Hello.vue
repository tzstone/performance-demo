<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'hello',
    }
  },
  methods: {},
  components: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.even {
  color: red;
}

.odd {
  color: green;
}
</style>
