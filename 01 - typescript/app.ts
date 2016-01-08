import { Greeter } from './greeter';
import { print } from './util';

let greeter = new Greeter("John", "Ghost");

print(
    greeter.nowYouSeeMe
);

print(greeter.greet());
let seconds = 0;
let interval = window.setInterval(() => print("Second: " + ++seconds), 1000);