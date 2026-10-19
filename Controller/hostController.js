const product = require("../Model/Datastorage");

const homePageController = (req, res) => {
  // console.log(req.url);
  res.render("admin/hostHome", {
    title: "Host page",
    message: "Welcome Mayank 🏡",
    homeLink: `${req.url}`,
  });
};

const getController = (req, res) => {
  res.render("admin/hostPage", {
    title: "Host page - addhome",
    formLink: req.url,
  });
};

const postController = (req, res) => {
  const { Name, Price, Location, Rating, PhoneNumber, Details } = req.body;
  const home = new product(Name, Price, Location, Rating, PhoneNumber, Details);
  home.save();
  res.redirect("/host/homes");
};

const resController = (req, res, next) => {
  product.fetchAll((err, items) => {
    if (err) {
      return next(err);
    }
    res.render("admin/homesData", {
      items: items,
      title: "Homes",
      resLink: req.url,
    });
  });
};

// Home list page controller

const homeList = (req, res) => {
  res.render("admin/Home-list", { title: "Home-list", homeList: `${req.url}` });
};

// Homes edit get request controller








const homesEdit = (req, res, next) => {
  // console.log("Get request is receiving");
  let theId = req.params.homeId;

  product.fetchAll((err, items) => {
    // console.log("Data fetching")
    if (err) {
      return next(err);
    }

    let filteredHomes = items.find((item) => String(item.id) === String(theId));
    if(!filteredHomes){
      return res.status(404).json({ message: "Home not found", theId });
    }
// console.log("Data fetched")
    res.json(filteredHomes);
  });
};









// res.render("admin/edit-Home", {
//   title: "Homes-edit",
// });

// const homesEdit = (req, res) => {
//   console.log("Get request is receiving");
//   console.log(req.params.homeId);

//   res.render("admin/edit-Home", {
//     title: "Homes-edit",
//     homeId: req.params.homeId,
//   });
// };

// Homes edit post request controller

const homesPostEdit = (req, res) => {
  console.log("Post request is received");
  console.log(req.params.homeId);
  // res.redirect("/host/homes-edit")
  res.render("admin/edit-Home", {
    title: "Homes-edit",
    homesEdit: `${req.url}`,
  });
};

exports.homesPostEdit = homesPostEdit;
exports.homesEdit = homesEdit;
exports.homeList = homeList;
exports.homePageController = homePageController;
exports.getController = getController;
exports.postController = postController;
exports.resController = resController;
