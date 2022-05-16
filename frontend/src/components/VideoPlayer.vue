<template>
  <div class="container" v-if="!isShowPlayer">
    <div class="row">
      <div v-for="(video, id) in videoList" :key="id" :id="video.id" class="col-md-3 col-sm-4 col-6 video-item" @click="onClick($event)">
          <img :src="video.poster" class="img-fluid" video-image alt="...">
          <div class="movie-info">
            <div class="details">
              <p>{{video.name}} - {{video.duration}}</p>
            </div>
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
        this.isShowPlayer = !this.isShowPlayer;
        this.vidName = $event.currentTarget.id
      }
    }
    
}
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.video-item{
  margin-top: 1%;
  margin-bottom: 1%;
}
.video-image{
  width:100%; 
  background-position: center;
  background-size: cover;
}
.movie-info{
  background: black;
  color:white;
  width:100%;
  font-size: 18px;
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