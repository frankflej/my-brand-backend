
const duplication=async (col,tit)=>{
    // const value=tit[]
    var one= await col.findOne(tit); 
    console.log(one)
    if(one){
        return true
    }
    else{
        return false
    }
}
export default duplication;