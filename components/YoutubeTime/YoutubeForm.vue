<template>
  <el-form ref="form" :model="form" :rules="rules">
    <el-form-item prop="originalUrl">
      <el-input
        v-model.lazy="form.originalUrl"
        :clearable="true"
        placeholder="貼上 YOUTUBE 原始連結"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <template>
        <el-row>
          <el-col :span="5">
            <el-input
              v-model.number.lazy="form.min"
              class="time"
              tpye="number"
              maxlength="2"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              placeholder="min"
            ></el-input>
          </el-col>
          <el-col :span="1">:</el-col>
          <el-col :span="5">
            <el-input
              v-model.number.lazy="form.sec"
              class="time"
              tpye="number"
              maxlength="2"
              onkeyup="value=value.replace(/[^\d]/g,'')"
              placeholder="sec"
            ></el-input>
          </el-col>

          <el-col :span="13">
            <div style="float: right;">
              <el-button type="info" plain @click="submitForm">確定</el-button>
              <el-button type="info" plain @click="submitPreview"
                >預覽</el-button
              >
            </div>
          </el-col>
        </el-row>
      </template>
    </el-form-item>

    <el-form-item>
      <div @click="copyUrl">
        <el-input
          id="myInput"
          v-model="resultUrl"
          type="text"
          :readonly="true"
          placeholder="複製 YOUTUBE 新連結"
        ></el-input>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions } from "vuex"
import { split, take, join, dropRight } from "lodash"
export default {
  name: "YoutubeForm",
  data: () => ({
    form: {
      originalUrl: "",
      min: null,
      sec: null
    },
    resultUrl: ""
  }),
  computed: {
    baseUrl() {
      const { originalUrl } = this.form
      return join(dropRight(split(originalUrl, "v=")[0]), "")
    },

    videoId() {
      const { originalUrl } = this.form
      return join(take(split(originalUrl, "v=")[1], 11), "")
    },
    rules() {
      return {
        originalUrl: [
          { required: true, message: "貼上網址", trigger: "blur" },
          {
            // https://www.youtube.com/watch?v=BRpGRrdfC78&loop=0
            pattern: /(https:\/\/www.youtube.com\/watch\?v=)+./,
            message: "網址的格式似乎錯了",
            trigger: "blur"
          }
        ]
      }
    }
  },
  watch: {
    form: {
      handler(val) {
        const { originalUrl } = val
        this.$refs.form.validate((valid) => {
          if (valid && originalUrl) {
            this.updateStepsActive(1)
          } else {
            this.updateStepsActive(0)
            this.resultUrl = ""
            return false
          }
        })
      },
      deep: true
    }
  },
  methods: {
    ...mapActions("youtube", ["updateStepsActive"]),
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const {
            baseUrl,
            videoId,
            form: { min, sec }
          } = this

          this.resultUrl = `${baseUrl}?v=${videoId}&t=${min | 0}m${sec | 0}s`
          this.updateStepsActive(2)
        } else {
          return false
        }
      })
    },
    submitPreview() {
      const { resultUrl } = this
      if (resultUrl) return window.open(resultUrl, "_blank")
    },
    copyUrl() {
      const { resultUrl } = this
      if (resultUrl) {
        const copyText = document.getElementById("myInput")
        /* Select the text field */
        copyText.select()
        /* For mobile devices */
        copyText.setSelectionRange(0, 99999)
        /* Copy the text inside the text field */
        document.execCommand("copy")
        this.videoId
        this.updateStepsActive(3)
        this.$message({
          message: "copyed",
          type: "success"
        })
      }
    }
  }
}
</script>

<style>
.time .el-input__inner {
  text-align: center;
}
</style>
