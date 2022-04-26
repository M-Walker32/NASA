<template>
  <div class="container">
    <div class="row">
      <div class="col-12 p-2">
        <h1 class="p-2">{{ image.title }}</h1>
        <img class="format p-2" :src="image.url" />
        <p class="p-2">{{ image.explanation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { imagesService } from "../services/ImagesService.js";
import { onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger.js";
logger;

export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await imagesService.getImage();
      } catch (error) {
        logger.log(error);
      }
    });
    return {
      image: computed(() => AppState.image),
    };
  },
};
</script>

<style scoped lang="scss">
.format {
  height: 50vh;
}
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
  }
}
</style>
