export default function noTouch() {

    if(window._noTouchInited) return;
    window._noTouchInited = true;
    console.log("noTouch load sucess");
    
    /* 1. 禁止右键菜单、选中文本、复制、剪切 */
    const stop = e =>e.preventDefault();
    ['contextmenu','selectstart','copy','cut']
    .forEach(evt => document.addEventListener(evt,stop, {passive:false}));

    /* 2.css层面统一禁止 */
    const root = document.documentElement.style;
    root.webkitTouchCallout = 'none';
    root.webkitUserSelect = 'none';
    root.userSelect = 'none';

    /* 手勢/缩放/双击放大处理 （仅ios相关）  */
    document.addEventListener('touchstart', e => {
        if (e.touches.length > 1) e.preventDefault();
    }, { passive: false });
  
  document.addEventListener('gesturestart', e => e.preventDefault(), { passive: false });
  
  let lastTouchEnd = 0;
  document.addEventListener('touchend', e => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
  }, { passive: false });
}

/*自动执行 （浏览器<script> 引入时）*/
if(typeof window != 'undefined'){
    noTouch()
}
