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
    // for (const j of item.name) {
      taskList.innerHTML += `<li class="completed"><input type="checkbox">${item.name}" </li>`;
      console.log(item.name);
  
    }
  }

renderName(tasks);



//Esto lo he dejado comentado porque he empezado a divagar probando cosas de la últimna tarea de hoy, pero prefiero que lo veamos juntas el lunes :)

// const completed = document.querySelector('.completed');
// const checkedItem = document.querySelector('.check');


//   for (const item of tasks){
//   if (item.completed === true){
//     completed.classList.add('tachado');
//   }
// }





