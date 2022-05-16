<template>
  <div>
    <NavBar/>
    <VideoPlayer :videoList="videos"></VideoPlayer>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue"
import NavBar from "@/components/NavBar.vue"
export default {
  components: {
    VideoPlayer,
    NavBar
  },
head: {
    title: "Home"
  },
    data() {
      return {
        videos: []
      }
    },
    async created() {
      const result = await fetch('http://172.16.0.10:5000/videos');
      if(!result.ok) {
        return Promise.reject("Error")
      }
      this.videos = await result.json()
    },
}
</script>