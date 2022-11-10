// 抽屉收缩
const drawerBtn = $(".drawerBtn")
const golr= $(".golr")
var goflag=1
drawerBtn.click(function(){
    if(goflag==1){
        drawerBtn.addClass("fa-rotate-180")
        golr.css("cssText","right:10%")
        goflag=0
    } else{
        drawerBtn.removeClass("fa-rotate-180")
        golr.css("cssText","right:92%")
        goflag=1
    }
})
//抽奖功能
let getEle = document.getElementsByClassName.bind(document);
let pointer = getEle('pointer')[0];
let result = getEle('result')[0];
let lights = Array.prototype.slice.call(getEle('light'));
let onRotation = false; // 记录当前是否正在旋转，如果正在旋转，就不能继续点击了
let reward = ['面条', '饭', '馄饨', '鸡排', '麻辣烫',
'粉条', '鸭血粉丝', '肯德基', '麦当劳', '不吃'];
// 根据随机角度获取奖励
let getReward = (function() {
  currentDeg = 0;
  return function() {
    // 转三圈到四圈
let id = Math.random() //这里是中奖ID 可以通过接口返回 取值为0.1 - 10 返回值需要做处理  例：返回3则处理为 id = 3 / 10
    let rotateDeg = id * 360 + 1080;
    currentDeg += rotateDeg;
    let rewardText = reward[Math.floor((currentDeg + 18) % 360 / 36)]
    return {
      deg: currentDeg,
      text: rewardText === '谢谢参与' ? '很遗憾，您没有获得奖品。' : '你决定今天要吃: ' + rewardText
    }
  }
})();
pointer.addEventListener('click', () => {
  if (onRotation) return;
  console.log('开始抽奖');
  onRotation = true;
  let nextStatus = getReward();
  setTimeout(() => { // 等闪烁五下结束
  alert(nextStatus.text)
  }, 2500);
  pointer.style.transform = `rotateZ(${nextStatus.deg}deg)`;
})
pointer.addEventListener('transitionend', () => {
  console.log('抽奖结束');
  setTimeout(() => { // 等闪烁五下结束
    onRotation = false;
  }, 500);
// 这里每100毫秒为闪烁一次
})