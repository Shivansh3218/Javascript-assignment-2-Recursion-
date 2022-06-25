let num = parseInt(process.argv[2])
let count=0
function prime(num , i=1){
if(i<=num){
    if(num%i==0){
        count=count+1
        // console.log(count)
    }
    return prime(num,i+1)
}
// return count
}prime(num)
// console.log(count)

if(count==2){
    console.log("The number is a prime number ")
}else {
    console.log("The number is not a prime number ")
}