import { useEffect, useState } from "react";
import { useCity } from "../../../Context/CityContext";
import axios from "axios";


const month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


function Show(){
    const { city } = useCity();
    const [weatherData, setWeatherData] = useState([ 
        {month: "January", day: 1, minTemp: 0, maxTemp: 1, condition: "Clear"  },
        {month: "January", day: 2, minTemp: 0, maxTemp: 1, condition: "Clear"  },
        {month: "January", day: 3, minTemp: 0, maxTemp: 1, condition: "Clear"  },
        {month: "January", day: 4, minTemp: 0, maxTemp: 1, condition: "Clear"  },
        {month: "January", day: 5, minTemp: 0, maxTemp: 1, condition: "Clear"  }
    ]);



    useEffect( () => {

        
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},tr&appid=94e56b40c5871ea5266ff917fa363d28&units=metric`;   

        axios(url)
        .then( (res) => {

            //console.log(res.data );
            var rDate = [];
            var rMonth = [];
            var rMinTemp = [];
            var rMaxTemp = [];
            var rCondition = [];

            rDate[0] = new Date( res.data.list[0].dt * 1000 ).getDate();
            rDate[1] = new Date( res.data.list[8].dt * 1000 ).getDate();
            rDate[2] = new Date( res.data.list[16].dt * 1000 ).getDate();
            rDate[3] = new Date( res.data.list[24].dt * 1000 ).getDate();
            rDate[4] = new Date( res.data.list[32].dt * 1000 ).getDate();

            for(var i=0; i <5; i++){
                rMonth[i] =  new Date( res.data.list[i*8].dt * 1000 ).getMonth();
                rMinTemp[i] =  res.data.list[i*8].main.temp_min;
                rMaxTemp[i] =  res.data.list[i*8].main.temp_max;
                rCondition[i] =  res.data.list[i*8].weather[0].main;
            }


            //console.log(res.data.list[0].weather[0].main );
            setWeatherData([
                {month: month[rMonth[0]], day: rDate[0], minTemp: rMinTemp[0], maxTemp: rMaxTemp[0], condition: rCondition[0]  },
                {month: month[rMonth[1]], day: rDate[1], minTemp: rMinTemp[1], maxTemp: rMaxTemp[1], condition: rCondition[1]  },
                {month: month[rMonth[2]], day: rDate[2], minTemp: rMinTemp[2], maxTemp: rMaxTemp[2], condition: rCondition[2]  },
                {month: month[rMonth[3]], day: rDate[3], minTemp: rMinTemp[3], maxTemp: rMaxTemp[3], condition: rCondition[3]  },
                {month: month[rMonth[4]], day: rDate[4], minTemp: rMinTemp[4], maxTemp: rMaxTemp[4], condition: rCondition[4]  }
            ]);
            //console.log(weatherData);

        } )
        .catch( (error) => {
            alert("Can not fetch data from API");
            console.log(error);
        });




    },[city]);


    const findImage = (weather) =>{
    
        switch(weather) {
            case "Clouds":
                return "/image/Clouds.png";
            case "Rain":
                return "/image/Rain.png";
            case "Clear":
                return "/image/Clear.png";
            default:
                return "/image/Clear.png";
            
        }


    };



    return (

        <div className="container">


        <div className="d-flex bg-secondary">
            <span className="text-white ms-3 p-2" >
                {city}
            </span>
        </div>




        <div className="card-group">
            <div className="card">
                <img src={findImage(weatherData[0].condition)} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{weatherData[0].day} {weatherData[0].month}</h5>
                <p className="card-text">{weatherData[0].minTemp}° / {weatherData[0].maxTemp}°</p>
                </div>
            </div>
            <div className="card">
                <img src={findImage(weatherData[1].condition)} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{weatherData[1].day} {weatherData[1].month}</h5>
                <p className="card-text">{weatherData[1].minTemp}° / {weatherData[1].maxTemp}°</p>
                </div>
            </div>
            <div className="card">
                <img src={findImage(weatherData[2].condition)}  className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{weatherData[2].day} {weatherData[2].month}</h5>
                <p className="card-text">{weatherData[2].minTemp}° / {weatherData[2].maxTemp}°</p>
                </div>
            </div>
            <div className="card">
                <img src={findImage(weatherData[3].condition)} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{weatherData[3].day} {weatherData[3].month}</h5>
                <p className="card-text">{weatherData[3].minTemp}° / {weatherData[3].maxTemp}°</p>
                </div>
            </div>
            <div className="card">
                <img src={findImage(weatherData[4].condition)} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{weatherData[4].day} {weatherData[4].month}</h5>
                <p className="card-text">{weatherData[4].minTemp}° / {weatherData[4].maxTemp}°</p>
                </div>
            </div>
        </div>



        </div>


    );



}

export default Show;