const url='https://api.github.com/users/JayMuchoki'
async function getdetail(){
    const response=await fetch(url,{
        headers:{
            'Authorization':'Bearer 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'
        }
    })
    const result=await response.json()
    console.log(result)
}
getdetail()

