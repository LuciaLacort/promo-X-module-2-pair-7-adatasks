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
      taskList.innerHTML += `<li class="tachado" id="${item.id}"><input  type="checkbox" checked>${item.name} </li>`;
    } else {
      taskList.innerHTML += `<li id="${item.id}"><input  type="checkbox">${item.name} </li>`;
      //console.log(item.name);
    }
  }
}
renderName(tasks);

const paraElConsole = "Dentro de toTheObject: ";

//function para acceder a un objeto teniendo su id + cambiar la propiedad completed
function toTheObject(arr, value) {
  console.log(paraElConsole + arr[3].id);
  console.log(paraElConsole + value);
  console.log(arr);
  const indexTask = arr.findIndex((task) => task.id === parseInt(value)); //faltaba el parseInt, porque el value viene del html
  //sin llaves haría falta return
  console.log(indexTask);
  arr[indexTask].completed = !arr[indexTask].completed;
}

function handleClick(event) {
  event.target;
  const eventValue = event.target.id; //OJO! El tipo de dato es string y no numérico

  console.log(eventValue);
  toTheObject(tasks, eventValue);
  renderName(tasks);
}

taskList.addEventListener("click", handleClick);
