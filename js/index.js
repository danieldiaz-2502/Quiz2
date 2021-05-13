const nuevaTareaBtn = document.getElementById('nuevaTareaBtn');
const toDoList = document.getElementById('toDoList');
const doingList = document.getElementById('doingList');
const doneList = document.getElementById('doneList');
const tareaMsg = document.getElementById('tareaMsg');
const database = firebase.database();


enviarTarea = () => {


    if(tareaMsg.value == ''){
        alert('No ha escrito la tarea');
        return;
    }

    let reference = database.ref('tareas/').push();

    let tarea = {
        id: reference.key,
        userTarea: tareaMsg.value,
    };
    console.log(tarea);
    database.ref('tareas/toDo').push().set(tarea);

    tareaMsg.value = '';

}

database.ref('tareas/toDo').on('value', function(data){
    toDoList.innerHTML = '';
    data.forEach(
        tarea => {
            let valor = tarea.val();
            let fila = new Tarea(valor);
            toDoList.appendChild(fila.render());
        
    });
});

database.ref('tareas/doing').on('value', function(data){
    doingList.innerHTML = '';
    data.forEach(
        tarea => {
            let valor = tarea.val();
            let fila = new Tarea(valor);
            doingList.appendChild(fila.render());
        
    });
});

nuevaTareaBtn.addEventListener('click', enviarTarea);