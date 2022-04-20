class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null, size = 0) {
    this.head = head;
    this.size = size;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertAt(position, data) {
    let current = this.head;
    let size = this.size;
    let newNode = new Node(data);
    while (position - 1 !== size) {
      current = current.next;
      size++;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  insertLast(data) {
    let current = this.head;
    let newNode = new Node(data);
    if (!current) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const LL = new LinkedList();
LL.insertFirst(100);
LL.insertFirst(200);

LL.insertAt(1, 900);

LL.insertLast(500);

LL.printList();
