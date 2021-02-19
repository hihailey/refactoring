export interface ISortable {

  length: number
  compare(leftPos:number, rightPos: number):boolean
  swap(leftPos:number, rightPos: number):void

}

//interface는 constructor 필요없음 

// - A length property that returns a number (technically we don't *have to* have this, but it will make our implementation easier when we get to the LinkedListGroup class).
// - A compare method that takes in a left and right index, and returns a boolean
// - A swap method that takes in a left and right index.