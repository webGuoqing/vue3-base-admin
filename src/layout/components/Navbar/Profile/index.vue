<template>
    <el-dropdown trigger="click">
        <div class="avatar-wrapper">
            <div class="user-avatar">
                <img src="@/assets/images/profile.jpg" class="user-head" />
            </div>
            <div class="userInfo_wrap">
                <div>{{ userName }}</div>
                <div>{{ userId }}</div>
            </div>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router';
const router = useRouter();
const userName = ref('---');
const userId = ref('---');
onMounted(() => {
    userName.value = '---';
    userId.value = '---';
});
function logout() {
    ElMessageBox.confirm('您确定退出登录吗？', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {

        })
}
</script>
<style lang="scss" scoped>
.avatar-wrapper {
    display: flex;

    .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        background-size: contain;
        background-image: url('@/assets/images/profile.jpg');

        .user-head {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .userInfo_wrap {
        font-size: 12px;
        margin-left: 5px;

        div {
            height: 50%;
            display: flex;
            align-items: center;
        }
    }
}</style>