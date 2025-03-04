/*
 * @Author: along
 * @Description:
 * @Date: 2024-10-21 09:19:58
 * @LastEditors: along
 * @LastEditTime: 2025-03-03 09:41:33
 * @FilePath: /cxy-web-tool/src/utils/index.ts
 */
export const getCurrentDateTime = () => {
  const now = new Date(); // 创建一个新的Date对象，它将包含当前的日期和时间
  const year = now.getFullYear(); // 获取当前的年份
  let month = now.getMonth() + 1; // 获取当前月份（0-11，所以需要+1）
  let day = now.getDate(); // 获取当前日
  let hour = now.getHours(); // 获取当前小时
  let minute = now.getMinutes(); // 获取当前分钟
  let second = now.getSeconds(); // 获取当前秒数

  // 将单个数字格式化为两位数（例如，1 -> 01）
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  // 拼接成字符串并返回
  return (
    year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second
  );
};

export const getDayOfWeek = () => {
  const daysOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const today = new Date();
  const dayOfWeekIndex = today.getDay();
  return daysOfWeek[dayOfWeekIndex];
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const isMorningOrAfternoon = () => {
  const currentHour = new Date().getHours();
  if (currentHour >= 12) {
    return "下午";
  } else {
    return "上午";
  }
};

export const moveTarget = (id, pos) => {
  const circle = document.getElementById(id);
  let isDragging = false;
  let offsetX, offsetY;

  // 设置默认位置
  const setDefaultPosition = ({ x, y }) => {
    circle.style.right = `${x}px`;
    circle.style.bottom = `${y}vh`;
  };

  // 初始化默认位置
  setDefaultPosition(pos);

  // 鼠标按下事件
  circle.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - circle.offsetLeft;
    offsetY = e.clientY - circle.offsetTop;
  });

  // 鼠标移动事件
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      let x = e.clientX - offsetX;
      let y = e.clientY - offsetY;

      // 限制圆形不超出屏幕
      const maxX = window.innerWidth - circle.offsetWidth;
      const maxY = window.innerHeight - circle.offsetHeight;

      x = Math.max(0, Math.min(x, maxX));
      y = Math.max(0, Math.min(y, maxY));

      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;
    }
  });

  // 鼠标松开事件
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
};
