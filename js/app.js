const input = document.querySelector('.text-input'),
    btn = document.querySelector('.add-btn'),
    ul = document.querySelector('.list'),
    input_num = document.querySelector('.number-input')


btn.addEventListener('click', () => {
    addToDo()
    saveHTML()
})

if (localStorage.getItem('tasksHTML')) {
    ul.innerHTML = localStorage.getItem('tasksHTML')
}

input.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "Enter" :
            addToDo()
            break;
        case "Delete" :
            input.value = ""
            input_num.value = ''
            break;
    }
})


function addToDo() {
    if (input.value !== "" && input_num.value !== '') {
        const newList = `
<li class="list-group-item d-flex justify-content-between align-items-center">
<span class="d-flex align-items-center block">
<input type="checkbox" class="check-box mx-2" >
${input.value}
${input_num.value}
</span>
<button class="del-btn btn btn-danger">delete</button>
</li>`
        ul.innerHTML += newList
    }
    input.value = ''
    input_num.value = ''
    saveHTML()
}


ul.addEventListener('click', (e) => {

    if (e.target.classList.contains('del-btn')) {
        e.target.parentNode.remove()
    }

    if (e.target.classList.contains('check-box')) {
        e.target.parentNode.classList.toggle('line')
    }
    saveHTML()
})

function saveHTML() {
   localStorage.setItem('tasksHTML',ul.innerHTML)
}
