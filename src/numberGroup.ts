import { ISortable } from "./ISortable";


export class NumberGroup implements ISortable{

    data: number[];

    constructor(data:number[]){
        this.data = data 
    }

    get length(): number{
        return this.data.length;
    }
    //The class will contain a "get" property called length, which will return the length of the list of numbers. 

    swap(leftPos:number, rightPos:number):void{
        // let tempLeft = this.collection[i];
        // this.collection[i] = this.collection[i+1];
        // this.collection[i+1] = tempLeft;

        let tempLeft = this.data[leftPos];
        this.data[leftPos] = this.data[rightPos];
        this.data[rightPos] = tempLeft
    }
    // contains custom logic specific to swapping two elements inside an array of numbers. 

    compare(leftPos: number, rightPos: number): boolean{
        // let left = this.data[leftPos]
        // let right = this.data[rightPos]
        // if(left>right){
        //     return true;
        // }else{
        //     return false;
        // }
        return this.data[leftPos] > this.data[rightPos];
    }
    //contains custom logic specific to comparing two elements inside an array of numbers.


  }