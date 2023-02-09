import React, {useState } from 'react'


const Home = () => {
  const [data, setData] = useState({
    cloud_pct: 0,
    temp: 0,
    feels_like: 0,
    humidity: 0,
    min_temp: 0,
    max_temp: 0,
    wind_speed: 0,
    wind_degrees: 0,
    sunrise: 0,
    sunset: 0
});
const [city,setCity] = useState("")
// const [error,setError] = useState(false)

const fetchData=(city)=>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3dea4d93b5msh454174724244e24p1ab52fjsn1bc6fce105c1',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err))
}

    

  return (
    
    
    <main className="container p-5">
              <div className="searchbox d-flex" style={{margin:"auto",marginBottom:"1rem"}} role="search">
        <input className="form-control me-1 py-2 fs-5" type="search" placeholder="Search City..." value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button className="btn btn-outline-success me-1 fs-5" onClick={()=>fetchData(city)}>Search</button>
      </div>
      <h2 style={{fontFamily:"monospace",fontWeight:"bold"}} className='fs-1 m-3 text-primary text-center'>Wheather for {city.charAt(0).toUpperCase()}{city.slice(1,city.length)}</h2>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-dark">
          <div className="card-header py-3 text-bg-dark border-dark">
            <h4 className="my-0 fw-normal text-light">Temperature</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{data.temp}<small className="text-muted fw-light">°C</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Temperature is {data.temp}</li>
              <li>Min Temperature is {data.min_temp}</li>
              <li>Max Temperature is {data.max_temp}</li>
            </ul>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-dark">
          <div className="card-header py-3 text-bg-dark border-dark">
            <h4 className="my-0 fw-normal text-light">Humidity Info</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{data.humidity}<small className="text-muted fw-light">%</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Humidity is {data.humidity}</li>
              <li>Feels Like {data.feels_like}</li>
              <li>Wind Degree is {data.wind_degrees}</li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-dark">
          <div className="card-header py-3 text-bg-dark border-dark">
            <h4 className="my-0 fw-normal text-light">Wind Info</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">{data.wind_speed}<small className="text-muted fw-light">km/hr</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Wind Speed is {data.wind_speed}</li>
              <li>Sunrise Time is {data.sunrise}</li>
              <li>Sunset Time is {data.sunset}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </main>

  )
}

export default Home
