
function handleSubmit (event) {
    event.prevenDefault()
}

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

window.onload = function () {
    const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
    let buttonSubmit= document.querySelector('#submit-btn');
    buttonSubmit.addEventListener('click, handleSubmit')
}
    



