// 配置项目入口权限
import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: false, // 是否显示加载icon
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3, // 初始化时的最小百分比
});

router.beforeEach((to, from, next) => {
    next()
    NProgress.start();
    NProgress.inc();
})
router.afterEach(() => {
    // 在即将进入新的页面组件前，关闭掉进度条
    NProgress.done();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});