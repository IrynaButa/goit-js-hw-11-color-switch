// Есть массив цветов в hex-формате и кнопки Start и Stop.
// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет 
//цвет фона body на случайное значение из массива используя инлайн - стиль.
//При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
//Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), 
//используй функцию randomIntegerFromInterval.
// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };
const colors = [
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  "#F9193F",
 "#F19037",
"#FFE3C8",
"#cc0033",
"#bf0040",
"#b2004c",
 "#a60059",
" #990066",
];
const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'),
body: document.querySelector("body"),
}


const colorChange = {
    intervalId: null,
    isActive: false,
start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
        const min = 0;
        const max = colors.length - 1;
      const randomColor = randomIntegerFromInterval(min, max);
refs.body.style.backgroundColor = colors[randomColor];
      
    }, 1000);
    },
    
stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
  
}


refs.startBtn.addEventListener('click', () => {
    colorChange.start()
})

refs.stopBtn.addEventListener('click', () => {
    colorChange.stop()
})



const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};