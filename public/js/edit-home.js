let editButton = document.querySelectorAll(".editButton");
let theClass = document.querySelector("#A19352");
let cancelButton = document.querySelector(".btnCancel");
let saveButton = document.querySelector(".btnSave");
let idOfCurrentHome;

cancelButton.addEventListener("click", () => {
  console.log(idOfCurrentHome);
  theClass.classList.remove("overlay1");
});

saveButton.addEventListener("click",async () => {
const response = await fetch(`/host/homes-edit/${idOfCurrentHome}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: document.querySelector('[name="homeName"]').value,
      Price: document.querySelector('[name="Price"]').value,
      Location: document.querySelector('[name="Location"]').value,
      Rating: document.querySelector('[name="Rating"]').value,
      PhoneNumber : document.querySelector('[name="phoneNumber"]').value,
      Details: document.querySelector('[name="Details"]').value,
    }),
  });

  const result = await response.json();
  console.log(result.message)
  window.location.reload()
  theClass.classList.remove("overlay1");
});

editButton.forEach((button) =>
  button.addEventListener("click", async () => {
    idOfCurrentHome = button.dataset.id;
    theClass.classList.add("overlay1");
    let homeId = button.dataset.id;
    // alert("This is the home's id: " + homeId);

    const response = await fetch(`/host/homes-edit/${homeId}`);
    const home = await response.json();

    // console.log("Home data received:", home);
    document.querySelector('[name="homeName"]').value = home.Name;
    document.querySelector('[name="Price"]').value = home.Price;
    document.querySelector('[name="Location"]').value = home.Location;
    document.querySelector('[name="Rating"]').value = home.Rating;
    document.querySelector('[name="phoneNumber"]').value = home.PhoneNumber;
    document.querySelector('[name="Details"]').value = home.details;
  }),
);
