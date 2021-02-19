import { ISortable } from "./ISortable";


export class CharacterGroup implements ISortable{

    data: string;

    constructor(data:string){
        this.data = data 
    }

    get length(): number{
        return this.data.length;
    }

    swap(leftPos:number, rightPos:number):void{

        const characters = this.data.split("");
        const leftHand = characters[leftPos];
        characters[leftPos] = characters[rightPos];
        characters[rightPos] = leftHand;
        this.data = characters.join("");
       
    }
    // contains custom logic specific to swapping two elements inside an array of numbers. 

    compare(leftPos: number, rightPos: number): boolean{

        return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
    }

// Don't forget about how capital letters should be treated. (They do not hold more value than lower case letters). 

  }