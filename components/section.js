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

  addItem(element, end) {
    if (end = 'prepend'){
      this._containerSelector.prepend(element)
    } else if(end = 'append'){
      this._containerSelector.append(element)
    }
  }
}

