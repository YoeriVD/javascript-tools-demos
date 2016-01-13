export class Calculator{
    
    constructor(private serial : string){
        
    }
    
    toString(){
        return this.serial;
    }
    
    sum(a : number, b : number){
        return (a + b);
    }
}