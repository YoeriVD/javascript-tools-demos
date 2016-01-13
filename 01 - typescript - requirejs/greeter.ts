export class Greeter {
    constructor(public nowYouSeeMe : string, private nowYouDont : string){
        
    }
    
    greet(){
        return this.nowYouSeeMe + " " + this.nowYouDont;
    }
}