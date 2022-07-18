<template>
  <div>
    <video loop autoplay muted controls>
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayback",
  props: {
    videoUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.popupbox {
  width: 5rem;
  height: 5rem;
  video {
    width: 100%;
    height: 100%;
  }
}
@media screen and (max-width: 750px) {
  .popupbox {
    width: 80vw;
    height: 80vw;
  }
}
</style>
