function range (num){
    if(num>=1){
        console.log(num)
        return range(num-1)
        
    }
}range(10)