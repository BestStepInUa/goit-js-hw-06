// TASK № 4

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

/* <div id="counter">
   <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
   <button type="button" data-action="increment">+1</button>
</div> */

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment)


function decrement() {
    // console.log(`Carrent value: ${counterValue}`);
    counterValue -= 1;
    // console.log(`Value after decrimation: ${counterValue}`);
    valueEl.textContent = counterValue;
}

function increment() {
    // console.log(`Carrent value: ${counterValue}`);
    counterValue += 1;
    // console.log(`Value after incrimation: ${counterValue}`);
    valueEl.textContent = counterValue;
}