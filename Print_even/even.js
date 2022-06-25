 let a = parseInt(process.argv[2])
function even(n){
    if(n<=a){
        if(n%2==0){
            console.log(n)
        }even(n+1)
    }
}even(1)


