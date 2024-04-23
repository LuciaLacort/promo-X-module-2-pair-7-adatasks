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

//function que me añada un id por objeto
function addId(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].id = i;
  }
  return arr;
}

addId(tasks);
console.log(tasks);

//función que pinte el name en la pantalla

function renderName(arr) {
  taskList.innerHTML = "";
  for (const item of arr) {
    if (item.completed === true) {
      //he puesto el id= en el li pero a lo mejor va en el input
      taskList.innerHTML += `<li class="tachado" id="${item.id}"><input type="checkbox" checked>${item.name} </li>`;
    } else {
      taskList.innerHTML += `<li id="${item.id}"><input type="checkbox">${item.name} </li>`;
      //console.log(item.name);
    }
  }
}
renderName(tasks);

const paraElConsole = "Dentro de toTheObject: ";
//function para acceder a un objeto teniendo su id
function toTheObject(arr, value) {
  //console.log(paraElConsole + arr[0].id);
  //console.log(paraElConsole + value);
  for (let i = 0; i < arr.length; i++){
    if(value === arr[i].id){
        console.log('en el if');
        arr[i].completed = true;
        console.log(arr[i].completed);
        //renderName(tasks);
    }
  }
//   for (const cosa of arr) {
//     console.log(cosa.id);
//     console.log(value);
//     if (value === cosa.id) {
//       cosa.completed = true;
//     }
//   }
}

//Esto lo he dejado comentado porque he empezado a divagar probando cosas de la últimna tarea de hoy, pero prefiero que lo veamos juntas el lunes :)

// const completed = document.querySelector('.completed');

function handleClick(event) {
  event.target;
  const eventValue = event.target;
  const valueId = eventValue.id;
  console.log(eventValue.id);
  toTheObject(tasks, valueId);
  renderName(tasks);
  //   const indexTask = tasks.findIndex((task) => {
  //     task === eventValue;
  // });
}

taskList.addEventListener("click", handleClick);
