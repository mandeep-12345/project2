function CreateObject(arr) {
    
    const obj={}
    for(let i=0;i<arr.length-1;i++){
        if(i%2===0){
            obj[arr[i]]=arr[i+1]
        }
    }
    return(obj)

    


    // Write your code here
}

module.exports = CreateObject;
