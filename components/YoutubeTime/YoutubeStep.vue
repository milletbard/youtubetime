<template>
  <div class="stpes">
    <el-steps direction="vertical" :active="active">
      <el-step></el-step>
      <el-step></el-step>
      <el-step></el-step>
    </el-steps>
  </div>
</template>

<script>
export default {
  name: 'YoutubeStep',
  computed: {
    active() {
      return this.$store.state.youtubeTime.youtubeStepActive
    }
  },
  methods: {
    updateStepsActive(step) {
      this.$store.commit('youtubeTime/UPDATE_STEPS_ACTIVE', step)
    },
    next() {
      if (this.active++ > 2) this.updateStepsActive(0)
    }
  }
}
</script>

<style scoped>
.stpes {
  height: 150px;
  margin: 10px 20px;
}
</style>
