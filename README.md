# 🍜 今天吃什么 - 命运大转盘

**专治选择困难症晚期患者**  
还在为"中午吃啥"纠结到下午3点？让这个转盘替你决定！

![示例截图](https://via.placeholder.com/400x200?text=转盘效果预览图)

## ✨ 功能特性
- 🎡 一键随机选择食物
- 📱 响应式设计（适配手机/电脑）
- 🎨 纯前端实现，无需后端
- 🔄 简单直观的操作界面

## 🛠️ 技术栈
| 技术 | 用途 |
|------|------|
| HTML5 | 页面基础结构 |
| CSS3 | 转盘动画效果 |
| JavaScript | 核心随机逻辑 |
| Bootstrap | 响应式布局 |
| FontAwesome | 图标系统 |

## 🚀 快速开始
### 本地运行
```base
git clone https://github.com/YJiva/Jiva-What-To-Eat-Today.git
cd Jiva-What-To-Eat-Today
```
# 直接双击index.html即可




## 🚀 快速开始

### 1. 性能问题

  ◦ 低端设备动画可能卡顿

  ◦ 移动端触摸事件支持不完善

### 2. 功能限制

  ◦ 食物列表固定不可配置

  ◦ 不支持保存历史记录

### 3. 兼容性问题

  ◦ IE浏览器完全不支持

  ◦ Safari部分版本显示异常

## 🔮 未来计划

☐ 自定义食物列表功能

☐ 添加音效支持

☐ 实现3D转盘效果

☐ 增加分享功能

## 📝 使用示例
```code
      // 核心代码片段
      function spinWheel() {
        const result = foodList[Math.floor(Math.random() * foodList.length)];
        console.log(`今天吃：${result}`);
      }
```

## ⚠️ 免责声明

1. 本工具仅供参考娱乐

2. 不对选择结果负责

3. 可能引发选择困难症加重

## 📜 许可证

### MIT License © 2024 YJiva


