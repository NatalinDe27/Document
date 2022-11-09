// Создать страницу которая через prompt будет получать строку и выводить ее в центр экрана.
//
//     Строка должна менять свой цвет на случайный каждые 10 секунд и и счезнуть через 30 секунд.


function greeting() {
    let name = prompt('Please, put your name here.');
    let result = `Hi ! Have a productive day, ${name} !`;
    return result;
}

let str = greeting();
let div = document.createElement('div');
div.innerHTML = str;
console.log(div.innerHTML)

div.style.cssText = ` display: flex;
justify-content: center;
font-size: 45px;
padding-top: calc(25% - 45px);`

document.body.append(div);

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let divs = document.querySelectorAll("div");

for (let div of divs) {
    div.style.color = `${getRandomColor()}`;
}

getRandomColor()

async function showGreeting() {
    for (let i = 0; i < 3; i++) {
        const color = new Promise((resolve) => {
            setTimeout(() => resolve(div.style.color = `${getRandomColor()}`), 10 * 1000);
        });
        await color;
    }
    div.remove();
}

showGreeting();
