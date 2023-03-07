const model = require("../models/event");

exports.index = (req, res) => {
  let events = model.find();
  res.render("./event/index", { events });
};

exports.new = (req, res) => {
  res.render("./event/new");
};

exports.about = (req, res) => {
  res.redirect("./about");
};

exports.create = (req, res) => {
  let event = req.body;
  model.save(event);
  res.redirect("/events");
};

exports.show = (req, res) => {
  let id = req.params.id;
  let event = model.findById(id);
  if (event) {
    res.render("./event/show", { event });
  }
  res.status(404).send("cannot find event with id " + id);
};

exports.edit = (req, res) => {
  let id = req.params.id;
  let event = model.findById(id);
  if (event) {
    res.render("./event/edit", { event });
  } else {
    res.status(404).send("cannot find event with id " + id);
  }
};

exports.update = (req, res, next) => {
  let event = req.body;
  let id = req.params.id;

  if (model.updateById(id, event)) {
    res.redirect("/events/" + id);
  } else {
    let err = new Error("Cannot find a event with id " + id);
    err.status = 404;
    next(arr);
  }
};

exports.delete = (req, res, next) => {
  // res.send('delete st, nextory with id ' + req.params.id);
  let id = req.params.id;
  if (model.deleteById(id)) {
    res.redirect("/events");
  } else {
    let err = new Error("Cannot find a event with id " + id);
    err.status = 404;
    next(arr);
  }
};
