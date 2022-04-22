class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(head = null, tail = null, size = 0) {
    this.head = head;
    this.tail = tail;
    this.size = size;
  }

  insertLast(data) {
    let newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.size++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.size++;
    }
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const DLL = new DoublyLinkedList();

DLL.insertLast(20);
DLL.insertLast(16);
DLL.insertLast(10);

console.log(DLL);
// DLL.printList();
