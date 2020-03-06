const request = require('request')
const forecast = (longitude,latitude,callback)=>{
    const url = 'https://api.darksky.net/forecast/d50542e60aa366521cd379060546df36/'+longitude+','+latitude+'?units=si&lang=en'
    request({ url, json: true },(error,{body}={})=>{
        if(error){
            callback("Unable to connect to weather service!",undefined)
        }
        else if(body.error){
            callback("Unable to find location",undefined)
        }
        else{
            callback(undefined,body.daily.summary+" It is currently "+body.currently.temperature+" degrees Celsius. The high today is "+ body.daily.data[0].temperatureHigh + " degrees Celsius with a low of "+ body.daily.data[0].temperatureLow + " degrees Celsius. There is a "+body.currently.precipProbability+"% chance of rain.")
        }
    })
}

module.exports = forecast