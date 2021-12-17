// code your solution here
function superbowlWin(arr){
    
    arr.find(function(obj){
        obj.result === "W"
    })
    for(let obj of arr){
        if(obj.result === "W"){
            return obj.year
        }
    }
  
}
