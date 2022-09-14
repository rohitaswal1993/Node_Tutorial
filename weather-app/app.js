// console.log("starting")

// setTimeout(()=>{
//     console.log("3 seconds timer")
// },3000)

// console.log("stopping")
const request = require ('request')
//const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
const address=process.argv[2];
const url ="http://api.weatherstack.com/current?access_key=9494e670fad0fc5f315366cf7385522e&query=New%20York&units=f"
request({url:url,json:true},(error,response)=>{
    if(error){
        console.log('Unable to connect to weather service')
    }else if(response.body.error){
        console.log("unable to find location")
    }
    else{
        //console.log(response.body.current)
    console.log("It is currently",response.body.current.temperature,"degrees out. There is a ",response.body.current.precip,"% chance of rain")
    console.log(response.body.current.weather_descriptions[0]+". It is currently",response.body.current.temperature,"degrees out. It feels like",response.body.current.feelslike,"degrees out")

    }
    })
// const geoCodeURL="";
// request({url:geoCodeURL,json:true},(error,response)=>{
   
//     //console.log(response.body.current)
//     const lattitude=response.body.features[0].center[1];
//     const longitude=response.body.features[0].center[0];
//     console.log(lattitude,longitude)
//     console.log("It is currently",response.body.current.temperature,"degrees out. There is a ",response.body.current.precip,"% chance of rain")
//     console.log(response.body.current.weather_descriptions[0]+". It is currently",response.body.current.temperature,"degrees out. It feels like",response.body.current.feelslike,"degrees out")
// })


// geocode('Philadelphia New York',(error,data)=>{
//     console.log(error)
//     console.log(data)
// })
console.log("arguments location is:",address);
// geocode(address,(error,data)=>{
//     console.log(error)
//     console.log(data)
//     if(error){
//         return console.log(error)
//     }
//     forecast(data.latitude,data.longitude,(error,forecast)=>{
//         console.log('Error',error)
//         console.log('Data',data)
//         if(error){
//             return console.log(error)
//         }
//         console.log(data.location)
//    })
   
// })

if(!address){
    console.log("please provide an address")
}else{
    //geocode(address,(error,data)=>{   //destructuring data to 
    geocode(address,(error,{latitude,longitude,location}={})=>{
    if(error){
        return console.log(error)
    }
    forecast(latitude,longitude,(error,forecastData)=>{
        if(error){
            return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
   })
   
})
}

forecast(40.714,-74.006,(error,data)=>{
     console.log('Error',error)
     console.log('Data',data)
})




