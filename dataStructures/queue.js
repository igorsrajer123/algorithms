//Implemented using Linked List
class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(element) {
    let newNode = new QNode(element);

    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.length) {
      console.log("Queue is empty already!");
    } else {
      if (this.first === this.last) {
        this.last = null;
      }
      this.first = this.first.next;
      this.size--;
    }
  }

  peek() {
    document.write("<br/>");
    return document.write(`${this.first.value}`);
  }

  printQueue() {
    if (!this.length) {
      document.write("Queue is empty!");
    } else {
      document.write("<br/>");
      document.write("Queue is not empty: ");
      document.write("<br/>");

      let current = this.first;
      while (current) {
        document.write(`Value: ${current.value} -> `);
        current = current.next;
      }
    }
  }
}
