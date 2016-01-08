let text = <HTMLTextAreaElement>document.getElementById('log');
export function print(line : string){    
    text.value += (line + '\n');
}