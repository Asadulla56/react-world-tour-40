import { useState } from "react";
import "./Country.css";


const Country = ({ country, handlerVisitedCountry }) => {

  const { name, flags, area, population, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {

    setVisited(!visited);
  };
  
  console.log(handlerVisitedCountry);


  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>

      <h3 style={{ color: visited ? "black" : "white" }}>
        Country Name: {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <h5>Area: {area}</h5>
      <h5>Population: {population}</h5>
      <p>
        <small className="code">Code:{cca3}</small>
      </p>
      <button className="gap" onClick={() => handlerVisitedCountry(country)}>Mark Visited</button>
      <br />
      <button onClick={handleVisited}>{visited ? "visited " : "Going"}</button>
      {visited ? "I have visited a country " : "I want to visited"}
    </div>
  );
};

export default Country;
