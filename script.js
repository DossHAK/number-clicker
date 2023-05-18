let boxes = document.querySelectorAll('.box');

for (const box of boxes) {
        box.addEventListener('click', () => {
            let num = parseInt(box.innerText);
            box.innerText = --num;
            if (num == 0) {
                event.target.remove();
            }    
    
        });
}