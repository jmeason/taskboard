// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
//initialize as empty array and 1 respectively if not present
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

// let todos= [
//     { task: '', completed: true },
//     { task: '', completed: false },
//     { task: '', completed: true },
//     { task: '', completed: false },
// ]
// Todo: create a function to generate a unique task id
function generateTaskId() {
    $(newTaskId).click(generateTaskId)
    return nextId++;
    

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    $( function() {
        $( "#draggable" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
      } );
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    $(".add").click(handleAddTask)
 const now = dayjs("#task-due-date");
    const deadline = dayjs(task.deadline);
    let cardColor = "bg-light"; //green
  
    if (deadline.isBefore(now)) {
      cardColor = "bg-danger"; //red
    } else if (deadline.diff(now, 'day') <= 3) {
      cardColor = "bg-warning"; //yellow
    }
  
    return `
      <div class="card task-card my-3 ${cardColor}" data-task-id="${task.id}">
        <div class="card-header h4">${task.title}</div>
        <div class="card-body">
          <p class="card-text">${task.description}</p>
          <p class="card-text">Due: ${task.deadline}</p>
          <button class="btn btn-danger delete" data-task-id="${task.id}">Delete</button>
        </div>
      </div>
    `;
  }


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    $(".delete").click(handleDeleteTask)
    event.preventDefault();

  const title = $("#task-title").val();
  const description = $("#task-description").val();
  const deadline = $("#task-deadline").val();

  if (title && description && deadline) {
    const newTask = {
      id: generateTaskId(),
      title,
      description,
      deadline,
      status: "todo"
    };

    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();

    $("#formModal").modal("hide");
  }
}


// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
   

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
$( function() {
    $( "#datepicker" ).datepicker();
  } );
