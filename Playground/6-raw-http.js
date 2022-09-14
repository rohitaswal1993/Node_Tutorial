const http=require('http')
const url="http://api.weatherstack.com/current?access_key=9494e670fad0fc5f315366cf7385522e&query=New%20York&units=f"
const request=http.request(url,(response)=>{
    let data='';
    response.on('data',(chunk)=>{
        data=data+chunk.toString()
        console.log(data)
    })
    response.on('end',()=>{
        const body=JSON.parse(data)
        console.log(body)
    })
})
request.on('error',(error)=>{
    console.log('An error',error)
})
request.end();