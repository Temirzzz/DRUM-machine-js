window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [ // получаем цвета из css
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ]

    pads.forEach((pad, index) => {                 // 2 аргумента (pad-перебираеые элементы массива, index-текущий элемент массива)
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;         // метод currentTime со знвчением 0 позволяет сразу перезаписывать звук. Без него звук не сработает второй раз пока не полностью не проиграется первый
            sounds[index].play(); 
            //console.log(sounds[index]);

            createBubbles (index);
        })
    })
    
    const createBubbles = (index) => {              // передаем текущий индекс из forEach
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jamp 1s ease";
        bubble.addEventListener('animationend', () => { // удалем bubble из DOM после выполнения анимации
            visual.removeChild(bubble);
        })
    }
})