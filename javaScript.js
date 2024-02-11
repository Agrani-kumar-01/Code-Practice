// javascript loops practice program 
  
  // Q 1. print this pattern

// 1 1 1 1 1 1 1 1 1 1
// 2 2 2 2 2 2 2 2 2 2
// 3 3 3 3 3 3 3 3 3 3
// 4 4 4 4 4 4 4 4 4 4
// 5 5 5 5 5 5 5 5 5 5
// 6 6 6 6 6 6 6 6 6 6
// 7 7 7 7 7 7 7 7 7 7
// 8 8 8 8 8 8 8 8 8 8
// 9 9 9 9 9 9 9 9 9 9
// 10 10 10 10 10 10 10 10 10 10

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log()
// }


// Q 2.  print this pattern
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10
// 1 2 3 4 5 6 7 8 9 10

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


// Q.3.  print this pattern

// 10 10 10 10 10 10 10 10 10 10
// 9 9 9 9 9 9 9 9 9 9
// 8 8 8 8 8 8 8 8 8 8
// 7 7 7 7 7 7 7 7 7 7
// 6 6 6 6 6 6 6 6 6 6
// 5 5 5 5 5 5 5 5 5 5
// 4 4 4 4 4 4 4 4 4 4
// 3 3 3 3 3 3 3 3 3 3
// 2 2 2 2 2 2 2 2 2 2
// 1 1 1 1 1 1 1 1 1 1

// for(let i=10;i>=1;i--){
//     for(let j=1;j<=10;j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log()
// }


// Q 4. print this pattern

// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1
// 10 9 8 7 6 5 4 3 2 1

// for (let i = 1; i <= 10; i++) {
//     for (let j = 10; j >= 1; j--) {
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


// Q 5. print this pattern 

// A A A A A A A A A A
// B B B B B B B B B B
// C C C C C C C C C C
// D D D D D D D D D D
// E E E E E E E E E E
// F F F F F F F F F F
// G G G G G G G G G G
// H H H H H H H H H H
// I I I I I I I I I I
// J J J J J J J J J J

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         process.stdout.write(`${String.fromCharCode(64+i)} `)
//     }
//     console.log()
// }

// console.log(String.fromCharCode(65))

// Q 6. print this pattern

// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J
// A B C D E F G H I J

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=10;j++){
//         process.stdout.write(`${String.fromCharCode(64+j)} `)
//     }
//     console.log()
// }


// Q 7. print this pattern

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
// 7 7 7 7 7 7 7
// 8 8 8 8 8 8 8 8
// 9 9 9 9 9 9 9 9 9
// 10 10 10 10 10 10 10 10 10 10

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${i} `)
//     }
//     console.log()
// }


// Q 8. print this pattern

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8 9 10

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log()
// }


// Q 9. print this pattern
// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F
// G G G G G G G
// H H H H H H H H
// I I I I I I I I I
// J J J J J J J J J J

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${String.fromCharCode(64+i)} `)
//     }
//     console.log()
// }

// Q 10. print this pattern
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F
// A B C D E F G
// A B C D E F G H
// A B C D E F G H I
// A B C D E F G H I J

// for(let i=1;i<=10;i++){
//     for(let j=1;j<=i;j++){
//         process.stdout.write(`${String.fromCharCode(64+j)} `)
//     }
//     console.log()
// }


// Q 11. print this pattern
// * * * * * * * * * *
// * * * * * * * * *
// * * * * * * * *
// * * * * * * *
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// for(let i=10;i>=1;i--){
//     for(let j=1;j<=i;j++){
//         process.stdout.write('* ')
//     }
//     console.log()
// }


// Q 12. print this pattern
// 1 1 1 1 1 1 1 1 1 1
// 2 2 2 2 2 2 2 2 2
// 3 3 3 3 3 3 3 3
// 4 4 4 4 4 4 4
// 5 5 5 5 5 5
// 6 6 6 6 6
// 7 7 7 7
// 8 8 8
// 9 9
// 10

// for (let i = 1; i <= 10; i++) {
//     for (let j = 10; j >= i; j--) {
//         process.stdout.write(`${i} `)
//     }
//     console.log()
// }


// Q . 13 print this pattern 
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

// space = 4
// const n = 7

// for(let col=1;col<=n;col++){
//   for(let space=0;space<=n-col;space++){
//     process.stdout.write("  ")
//   }
//   let row = 1
//   while(row<=2*col-1){
//     process.stdout.write("* ")
//     row++
//   }
//   console.log()
// }


// Q 14 print this pattern.
//         1
//       2 2 2
//     3 3 3 3 3
//   4 4 4 4 4 4 4
// 5 5 5 5 5 5 5 5 5

// const row = 5
// for(let i=1;i<=row;i++){
//   for(let space = 1;space<=row-i;space++){
//     process.stdout.write("  ")
//   }
//   let col = 1
//   while(col<=2*i-1){
//     process.stdout.write(`${i} `)
//     col++
//   }
//   console.log()
// }


// Q. 15 print this pattern
//         1
//       1 2 3
//     1 2 3 4 5
//   1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8 9

// const row = 5
// for(let i=1;i<=row;i++){
//   for(let space=1;space<=row-i;space++){
//     process.stdout.write("  ")
//   }
//   let col = 1
//   while(col<=2*i-1){
//     process.stdout.write(`${col} `)
//     col++
//   }
//   console.log()
// }


// Q.16 print this pattern
//         1
//       3 2 1
//     5 4 3 2 1
//   7 6 5 4 3 2 1
// 9 8 7 6 5 4 3 2 1

// const row = 5
// for(let i=1;i<=row;i++){
//   for(let space=1;space<=row-i;space++){
//     process.stdout.write("  ")
//   }
//   let col =2*i-1 
//   while(col>=1){
//     process.stdout.write(`${col} `)
//     col--
//   }
//   console.log()
// }


// Q. 17

//         0
//       1 0 1
//     2 1 0 1 2
//   3 2 1 0 1 2 3
// 4 3 2 1 0 1 2 3 4

// const row = 5
// for(let i=1;i<=row;i++){
//   for(let space = 1;space<=row-i;space++){
//     process.stdout.write("  ")
//   }
//   let col = 1
//   let count = i
//   while(col<=2*i-1){
//     if(count>0){
//       process.stdout.write(`${Math.abs(count-col)} `)
//     }
//     else {
//       count = 0
//       process.stdout.write(`${count+col} `)
//     }
//     col++
//       }
//       console.log()
//   }
