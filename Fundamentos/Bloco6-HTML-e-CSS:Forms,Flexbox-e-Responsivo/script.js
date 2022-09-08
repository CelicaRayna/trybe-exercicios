
function handleSubmit (event) {
    event.prevenDefault()
}

window.onload = function () {
    let buttonSubmit= document.querySelector('button');
    buttonSubmit.addEventListener('click, handleSubmit')
}
    



