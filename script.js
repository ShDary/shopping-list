/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector('#input');
const item = document.querySelector('.items');

input.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const messageItem = input.value;

        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.textContent = messageItem;

        if(messageItem != '') {
            item.append(newItem);
        }

        input.value = '';

        newItem.addEventListener("click", function() {
            newItem.classList.toggle("done")
        });
        
    }
})




/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
