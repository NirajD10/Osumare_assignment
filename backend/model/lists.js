module.exports = class TODOLists {
  static instance = new TODOLists();
  lists = [];

  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }

  setData(tasks) {
    this.lists = [...tasks];
  }

  getAlllists() {
    return this.lists;
  }

  getSingleLists(id) {
    const singleLists = this.lists.filter((item) => item.id === id);
    return singleLists;
  }

  createLists() {
    this.lists.push({
      id: this.id,
      title: this.title,
      description: this.description,
    });
  }

  updateSingleLists(id, new_title, new_description) {
    for (let singleList of this.lists) {
      if (singleList.id === id) {
        singleList.title = new_title;
        singleList.description = new_description;
      }
    }
  }

  deleteSingleLists(id) {
    this.lists = this.lists.filter((item) => item.id !== id);
  }
};
