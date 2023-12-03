document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("add");
  const popupForm = document.getElementById("popup-form");
  const closeFormButton = document.getElementById("closeForm");
  const addTaskFormButton = document.getElementById("addTask");

  addTaskButton.addEventListener("click", function () {
    popupForm.style.display = "block";
  });

  closeFormButton.addEventListener("click", function () {
    popupForm.style.display = "none";
  });

  addTaskFormButton.addEventListener("click", function () {
    // Get values from the form
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskTime = document.getElementById("taskTime").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskAssignedTo = document.getElementById("taskAssignedTo").value;

    // Create a new task element
    const newTask = document.createElement("div");
    newTask.className = "Box";

    newTask.innerHTML = `
      <input type="checkbox" id="check" onchange="taskCompleted(this)">
      <div id="taskholder">
        <label for="check">Task: ${taskTitle}</label>
        <br><label for="check">Time: ${taskTime}</label>
        <br><label for="check">Date: ${taskDate}</label>
      </div>
    `;

    // Append the new task to the Box div
    document.querySelector(".holder").appendChild(newTask);

    // Close the popup form
    popupForm.style.display = "none";
  });

  // Function to mark a task as completed and remove it
  window.taskCompleted = function (checkbox) {
    const taskContainer = checkbox.closest(".Box");

    if (checkbox.checked) {
      // Mark the task as completed
      taskContainer.style.background = "#d62929";
    } else {
      // Unmark the task
      taskContainer.style.background = "radial-gradient(31.99% 57.82% at 60.03% 45.64%, rgba(122, 122, 122, 0.37) 0%, rgba(122, 122, 122, 0.52) 100%)";
    }

    // Remove the task after a short delay (you can adjust the delay as needed)
    setTimeout(() => {
      taskContainer.remove();
    }, 750);
  };
});
