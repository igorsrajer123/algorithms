class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //Traversing the Linked list takes O(N) time
  printList() {
    if (!this.head) {
      document.write("The list is empty!");
    } else {
      document.write("The list is not empty: ");
      let current = this.head;

      while (current) {
        document.write("<br/>");
        document.write(
          "Value: ",
          current.value,
          ", Previous value: ",
          current.prev ? `${current.prev.value}` : "NULL",
          ", Next value: ",
          current.next ? `${current.next.value}` : "NULL"
        );
        current = current.next;
      }
    }
  }

  //Add to the end of list
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  //Add to the start of the list
  unshift(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  //Refactor this function
  pop() {
    if (!this.head) {
      console.log("No head present in the Linked List!");
      return;
    } else {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return;
      }

      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length--;
    }
  }

  //Refactor this function
  removeFromStart() {
    if (!this.head) {
      console.log("No head present in the Linked List!");
      return;
    } else {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return;
      }

      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
  }
}
