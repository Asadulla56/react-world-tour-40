import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, area, population } = country;
  return (
    <div className="country">
      <h3>Country Name: {name?.common}</h3>
      <img src={flags.png} alt="" />
      <h5>Area: {area}</h5>
      <h5>Population: {population}</h5>

    </div>
  );
};

export default Country;
