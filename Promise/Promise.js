let checkmaths = new Promise((res,rej) => {

let a= 1+5
if(a==2){
    res("Success")
}else{
    rej("Failed")
}
})


checkmaths.then((message)=>{
    console.log('This is in the then ' + message)
}).catch((message)=>{
    console.log('This is in the catch ' + message)
})