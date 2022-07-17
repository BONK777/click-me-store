// ++ Сделать страницу, с заголовком Background Color : *цвет* и кнопку. Шрифт импортировать по своему усмотрению из Google Fonts и использовать его. При нажатии на кнопку:
// ++ Менять цвет фона страницы на случайный элемент представленный в массиве. 
// ++ Этот же элемент подставлять вместо *цвет* в наш заголовок, предварительно переведя его в шрифт capitalize (первая буква каждого слова заглавная).
// ++ Под кнопкой отрисовывать кубик (150*150 пикселей) и перекрашивать его фон в выбранный случайным образом цвет.
// Обработать кейс, когда один и тот же цвет теоретически может быть выбран рандомом 2 раза подряд.
// ++ Кубики должны становиться рядом друг с другом в одну строку. Обработать кейс, когда их много и они не помещаются в одну строку.
// ++ Исходный массив: ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"]

const colors = ["red", "beige", "burlywood", "coral", "aqua", "darkcyan", "pink", "lawngreen", "fuchsia"];

const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
const main = document.getElementById('main');

const filteredColors = colors.filter(color => color !== document.body.style.backgroundColor);
const randomColor = filteredColors[Math.floor(Math.random() * colors.length)]

const addText = () => {
    txt.textContent = `Background Color : ${randomColor}`
    txt.style.textTransform = 'capitalize';
}

const changeColorMain = () => {
    main.style.backgroundColor = randomColor;
}

const createCube = () => {
    let cube = document.createElement('div');
    cube.style.cssText = `
    width: 150px;
    height: 150px;
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 5px;
    `
    document.getElementsByTagName('main')[0].appendChild(cube);
}

btn.addEventListener('click', addText) 
btn.addEventListener('click', changeColorMain) 
btn.addEventListener('click', createCube) 

// Напиши функцию, которая принимает массив, состоящий только из чисел,
// и возвращает объект со следующими ключами и значениями:
// min: минимальное число в массиве,
// max: максимальное число в массиве,
// avg: среднестатистическое значение массива.
// Примеры:
// Input: [1, 2, 3, 4]
// Output: {
// min: 1,
// max: 4,
// avg: 2.5
// }

// Input: [-4, 8, 17, -1]
// Output: {
// min:-4,
// max: 17,
// avg: 5
// }

const numbers = [1, 2, 3, 4];

const findNum = (numbers) => {

    let summ = 0;
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        summ += numbers[i];
        if (numbers[i] < min) {
            min = numbers[i]
        } else if (numbers[i] > max) {
            max = numbers[i]
        } 
    }
    return {
        min,
        max,
        avg: summ / numbers.length
    }

}

// console.log(findNum(numbers))

// 'click', () => {
// changeColor();
// }
// const randomColor = colors[Math.floor...
// addText(randomColor)
// const filteredColors = colors.filter(color => color !== document.body.style.backgroundColor);


// function getArrStatistics1(array) {
//   let min = array[0];
//   let max = min;
//   let sum = min;

//   for (let i = 1; i < array.length; i++) {
//     const el = array[i];
//     if (el > max) max = el;
//     else if (el < min) min = el;
//     sum += el;
//   }

//   return {
//     min,
//     max,
//     avg: sum / array.length,
//   };
// }    

// const getStat = (array) => ({
//   min: Math.min(...array),
//   max: Math.max(...array),
//   avg: array.reduce((acc, number) => acc += number, 0) / array.length,
// });

// const block = document.createElement('div');
// block.classList.add('block');

// document.querySelector('.box-1').appendChild(block);
// document.querySelector('.box-2').appendChild(block);

// for (let i = 1; i <= 2; i++) {
//   const block = document.createElement('div');
//   block.classList.add('block');
//   document.querySelector(`.box-${i}`).appendChild(block);
// }
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link rel="stylesheet" href="style.css">
// </head>
// <body>
//   <h2 id="title">Interaction with DOM</h2>
//   <div class="box-1">
//     <!-- <div class="block" id="block"></div> -->
//   </div>
//   <div class="box-2"></div>
//   <script src="script.js"></script>
// </body>
// </html>
// .box-1, .box-2 {
//   border: 1px solid black;
//   box-shadow: 1px 1px 5px black;
//   min-height: 100px;
//   margin: 20px;
//   padding: 10px;
// }

// .block {
//   background-color: orange;
//   width: 75px;
//   height: 75px;
// }