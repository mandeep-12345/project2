function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if(hasDrivingLiscence===true){
        if(isTired===false && isSober===true){
            return("You can drive")
        }
        else{
            return("You shouldn't drive")
        }
    }
    else{
      
            return("You cannot drive")
        
    }
       
   
    // Write you code here
}


module.exports = CanDrive;
