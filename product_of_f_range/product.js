let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])
function product(a,b,pro=1){
if(a<=b){
    pro = a*pro
    // console.log(pro)
    return product(a+1,b,pro)
}console.log(pro)
}product(a,b)