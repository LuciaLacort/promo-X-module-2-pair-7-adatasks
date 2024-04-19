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
    console.log(item);
    for (const j of item.name) {
      taskList.innerHTML += j;
    }
  }
}

renderName(tasks);
