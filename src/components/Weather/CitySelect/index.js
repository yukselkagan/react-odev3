import { useCity } from "../../../Context/CityContext";
import cityData from "./city.json";






function CitySelect(){
    const { city, setCity } = useCity();

    const changeCity = (inputCity) => {

        //console.log("wwww"+inputCity.target.value);
        setCity(inputCity.target.value);
    }


    return (
        <div className="container" >
            <div className="bg-dark pt-1 pb-4" >
                {city}
                <select className="form-select mx-auto" style={{width: "500px"}} onChange={changeCity} >
                    {/* <option>
                        İstanbul
                    </option>
                    <option>
                        Ankara
                    </option>
                    <option>
                        İzmir
                    </option> */}
                    {
                        cityData.map(
                            (rCity, key) => {
                
                              return (
                                <option key={key} >
                                    {rCity.name}
                                </option>

                              );
                
                            }
                        )
                    }


                </select>
            </div>
        </div>
    );

}



export default CitySelect;





