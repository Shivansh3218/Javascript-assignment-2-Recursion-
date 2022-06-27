let a = parseInt(process.argv[2])
let sum = 0
function fibo(first,second,count=0){ 
    if(count<=a){
        sum = first+second
       fibo(second,sum,count+1) 
    } 
    return sum
}fibo(1,1)
console.log(sum)