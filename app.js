const forecast = require('./utils/forecast')

const address = process.argv[2]

if(!address){
    console.log('Select an address, please.')
} else {
    forecast(address, (error, forecastData) => {
        if(error){
            return console.log(error)
        }
        console.log(forecastData)
    })
}