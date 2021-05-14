class Tarea{
    constructor(tarea){
        this.tarea = tarea
    }

    renderToDo = () => {

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
            //debería borrar de toDo/
            const database = firebase.database();
            database.ref('toDo/'+this.tarea.id).set(null);
            console.log(this.tarea.id);
            console.log(this.tarea.userTarea);
        });

        moveUpBtn.addEventListener('click', () =>{

            let reference = database.ref('doing').push();

            let tarea = {
                id: reference.key,
                userTarea: this.tarea.userTarea,
            };
            reference.set(tarea);

            //borra en firebase
            const databasee = firebase.database();
            databasee.ref('toDo/'+this.tarea.id).set(null);
           
        });

        return component;

    }

    renderDoing = () => {

        let component = document.createElement('div');

        let tareaCont = document.createElement('div');
        tareaCont.className = 'tareaCont';
        tareaCont.innerHTML = this.tarea.userTarea;

        let moveUpBtn = document.createElement('button');
        moveUpBtn.className = 'moveUpBtn';
        moveUpBtn.innerHTML = (' > ');
        //se añade el boton de regresar
        let moveDownBtn = document.createElement('button');
        moveDownBtn.className = 'moveDownBtn';
        moveDownBtn.innerHTML = (' < ');

        let borrarBtn = document.createElement('button');
        borrarBtn.className = 'borrarBtn';
        borrarBtn.innerHTML = (' X ');

        component.appendChild(tareaCont);
        component.appendChild(moveDownBtn);
        component.appendChild(borrarBtn);
        component.appendChild(moveUpBtn);

        borrarBtn.addEventListener('click', () => {
            //debería borrar de doing/
            const database = firebase.database();
            database.ref('doing/'+this.tarea.id).set(null);
            console.log(this.tarea.id);
            console.log(this.tarea.userTarea);
        });

        moveUpBtn.addEventListener('click', () =>{

            let reference = database.ref('done').push();

            let tarea = {
                id: reference.key,
                userTarea: this.tarea.userTarea,
            };
            reference.set(tarea);

            //borra en firebase
            const databasee = firebase.database();
            databasee.ref('doing/'+this.tarea.id).set(null);
           
        });

        moveDownBtn.addEventListener('click', () =>{
            //para regresar la tarea a toDo/
            let reference = database.ref('toDo').push();

            let tarea = {
                id: reference.key,
                userTarea: this.tarea.userTarea,
            };
            reference.set(tarea);

            //borra en firebase
            const databasee = firebase.database();
            databasee.ref('doing/'+this.tarea.id).set(null);
           
        });

        return component;

    }

renderDone = () => {

    let component = document.createElement('div');

    let tareaCont = document.createElement('div');
    tareaCont.className = 'tareaCont';
    tareaCont.innerHTML = this.tarea.userTarea;

    //se deja sólo el botón de regresar
    let moveDownBtn = document.createElement('button');
    moveDownBtn.className = 'moveDownBtn';
    moveDownBtn.innerHTML = (' < ');

    let borrarBtn = document.createElement('button');
    borrarBtn.className = 'borrarBtn';
    borrarBtn.innerHTML = (' X ');

    component.appendChild(tareaCont);
    component.appendChild(moveDownBtn);
    component.appendChild(borrarBtn);

    borrarBtn.addEventListener('click', () => {
        //debería borrar de done/
        const database = firebase.database();
        database.ref('done/'+this.tarea.id).set(null);
        console.log(this.tarea.id);
        console.log(this.tarea.userTarea);
    });

    moveDownBtn.addEventListener('click', () =>{
        //para regresar la tarea a toDo/
        let reference = database.ref('doing').push();

        let tarea = {
            id: reference.key,
            userTarea: this.tarea.userTarea,
        };
        reference.set(tarea);

        //borra en firebase
        const databasee = firebase.database();
        databasee.ref('done/'+this.tarea.id).set(null);
       
    });

    return component;

}

}