const dialogs = document.querySelectorAll("dialog");
const showButtons = document.querySelectorAll("dialog + button");
const closeButtons = document.querySelectorAll("dialog div button");

// "Show the dialog" button opens the dialog modal
showButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      dialogs[index].showModal();
      document.documentElement.classList.add("modal-open")
    });
})

// "Close" button closes the dialog
closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      dialogs[index].close();
      document.documentElement.classList.remove("modal-open")
    });
})