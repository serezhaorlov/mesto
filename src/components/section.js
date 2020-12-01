export default class Section {
  constructor ({ data, renderer }, containerSelector) {
    this._initialCards = data;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._initialCards.forEach(item => {
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

