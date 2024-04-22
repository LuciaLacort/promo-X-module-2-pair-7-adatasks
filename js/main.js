"use strict";
const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true,
  },
  {
    name: "Comprar pilas",
    completed: true,
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true,
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

const taskList = document.querySelector(".task-list");

//función que pinte el name en la pantalla

function renderName(arr) {
  for (const item of arr) {
    if (item.completed === true){
      taskList.innerHTML += `<li class="tachado"><input type="checkbox" checked>${item.name} </li>`;

        } else{ taskList.innerHTML += `<li><input type="checkbox">${item.name} </li>`;
      console.log(item.name);
    }
  }
}
renderName(tasks);



//Esto lo he dejado comentado porque he empezado a divagar probando cosas de la últimna tarea de hoy, pero prefiero que lo veamos juntas el lunes :)

// const completed = document.querySelector('.completed');



function handleClick(event){
  event.target;
  const eventValue = event.target;
  const indexTask = tasks.findIndex((task) => {
    task === eventValue
  });

}

taskList.addEventListener('click', handleClick);






