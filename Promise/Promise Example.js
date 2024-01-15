const userleft = false
const userWahtchingCatMeme = true

function watchTutorailCallBack(callback, errorCallback) {

    if (userleft){
        errorCallback({
                name:'userleft',
                message:'User Left :('
            })
    } else if(userWahtchingCatMeme){
        errorCallback({
            name:'User Watching Cat Meme',
            message:'WebDevSimplified < Cat'
        })
    }
    
    else{
        callback('Thumbs up and subscribe')
    }

}