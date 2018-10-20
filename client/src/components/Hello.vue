<template>
  <div>
    <span>{{msg}}</span>
    <div class="icon-time"></div>
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
@import '../assets/sprite.css';
.even {
  color: red;
}

.odd {
  color: green;
}
</style>
