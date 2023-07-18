<template>
    <div class="container">
        <div>
            <h1 class="title">我是vue基础模板</h1>
            <div class="info">主要技术栈包含：vue3+pinia+vite+typeScript</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { } from 'vue'
import { } from 'vue-router'
</script>

<style lang="scss" scoped>
.container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.title {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
}

.info {
    text-align: center;
    margin: 30px;
}
</style>