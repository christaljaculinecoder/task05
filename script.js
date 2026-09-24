// 1) Even or Odd

// const check=(num1) => {
//     if (num1 % 2 === 0){
//         return "Even";
//     }
//     return "odd";
// }
// console.log(check(num1=7));



// 2) Result Evaluator — Pass or Fail


//  const mark=(m) => {

//     if(m<0 || m>100){
      
//         console.log("Invalid Marks")
//     return null;
//     }

//     else if(m >=50) {
//     return( "Pass");
//     }

//     return("Fail");
    
   
// }

//  console.log(mark(120));


// 3)Maximum Finder — Largest of Three Numbers
//  const High=(X,Y,Z) => {
//     if (X>=Y && X>=Z){
//         return(X)
//     }
//     else if(Y>=X && Y>=Z){
//         return(Y)
//     }
//     else if(Z>=X && Z>=Y){
//         return(Z)
//     }

// }
//         console.log (High(9,9,2));



// Accumulator — Sum from 1 to N

// function sumToN(n){
//    let sum=0;
//    for (let i=1;i<=n;i++){
//       sum=sum+i
// }
//    return sum;

// }
//  console.log (sumToN(5));
//  console.log (sumToN(10));


// 5) Multiplication Table Generator

// function table(n){
//    for(let i=1;i<=10;i++){
//        console.log (n + "x" + i  + "=" + n*i)
      
//    }
// }
//  table(3);


// 6) Digit Counter — Number Length Finder


//   function countDigits(n){
//    let count=0
      
//         while(n>0){
//          count=count+1
//          n=Math.floor(n/10);
//   }
//   return count;
//   }
//   console.log(countDigits(1234))
//   console.log(countDigits(9))
//   console.log(countDigits(10000))


// 7)Number Reverser

// function reverseNumber(n){
//     let reverse=0;

//     while(n>0){
//         let Digit=n%10
//         reverse=reverse*10 + Digit
//         n=Math.floor(n/10)
//     }
//         return reverse;
//     }
//         console.log(reverseNumber(1234));
//         console.log(reverseNumber(500));
//         console.log(reverseNumber(91));


// 8) Factorial Engine

// function factorial(n){
//     let result=1

//     while(n>0){

//         result=result*n;
//         n=n-1;
//     }


//     return result;

// }
// console.log (factorial(5))
// console.log(factorial(3))
// console.log(factorial (1))


// 9) Prime Validator

// function prime(n){

//     if(n<2){
 
//         return false
// }
      
//     for(let i=2;i<n;i++){

//         if(n%i === 0 ){
//             return false
//         }
//     }
//  return true;

// }
// console.log(prime(7))
// console.log(prime(10))
// console.log(prime(2))


// 10) Pattern Builder — Star Triangle

// function starTriangle(n){
     
//     for(let i=1;i<=n;i++){

//         let stars= ""

//         for(let j=1;j<=i;j++){

//             stars= stars + "*"
//         }
//        console.log (stars);

//     }

// }
//  starTriangle(4);