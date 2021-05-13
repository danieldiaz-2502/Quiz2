class Tarea{
    constructor(tarea){
        this.tarea = tarea
    }

    render = () => {

        let component = document.createElement('div');

        let tareaCont = document.createElement('div');
        tareaCont.className = 'tareaCont';
        tareaCont.innerHTML = this.tarea.userTarea;

        let moveUpBtn = document.createElement('button');
        moveUpBtn.className = 'moveUpBtn';
        moveUpBtn.innerHTML = (' > ');

        let borrarBtn = document.createElement('button');
        borrarBtn.className = 'borrarBtn';
        borrarBtn.innerHTML = (' X ');

        component.appendChild(tareaCont);
        component.appendChild(borrarBtn);
        component.appendChild(moveUpBtn);

        borrarBtn.addEventListener('click', () => {
            const database = firebase.database();
            database.ref('tareas/'+this.tarea).set(null);
            console.log(this.tarea.id);
            console.log(this.tarea.userTarea);
        });

        moveUpBtn.addEventListener('click', () =>{
            const database = firebase.database();
            database.ref('tareas/doing').push().set(this.tarea);
            database.ref('tareas/toDo'+this.tarea.id).set(null);
           
        });

        return component;

    }

}