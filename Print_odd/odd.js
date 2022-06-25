let a = parseInt(process.argv[2])
function odd(n){
    if(n<=a){
        if(n%2 !=0){
            console.log(n)    
        }
        odd(n+1)
    }
}odd(1)