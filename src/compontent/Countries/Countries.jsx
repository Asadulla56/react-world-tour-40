import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handlerVisitedCountry = (country) => {
    // console.log('add to this your visited country')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handlerVisitedFlag = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };

  //   remove item from  list in a state
  // use filter the elements all the expect the one want to remove

  return (
    <div>
      {/* visited country */}
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Country: {visitedCountries.length}</h5>
        <ul>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* flags container */}
      <div className="flag-container">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>

      {/* display country */}

      <div className="country-conbtainer">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handlerVisitedCountry={handlerVisitedCountry}
            handlerVisitedFlag={handlerVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
