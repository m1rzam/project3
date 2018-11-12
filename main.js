//1. Выведите столбец чисел от 1 до 100. Через while и for
function task1() {
    var counter = 0;
    // while (counter < 100) {
    //     document.write(counter+1 + '<br/>');
    //     counter++;
    // }
    
    do {
        document.write(counter+1 + '<br/>');
        counter++;
    } while (counter < 100);
    
    for (var i=0; i<100; i++) {
        document.write(i+1 + '<br/>');
    }
}


//2. Выведите столбец чисел от 15 до 35. Через while и for  
function task2() {
    var counter2 = 15;
    while (counter2 <= 35) {
        document.write(counter2 + '<br/>');
        counter2++;
    }
    for (var i=15; i<=35; i++) {
        document.write(i + '<br/>');
    }
}
//3. циклом найдите сумму чисел от 1 до 50.
function task3() {
    var sum = 0;
    for (var i=1; i<=50; i++) {
        sum += i;
        if (i==50) {document.write(i); break;}
        document.write(i + '+');
    }
    document.write('=' + sum + '<br/>');
}