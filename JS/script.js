const Num = prompt("Введите число");
let result , divider;

if (Num < 2) {
    console.log(sanitise('NotANumber'));
}

for (i = 2; i < Num; i++) {
    result = Num % i;
    if (result === 0) {
        divider = i;
        console.log(i);
    } 
} 