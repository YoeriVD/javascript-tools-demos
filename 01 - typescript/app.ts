import { Greeter } from './greeter';
import { print } from './util';
import { Calculator } from './calculator';

let greeter = new Greeter("John", "Ghost");

print(
    greeter.nowYouSeeMe
);

print(greeter.greet());
//let seconds = 0;
//let interval = window.setInterval(() => print("Second: " + ++seconds), 1000);

let calculator = new Calculator("XYZ123");
print(calculator.toString())

print('the sume of 3 and 4 is: ' + calculator.sum(3, 4))