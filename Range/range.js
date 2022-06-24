function range (num,i){
    if(i<num){
        console.log(i)
        return range()
    }
}range(10,1)