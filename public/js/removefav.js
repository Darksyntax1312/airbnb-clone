let removeButton = document.querySelectorAll(".remove-btn");

removeButton.forEach((Button) => {
  Button.addEventListener("click", async () => {
    let theId = Button.dataset.id;
    const removeButtonHandler = await fetch(`/User/User-favourite/Delete/${theId}`, {
      method: "POST",
    });
    const data = await removeButtonHandler.json();
    alert(data.message);
    window.location.reload();
  });
});
