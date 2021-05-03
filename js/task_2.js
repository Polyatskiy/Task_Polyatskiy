// Задание 2
// Написать маленькое приложение. Пользователь вводит текст в поле ввода. После нажатия на кнопку Apply, над полем ввода должны появиться блоки со словами из введенного текста. При нажатии на любое слово слово удаляется
// Использовать для решения задачи чистый js, без использования библиотек

const wordProcessor = function () {
  const messageOutput = document.querySelector('.message-output');
  const inputArea = document.querySelector('.input-area textarea');
  const clearButton = document.querySelector('.input-area button:last-child');
  const applyButton = document.querySelector('.input-area button:first-of-type');

  applyButton.onclick = function () {
    if (messageOutput.children[1].innerText == '' && inputArea.value != '') {
      messageOutput.children[0].classList.add('hidden');
      clearButton.classList.remove('hidden');

      let [...words] = inputArea.value.split(' ');

      for (let word of words) {
        let span = document.createElement('span');
        span.innerText = word;
        span.onclick = deleteWord;
        messageOutput.children[1].append(span);
      }
    }
  };

  const deleteWord = function (event) {
    let target = event.target;
    target.outerHTML = '';
  };

  const clearInput = function () {
    messageOutput.children[0].classList.remove('hidden');
    messageOutput.children[1].innerText = '';
    clearButton.classList.add('hidden');
    inputArea.value = '';
  };

  clearButton.onclick = clearInput;
};

wordProcessor();
