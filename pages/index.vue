<template>
  <div class="container-main flex-center">
    <Navbar />
    <YoutubeTime class="content flex-center" />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import YoutubeTime from '~/components/YoutubeTime'
import Footer from '~/components/Footer'

export default {
  components: {
    Navbar,
    YoutubeTime,
    Footer
  },
  data: () => ({
    title: 'YoutubeTime | 幫你取得 Youtube 指定時間的網址 '
  }),
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'YoutubeTime',
          content:
            '幫你產生附加 Youtube TimeCode 的網址，讓 YouTube 影片從「指定時間」開始播放'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: './assets/favicon/nuxt-icon-favicon.ico'
        }
      ]
    }
  }
}
</script>

<style>
.container-main {
  margin: 0 auto;
  min-height: 100vh;
  flex-direction: column;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  flex: 1;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@font-face {
  font-family: 'jf-openhuninn';
  src: url('../assets/fonts/jf-openhuninn-1.0.ttf');
}
* {
  font-family: 'jf-openhuninn', Helvetica, Arial, sans-serif !important;
}
</style>
