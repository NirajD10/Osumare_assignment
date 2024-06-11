const TODOLists = require("../model/lists");
const uuid = require("nano-uuid");
const { validationResult } = require("express-validator");

exports.getAllTasks = (req, res, next) => {
  const Todolists = TODOLists.instance;
  const lists = Todolists.getAlllists();
  res.status(200).json({ lists });
};

exports.getSingleTasks = (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      const error = new Error("Missing ID");
      error.statusCode = 404;
      throw error;
    }

    const Todolists = TODOLists.instance;
    const singleLists = Todolists.getSingleLists(id);
    if (singleLists.length === 0) {
      return res.status(400).json({ message: "Not Found on lists" });
    }

    res.status(200).json({ ...singleLists[0] });
  } catch (error) {
    next(error);
  }
};

exports.postTasks = (req, res, next) => {
  const { title, description } = req.body;

  const validationerror = validationResult(req);
  try {
    if (!validationerror.isEmpty()) {
      const error = new Error("Title or Description Required");
      error.statusCode = 400;
      error.data = validationerror.array();
      throw error;
    }

    if (!title | !description) {
      const error = new Error("Title or Description Required");
      error.statusCode = 400;
      throw error;
    }

    const newId = uuid.v4();

    const Todolists = new TODOLists(newId, title, description);
    Todolists.createLists();
    req.session.lists = [...req.session.lists, ...Todolists.lists];

    res.status(201).json({ message: "Sucessfully created. " + newId });
  } catch (error) {
    next(error);
  }
};

exports.deleteSingleTasks = (req, res, next) => {
  const { id } = req.params;

  try {
    if (!id) {
      const error = new Error("Missing ID");
      error.statusCode = 404;
      throw error;
    }

    const checkExistsElement = req.session.lists.findIndex(
      (index) => index.id === id
    );

    if (checkExistsElement === -1) {
      const error = new Error("Task Not found to delete one");
      error.statusCode = 404;
      throw error;
    } else {
      const Todolists = TODOLists.instance;
      Todolists.deleteSingleLists(id);
      req.session.lists = [...Todolists.lists];
    }

    res.status(201).json({ message: "Succesfully deleted." });
  } catch (error) {
    next(error);
  }
};

exports.updateTasks = (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const validationerror = validationResult(req);

  try {
    if (!validationerror.isEmpty()) {
      const error = new Error("Title or Description Required");
      error.statusCode = 400;
      error.data = validationerror.array();
      throw error;
    }
    
    if (!id) {
      const error = new Error("Missing ID");
      error.statusCode = 404;
      throw error;
    }

    if (!title | !description) {
      const error = new Error("Title or Description Required");
      error.statusCode = 400;
      throw error;
    }

    const checkExistsElement = req.session.lists.findIndex(
      (index) => index.id === id
    );

    if (checkExistsElement === -1) {
      const error = new Error("Task Not found to update one");
      error.statusCode = 404;
      throw error;
    } else {
      const Todolists = TODOLists.instance;
      Todolists.updateSingleLists(id, title, description);
      req.session.lists = [...Todolists.lists];
    }

    res.status(201).json({ message: "Succesfully updated." });
  } catch (error) {
    next(error);
  }
};
