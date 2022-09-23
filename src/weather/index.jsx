import axios from "axios";
import './index.css'
let Weather = () => {
    const { useState } = require("react");
    const [cityName, setCityName] = useState("");
    const [weather, setWeather] = useState(null);
    // console.log(cityName);
    let submitHandler = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=277f608914885e2e7fbf7f808f605934`)
            .then(response => {
                console.log(response.data);
                setWeather(response)
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (

        <div>
            <h1 className="h1"> React Weather App</h1>
            <form onSubmit={submitHandler}>
                <input className="input" type="text" required placeholder="Enter Your City Name" onChange={(e => { setCityName(e.target.value) })} />
            </form>
            {(weather === null) ? null :
                <div className="mainGlass">
                    <div className="glass">
                        <div className="city">{weather.data.name}</div>
                        <div className="opposite">
                            <div className="TMM">

                                <div><span> Tempurature: </span>{Math.round(weather.data.main.temp)} °C</div>
                                <div><span>Min-Temp:</span> {Math.round(weather.data.main.temp_min)} °C </div>
                                <div><span>Max-Temp:</span> {Math.round(weather.data.main.temp_max)} °C</div>

                            </div>

                            <div className="HP">

                                <div><span>Humidity:</span> {weather.data.main.humidity}%</div>
                                <div><span>Pressure:</span> {weather.data.main.pressure}mb</div>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>



    )
}
export default Weather;