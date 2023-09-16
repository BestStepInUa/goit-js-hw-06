// TASK № 5

// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

/* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */

const refs = {
    input: document.getElementById('name-input'),
    spanOutput: document.getElementById('name-output')
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.spanOutput.textContent = event.currentTarget.value.trim();
}