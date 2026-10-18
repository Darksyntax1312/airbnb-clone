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
  const { Name, Price, Location, Rating, PhoneNumber , Details } = req.body;
  const home = new product(Name, Price, Location, Rating, PhoneNumber , Details);
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

// Homes edit page controller

const homesEdit = (req, res) => {
  res.render("admin/edit-Home", {
    title: "Homes-edit",
    homesEdit: `${req.url}`,
  });
};

exports.homesEdit = homesEdit;
exports.homeList = homeList;
exports.homePageController = homePageController;
exports.getController = getController;
exports.postController = postController;
exports.resController = resController;
