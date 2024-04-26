"use strict";
let tasks = [];

const GITHUB_USER = "LuciaLacort";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

const taskList = document.querySelector(".task-list");
const counter = document.querySelector(".js-counter");

// const init = () => {
//     //Guardar lista de tareas en Local Storage
//     const tasksLocalStorage = localStorage.getItem("tareas");

//     if (tasksLocalStorage !== null) {
//       console.log("hay datos!");
//       const tasksLocalArray = JSON.parse(tasksLocalStorage);
//       console.log(tasksLocalArray);
//       const tasks = tasksLocalArray;

//     } else {
//       //sino existe el listado de tareas en el local storage
//       // pide los datos al servidor
//       fetch(SERVER_URL)
//         .then((response) => response.json())
//         .then((info) => {
//             console.log(info);
//             tasks = info.results;
//             localStorage.setItem("tareas", JSON.stringify(tasks));

//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   };

const getDataApi = () => {
  const tasksLocalStorage = localStorage.getItem("tareas");

  if (tasksLocalStorage !== null) {
    console.log("hay datos!");
    const tasksLocalArray = JSON.parse(tasksLocalStorage);
    console.log(tasksLocalArray);
    tasks = tasksLocalArray;
    renderName(tasks);
    taskCounter(tasks);
  } else {
    //sino existe el listado de tareas en el local storage
    // pide los datos al servidor
    fetch(SERVER_URL)
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        tasks = info.results;
        localStorage.setItem("tareas", JSON.stringify(tasks));
        renderName(tasks);
        taskCounter(tasks);
      });
  }
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
      taskList.innerHTML += `<li class="tachado"><input id="${item.id}" type="checkbox" checked>${item.name} </li>`;
    } else {
      taskList.innerHTML += `<li><input id="${item.id}" type="checkbox">${item.name} </li>`;
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
  // const uniqueId = uuidv4(); //Esto nos sirve si la base de datos no genera el ID y queremos generarlo nosotras
  //Idea: hacer un let con la variable del objeto justo anterior del array
  const newTask = {
    //ID
    // id: uniqueId, //Recogemos el ID generado
    name: inputValue, // sustituye este string vacío por el nombre de la tarea nueva
    completed: false,
  };
  console.log(newTask);
  // 3. Añade la nueva tarea al array de tareas

  fetch(`https://dev.adalab.es/api/todo/${GITHUB_USER}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newTask),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      tasks.push(newTask); //Añade la nueva tarea al array
      console.log(tasks);
      renderName(tasks);
      localStorage.setItem("tareas", JSON.stringify(tasks)); //actualiza el 
    } else {
      console.log('Error: no se han enviado los datos')
    }
  });


};
newTaskBtn.addEventListener("click", handleNewTask);

//cuando carga la página
