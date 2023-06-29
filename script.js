
window.onload=function(){
    const submit= document.getElementById('submit')
    console.log(submit,'hello')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1448b87813msh8c74f7822f70c44p15b85ajsn0f3bde80635a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    const getWeather = (city) => {
        cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
           
            console.log(response)
        
            cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_speed2.innerHTML = response.wind_speed
    //   wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
        })
    
    .catch(err => console.error(err));
    }
    
    submit.addEventListener("click", (e) =>{
    e.preventDefault()
     getWeather(city.value)
     })
    
     getWeather("Delhi")



     const getWeather_shanghai = (city) => {
        shanghai_city.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
           
            console.log(response)
        
            shanghaicloud_pct.innerHTML = response.cloud_pct
      shanghaitemp.innerHTML = response.temp
    //   temp2.innerHTML = response.temp
      Feels_like_shanghai.innerHTML = response.feels_like
      humidity_shanghai.innerHTML = response.humidity
    //   humidity2.innerHTML = response.humidity
      min_temp_shanghai.innerHTML = response.min_temp
      max_temp_shanghai.innerHTML = response.max_temp
      wind_speed_shanghai.innerHTML = response.wind_speed
    //   wind_speed2.innerHTML = response.wind_speed
      wind_degrees_shanghai.innerHTML = response.wind_degrees
      sunrise_shanghai.innerHTML = response.sunrise
      sunset_shanghai.innerHTML = response.sunset
        })
    
    .catch(err => console.error(err));
    }
    
    // submit.addEventListener("click", (e) =>{
    // e.preventDefault()
    //  getWeather(city.value)
    //  })
    
     getWeather_shanghai("Shanghai")


     const getWeather_boston = (city) => {
        boston_city.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
           
            console.log(response)
        
            bostoncloud_pct.innerHTML = response.cloud_pct
      bostontemp.innerHTML = response.temp
    //   temp2.innerHTML = response.temp
      Feels_like_boston.innerHTML = response.feels_like
      humidity_boston.innerHTML = response.humidity
    //   humidity2.innerHTML = response.humidity
      min_temp_boston.innerHTML = response.min_temp
      max_temp_boston.innerHTML = response.max_temp
      wind_speed_boston.innerHTML = response.wind_speed
    //   wind_speed2.innerHTML = response.wind_speed
      wind_degrees_boston.innerHTML = response.wind_degrees
      sunrise_boston.innerHTML = response.sunrise
      sunset_boston.innerHTML = response.sunset
        })
    
    .catch(err => console.error(err));
    }
    
    // submit.addEventListener("click", (e) =>{
    // e.preventDefault()
    //  getWeather(city.value)
    //  })
    
     getWeather_boston("Boston")


     const getWeather_Lucknow = (city) => {
        lucknow_city.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
           
            console.log(response)
        
            lucknowcloud_pct.innerHTML = response.cloud_pct
      lucknowtemp.innerHTML = response.temp
    //   temp2.innerHTML = response.temp
      Feels_like_lucknow.innerHTML = response.feels_like
      humidity_lucknow.innerHTML = response.humidity
    //   humidity2.innerHTML = response.humidity
      min_temp_lucknow.innerHTML = response.min_temp
      max_temp_lucknow.innerHTML = response.max_temp
      wind_speed_lucknow.innerHTML = response.wind_speed
    //   wind_speed2.innerHTML = response.wind_speed
      wind_degrees_lucknow.innerHTML = response.wind_degrees
      sunrise_lucknow.innerHTML = response.sunrise
      sunset_lucknow.innerHTML = response.sunset
        })
    
    .catch(err => console.error(err));
    }
    
    // submit.addEventListener("click", (e) =>{
    // e.preventDefault()
    //  getWeather(city.value)
    //  })
    
     getWeather_Lucknow("Lucknow")

     const getWeather_kolkata = (city) => {
        kolkata_city.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
           
            console.log(response)
        
            kolkatacloud_pct.innerHTML = response.cloud_pct
      kolkatatemp.innerHTML = response.temp
    //   temp2.innerHTML = response.temp
      Feels_like_kolkata.innerHTML = response.feels_like
      humidity_kolkata.innerHTML = response.humidity
    //   humidity2.innerHTML = response.humidity
      min_temp_kolkata.innerHTML = response.min_temp
      max_temp_kolkata.innerHTML = response.max_temp
      wind_speed_kolkata.innerHTML = response.wind_speed
    //   wind_speed2.innerHTML = response.wind_speed
      wind_degrees_kolkata.innerHTML = response.wind_degrees
      sunrise_kolkata.innerHTML = response.sunrise
      sunset_kolkata.innerHTML = response.sunset
        })
    
    .catch(err => console.error(err));
    }
    
    // submit.addEventListener("click", (e) =>{
    // e.preventDefault()
    //  getWeather(city.value)
    //  })
    
     getWeather_kolkata("Kolkata")
}

