<template>
  <div class="youtube-time">
    <div class="container">
      <h1
        class="is-size-2  is-size-4-mobile has-text-weight-bold has-text-grey-dark"
      >
        取得 YOUTUBE 指定時間
      </h1>
      <h1
        class="is-size-2  is-size-4-mobile has-text-weight-bold has-text-grey-dark"
      >
        GET YOUTUBE TIME CODE
      </h1>
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
import YoutubeForm from './YoutubeForm'
import YoutubeStep from './YoutubeStep'

export default {
  name: 'YoutubeTime',
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
  align-items: center;
  justify-content: center;
}
</style>
