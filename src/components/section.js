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

  addItemPrepend(element) { //поправил
      this._containerSelector.prepend(element)
    }

  /*addItemAppend(element) {
      this._containerSelector.append(element)
  }*/

}

