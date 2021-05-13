const nuevaTareaBtn = document.getElementById('nuevaTareaBtn');
const toDoContainer = document.getElementById('toDoContainer');
const doingContainer = document.getElementById('doingContainer');
const doneContainer = document.getElementById('doneContainer');
const tareaMsg = document.getElementById('tareaMsg');
const database = firebase.database();


enviarTarea = () => {


    if(tareaMsg.value == ''){
        alert('No ha escrito la tarea');
        return;
    }

    let tareaS = {

        tarea: tareaMsg.value,

    };
    console.log(tareaS);
    database.ref('tareas/').push().set(tareaS);

    tareaMsg.value = '';

}

database.ref('tareas/').on('value', function(data){
    toDoContainer.innerHTML = '';
    data.forEach(
        tareaS => {
            let valor = tareaS.val();
            console.log(valor.message);
            let fila = new Tarea(valor);
            toDoContainer.appendChild(fila.render());
        
    });

});

nuevaTareaBtn.addEventListener('click', enviarTarea);