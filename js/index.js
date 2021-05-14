const nuevaTareaBtn = document.getElementById('nuevaTareaBtn');
const toDoList = document.getElementById('toDoList');
const doingList = document.getElementById('doingList');
const doneList = document.getElementById('doneList');
const tareaMsg = document.getElementById('tareaMsg');
const database = firebase.database();


enviarTarea = () => {

    //en caso de que el usuario no haya llenado la nueva tarea que quiere agregar
    if(tareaMsg.value == ''){
        alert('No ha escrito la tarea');
        return;
    }

    let reference = database.ref('toDo').push();
// se crea el objeto de tarea
    let tarea = {
        id: reference.key,
        userTarea: tareaMsg.value,
    };
    console.log(tarea);
    database.ref('toDo').push().set(tarea);

    tareaMsg.value = '';

}

nuevaTareaBtn.addEventListener('click', enviarTarea);

//para mostrar lo que está en toDo
database.ref('toDo').on('value', function(data){
    toDoList.innerHTML = '';
    data.forEach(
        tarea => {
            let valor = tarea.val();
            let fila = new Tarea(valor);
            toDoList.appendChild(fila.renderToDo());
        
    });
});

//para mostrar lo que está en doing

database.ref('doing').on('value', function(data){
    doingList.innerHTML = '';
    data.forEach(
        tarea => {
            let valor = tarea.val();
            let fila = new Tarea(valor);
            doingList.appendChild(fila.renderDoing());
        
    });
});

//para mostrar lo que está en done

database.ref('done').on('value', function(data){
    doneList.innerHTML = '';
    data.forEach(
        tarea => {
            let valor = tarea.val();
            let fila = new Tarea(valor);
            doneList.appendChild(fila.renderDone());
        
    });
});