document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addTaskButton")
    .addEventListener("click", function () {
      this.style.display = "none";

      document.getElementById("taskForm").style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("tags");

  button.addEventListener("click", function () {
    const image = document.getElementById("tags__icon");
    image.src = "./assets/Frame 1000005506.svg";
    document.getElementById("addTags").style.display = "flex";
  });
});
