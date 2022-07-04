var color;

function colores(elementId){
    ele = document.querySelector(elementId);
    ele.style.backgroundColor = color
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        /* Cambiar a color 1 */
        color = "yellow"
        alert(color)
    } else if (event.key === 's') {
        /* Cambiar a color 2 */
        color = "orange"
    }else if (event.key === 'd') {
        /* Cambiar a color 3 */
        color = "red"
    }
})


