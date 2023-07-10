//Implemented using Array
class Stack {
  constructor() {
    this.items = [];
  }

  //Push to the top of the stack
  push(element) {
    this.items.push(element);
  }

  //Remove from the top of the stack
  pop() {
    if (!this.items.length) {
      console.log("Stack is empty!");
    } else {
      this.items.pop();
    }
  }

  //See top most element of the stack
  peek() {
    document.write("<br/>");
    return document.write(
      `Top most element is: ${this.items[this.items.length - 1]}`
    );
  }

  printStack() {
    if (!this.items.length) {
      document.write("Stack is empty!");
    } else {
      document.write("<br/>");
      document.write("Stack is not empty: ");
      for (var i = this.items.length - 1; i >= 0; i--) {
        document.write("<br/>");
        document.write(`Value: ${this.items[i]}`);
      }
    }
  }
}
