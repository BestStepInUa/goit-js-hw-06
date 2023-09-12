// TASK № 7

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

/* <input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const fontSizeControlInputRef = document.getElementById('font-size-control');
const textspanOutputRef = document.getElementById('text');
textspanOutputRef.style.fontSize = `${fontSizeControlInputRef.value}px`;

fontSizeControlInputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    textspanOutputRef.style.fontSize = `${event.currentTarget.value}px`;
}