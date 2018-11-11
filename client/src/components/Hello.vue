<template>
  <div>
    <span>{{msg}}</span>
    <div class="icon icon-time"></div>
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
  mounted() {},
  methods: {},
  components: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../assets/sprite.css';
</style>
<style scoped>
.even {
  color: red;
}

.odd {
  color: green;
}
</style>
