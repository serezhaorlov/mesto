export default class Section {
  constructor ({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems(data) {
    data.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) { //поправил
      this._containerSelector.prepend(element)
    }


}

