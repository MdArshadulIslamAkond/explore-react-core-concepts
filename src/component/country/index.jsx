import PropTypes from 'prop-types';
import './country.css';
import { useState } from 'react';
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {

    console.log(country);

    const {name:{common:name}, flags:{png:src}, population,area, cca2} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited =()=>{
        setVisited(!visited);
    }
    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
          <h3>Name: {name} </h3> 
          <img src={src} alt="" /> 
          <p>population: {population} </p>
          <p>Area: {area} </p>
          <p>Code: <small>{cca2}</small></p>
          <button onClick={()=>{
            handleVisitedCountry(country);
            handleVisitedFlag(country.flags.png);
          }}>Mark visited</button>
         {/*  <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
          <br /><br />
          <button onClick={()=>handleVisitedFlag(country.flags.png)}>Mark Flags</button> */}
          <br /><br />
          <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>
          {visited && 'I have visited this country'}
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.array.isRequired,
    handleVisitedCountry: PropTypes.func.isRequired,
    handleVisitedFlag: PropTypes.func.isRequired,
}
export default Country;