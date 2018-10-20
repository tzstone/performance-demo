<template>
  <div>
    <div v-for="item in list" class="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: 100,
    }
  },
}
</script>

<style lang='less' scoped>
.item {
  height: 100px;
  text-align: center;
  font-size: 20px;
}
</style>
