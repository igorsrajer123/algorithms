class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
          ", Next: ",
          current.next ? "-->" : "NULL"
        );
        current = current.next;
      }
    }
  }

  //Add to the end of the list
  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
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
      this.head = newNode;
    }
    this.length++;
  }

  //Remove from the end of the list
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

      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }

      this.tail = current;
      this.tail.next = null;
      this.length--;
    }
  }

  removeFromStart() {
    if (!this.head) {
      console.log("No head present in the Linked List!");
      return;
    } else {
      this.head = this.head.next;
      this.length--;
    }
  }
}
