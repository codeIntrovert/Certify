array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// infinite loop (for)

/**
 * for(let i = 1; i > 0; i++) {
 * console.log(i);
 * }
 */


// infinite loop (while)
/**
 * while(true){
 * console.log('Hello');}   
 * */

// while loop

while (array.length > 0) {
    console.log(array.pop());
}
// do while loop

do {
    console.log('Hello');
} while (true);