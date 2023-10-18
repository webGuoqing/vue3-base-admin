// 配置项目入口权限
import router from './router';
import NProgress from '@/utils/system/nprogress'
import { changeTitle } from '@/utils/system/title'

router.beforeEach((to, from, next) => {
    changeTitle(to.meta.title)// 动态title
    next()
    NProgress.start();
})
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});