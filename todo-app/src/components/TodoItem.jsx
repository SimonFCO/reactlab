/* This code will handle displaying all the items onto the screen*/
class todoItem {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.completed = false;
  }
}
