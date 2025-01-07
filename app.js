const list = document.querySelector('.list')
const counter = document.querySelector('.counter')
const btn = document.getElementById('btn')
const text = document.getElementById('text')

document.addEventListener('DOMContentLoaded', function(){
    const todo = JSON.parse(localStorage.getItem('todo')) || []
    todo.forEach(addElement)
    updatecount()
})

btn.addEventListener('click', function(){
    const tasks = text.value.trim()
    if(!tasks){
        return
    }
    addElement(tasks)
    savetodo(tasks)
    text.value =''
    updatecount()
})

function addElement(tasks){
    const li = document.createElement('li')
    li.className = 'item'
    li.innerHTML = `${tasks} 
    <button class ="removetask">
    <img src="./images/Group 2.png">
    </button>`
    list.appendChild(li)
}

function savetodo(tasks){
    const todo =  JSON.parse(localStorage.getItem('todo')) || []
    todo.push(tasks)
    localStorage.setItem('todo', JSON.stringify(todo))
}

list.addEventListener('click', function(e){
    if(e.target && e.target.closest('.removetask')){
        const li = e.target.closest('li')
        const tasks = li.firstChild.textContent.trim()
        removetask(li, tasks)
    }
})

function removetask (li, tasks){
    li.remove()
    const todo =  JSON.parse(localStorage.getItem('todo'))
    const update = todo.filter(value => value != tasks)
    localStorage.setItem('todo', JSON.stringify(update))
    updatecount()
}

function updatecount(){
    const count = list.children.length
    if(count > 0){
        counter.textContent = `Task to do - ${count}`
        counter.style.display = 'block'
    }
    else{
        counter.style.display = 'none'
    }
}

var loader = document.querySelector(".gif")

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disppear");
}