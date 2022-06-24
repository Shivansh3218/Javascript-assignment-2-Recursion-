function fact(num){
    if(num>=1){
      return num*fact(num-1)
    }
    else
    return 1
}console.log(fact(5))