let button = document.getElementById('btn');
// list of mouse events :
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

button.addEventListener('dblclick', (e) => {
    document.querySelector('.box').innerHTML = 'double click on the button <b>enjoy your click!</b>';
});

button.addEventListener('contextmenu', (e) => {
     alert('dont right click on the button!');
});
document.addEventListener('keydown', (e) => {
    console.log( e ,e.key,e.keyCode,e.code);
})