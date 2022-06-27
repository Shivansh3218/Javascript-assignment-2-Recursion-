let a = parseInt(process.argv[2])
let sum = 0
function fibo(first,second,count=0){ 
    if(count<=5){
        sum = first+second
       fibo(second,sum,count+1)
       console.log(first)   
    }
    // return first
}fibo(1,1)
// console.log(first)