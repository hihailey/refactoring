import { count } from "console";
import { ISortable } from "./ISortable";

class Node {
    next: Node | null = null;
    data: number;
    constructor(data: number) {
      this.data = data;
    }
  }
  // Node -> 1.piece of data 2.indicate next node
  
  export class LinkedListGroup implements ISortable {
    head: Node | null = null;
  
    // Create Node out of data and attach to end of list
    add(data: number): void {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        return;
      }
  
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = node;
    }
  
    // Should return number of Nodes in List
    get length(): number {
      // implement this part yourself
        if(!this.head){
          return 0;
        }else {

        let counter = 0;
        let node: Node | null = this.head;
        while (node) {
          counter++;
          node = node.next;
       }
       return counter;
        }     
    }
  
   // Convenience method that returns a Node at a given index
    at(index: number): Node {
      if (!this.head) {
        throw new Error("Error: Index out of bounds");
      }
      let counter = 0;
      let node: Node | null = this.head;
      while (node) {
        if (counter === index) {
          return node;
        }
        counter++;
        node = node.next;
      }
      throw new Error("Error: Index out of bounds");
    }
  
    compare(leftPos: number, rightPos: number): boolean {
      // Implement this part yourself
      return this.at(leftPos).data > this.at(rightPos).data;

    }
  
    swap(leftPos: number, rightPos: number): void {
      // Implement this part yourself
      const leftNode = this.at(leftPos);
      const rightNode = this.at(rightPos);
      let tempLeft = leftNode.data;
      leftNode.data = rightNode.data;
      rightNode.data = tempLeft;
    
    }


    // let tempLeft = this.data[leftPos];
    // this.data[leftPos] = this.data[rightPos];
    // this.data[rightPos] = tempLeft

  
    print(): void {
      if (!this.head) {
        return;
      }
      let node: Node | null = this.head;
      while (node) {
        console.log(node.data);
        node = node.next;
      }
    }
  }