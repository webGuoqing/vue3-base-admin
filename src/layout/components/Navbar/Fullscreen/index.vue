<template>
    <div :class="['iconfont', isFullscreen ? 'icon-suoxiao1' : 'icon-fangda1']"
            @click="toggle"></div>
</template>

<script setup lang="ts">
import { useFullscreen} from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>
<style scoped lang="scss">
@import "../index.scss";
</style>