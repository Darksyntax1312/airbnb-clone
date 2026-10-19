let editButton = document.querySelectorAll(".editButton");
let theClass = document.querySelector("#A19352");
let cancelButton = document.querySelector(".btnCancel");

cancelButton.addEventListener("click", () => {
  theClass.classList.remove("overlay1");
});

editButton.forEach((button) =>
  button.addEventListener("click", async () => {
    theClass.classList.add("overlay1");
    const homeId = button.dataset.id;
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
