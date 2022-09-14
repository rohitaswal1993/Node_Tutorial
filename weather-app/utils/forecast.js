const request=require('request')

const forecast=(lattitude,longitude,callback)=>{
    //const url="http://api.weatherstack.com/current?access_key=9494e670fad0fc5f315366cf7385522e&query="+lattitude+","+longitude+"&units=m"
     const url="http://api.weatherstack.com/current?access_key=9494e670fad0fc5f315366cf7385522e&query=New%20York&units=f"
    console.log(url);
    // request({url:url,json:true},(error,response)=>{
        request({url,json:true},(error,{body})=>{
        if(error){
            console.log('unable to connect to location services!',undefined)
        }else if(body.error){
            ('unable to find location. Try another search',undefined)
        }else{
            callback(undefined,{
                temperature:body.current.temperature,
                wind_speed:body.current.wind_speed,
                feelslike:body.current.feelslike

            })
        }
    })
}
module.exports=forecast;