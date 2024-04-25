"use strict";
let tasks = [];

const GITHUB_USER = "LuciaLacort";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const taskList = document.querySelector(".task-list");
const counter = document.querySelector(".js-counter");

const getDataApi = () => {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((info) => {
      console.log(info);
      tasks = info.results;
      renderName(tasks);
      taskCounter(tasks);
    });
};
getDataApi();

function taskCounter(arr) {
  const completedTasks = tasks.filter((task) => task.completed === true);
  console.log(completedTasks);
  const notCompletedTasks = tasks.filter((task) => task.completed === false);
  counter.innerHTML = `Tienes ${arr.length} tareas. ${completedTasks.length} completadas y ${notCompletedTasks.length} por realizar`;
}

//function que me añada un id por objeto
// function addId(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].id = i;
//   }
//   return arr;
// }

// addId(tasks);
// console.log(tasks);

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
  taskCounter(tasks);
  console.log(tasks);
}

taskList.addEventListener("click", handleClick);

//Añadir tareas

const newTaskBtn = document.querySelector(".js-btn-add");
const newTaskArea = document.querySelector(".js-text-task-add");

const handleNewTask = (event) => {
  event.preventDefault();
  const inputValue = newTaskArea.value;

  //Idea: hacer un let con la variable del objeto justo anterior del array
  const newTask = {
    //id: Aquí coger el valor del ID del objeto anterior que hemos guardado en la variable let y sumarle 1
    name: inputValue, // sustituye este string vacío por el nombre de la tarea nueva
    completed: false,
  };
  console.log(newTask);
  // 3. Añade la nueva tarea al array de tareas
  tasks.push(newTask);
  // 4. Vuelve a pintar las tareas
  console.log(tasks);
  renderName(tasks);
};
newTaskBtn.addEventListener("click", handleNewTask);
