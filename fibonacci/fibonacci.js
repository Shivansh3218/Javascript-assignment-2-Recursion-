let a = parseInt(process.argv[2])
let sum= 0;
function fibo(first,second,count=1){
    if(count<=a){
    sum = first+second
    console.log(first)
     fibo(second,sum,count+1)   
    }
    return first
}
fibo(1,1,1)