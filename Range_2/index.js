let n = parseInt(process.argv[2])
// let i=0
function range(n){
    if(n<=10){   
        console.log(n)
       return range(++n)
    }
}range(1)