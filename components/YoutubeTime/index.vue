<template>
  <div class="youtube-time">
    <div class="container">
      <h1 class="is-size-2 has-text-grey-dark">取得 YOUTUBE 指定時間</h1>
      <br />
      <el-row>
        <el-col :span="4">
          <youtube-step />
        </el-col>
        <el-col :span="19">
          <youtube-form />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import YoutubeForm from "./YoutubeForm"
import YoutubeStep from "./YoutubeStep"

export default {
  name: "YoutubeTime",
  components: {
    YoutubeForm,
    YoutubeStep
  }
}
</script>

<style>
.youtube-time {
  max-width: 600px;
  margin-bottom: 150px;
  text-align: center;
}
.youtube-time.container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
