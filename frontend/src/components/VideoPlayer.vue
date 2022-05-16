<template>
<div>
  <div class="container" v-if="!isShowPlayer">
    <div v-for="(video, id) in videoList" :key="id" :id="video.id" class="vid-con" @click="onClick($event)">
        <div
          :style="{
            backgroundImage: `url(${video.poster})`
          }"
          class="vid"
        ></div>
        <div class="movie-info">
          <div class="details">
          <h2>{{video.name}}</h2>
          <p>{{video.duration}}</p>
          </div>
        </div>
    </div>
  </div>
  <div class="container playerVideo" v-if="isShowPlayer">
    <div class="player">
        <video controls muted autoPlay crossOrigin="anonymous">
            <source :src="`http://172.16.0.10:5000/videos/video/${vidName}`" type="video/mp4">
            <track label="English" kind="captions" srcLang="en" :src="`http://localhost:5000/videos/video/${vidName}/caption`" default>
        </video>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
    props:['videoList'],
    data(){
      return {
        isShowPlayer: false,
        vidName: "",
      }
    },
    methods:{
      onClick($event) {
      console.log($event.currentTarget.id);
        this.isShowPlayer = !this.isShowPlayer;
        this.vidName = $event.currentTarget.id
      }
    }
    
}
</script>
<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.vid-con{
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  width:50%;
  max-width: 20%;
  margin: auto 2em;
  
}
.vid{
  height:15rem;
  width:100%;
  background-position: center;
  background-size: cover;
}
.movie-info{
  background: black;
  color:white;
  width:100%;
}
.details{
  padding: 16px 20px;
}
.player{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
}
</style>