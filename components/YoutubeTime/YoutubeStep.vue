<template>
  <div class="stpes">
    <el-steps direction="vertical" :active="youtubeStepActive">
      <el-step></el-step>
      <el-step></el-step>
      <el-step></el-step>
    </el-steps>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "YoutubeStep",
  computed: {
    ...mapState("youtube", ["youtubeStepActive"])
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
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
